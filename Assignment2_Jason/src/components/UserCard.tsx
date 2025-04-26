import { memo, useState } from "react";
import { User } from"../../mock/mock.type"
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUser } from "../api/users/delete-user";
import { toast } from "react-hot-toast";
import { QueryKeys } from "../constants/query-keys";

type Props = {
  user: User | null;
};

 function UserCard({ user }: Props) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [showConfirm, setShowConfirm] = useState(false); // ⬅️ modal state

  const deleteMutation = useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QueryKeys.USERS] });
      toast.success("User deleted successfully!");
    },
    onError: () => {
      toast.error("Failed to delete user.");
    },
  });
  if (!user) {
    return (
      <div className="bg-white dark:bg-gray-700 shadow p-4 rounded-lg text-center">
        <p className="text-gray-500 dark:text-gray-400">No user data available</p>
      </div>
    );
  }

  const initials = (user.firstName?.[0] || '') + (user.lastName?.[0] || '');

  const handleDelete = () => {
    setShowConfirm(true);
  };

  const confirmDelete = () => {
    deleteMutation.mutate(user.id);
    setShowConfirm(false);
  };

  return (
    <div className="bg-white dark:bg-gray-700 shadow p-4 rounded-lg">
      <div className="bg-blue-600 flex items-center justify-center w-12 h-12 rounded-full text-white text-lg font-bold mx-auto mb-2">
        {initials || '?'}
      </div>
      <h2 className="text-start font-semibold dark:text-white">
        {user.firstName} {user.lastName}
      </h2>
      <p className="text-sm text-start text-gray-600 dark:text-gray-300">{user.email}</p>
      <p className="text-sm text-start dark:text-gray-300">
        Status: <span className={user.status.toLowerCase() === 'active' ? 'text-green-500' : 'text-red-500'}>
          {user.status}
        </span>
      </p>
      <p className="text-sm text-start dark:text-gray-300">Date of Birth: {user.dateOfBirth}</p>
      <div className="flex justify-end gap-2 mt-3">
        <button onClick={() => navigate(`/dashboard/edit/${user.id}`)} className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded transition">
          Edit
        </button>
        <button onClick={handleDelete} className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded transition">
          Delete
        </button>
        {showConfirm && (
          <div className="fixed inset-0 backdrop-blur-sm bg-white/10 flex items-center justify-center">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-bold dark:text-white mb-4">Confirm Deletion</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">Are you sure you want to delete this user?</p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowConfirm(false)}
                className="px-4 py-2 bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 rounded"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
    </div>
  );
}

export default memo(UserCard);
