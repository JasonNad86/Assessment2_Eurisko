import { memo } from "react";
import { User } from "../types/User";

type Props = {
  user: User | null;
};

 function UserCard({ user }: Props) {
  if (!user) {
    return (
      <div className="bg-white dark:bg-gray-700 shadow p-4 rounded-lg text-center">
        <p className="text-gray-500 dark:text-gray-400">No user data available</p>
      </div>
    );
  }

  const initials = (user.firstName?.[0] || '') + (user.lastName?.[0] || '');

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
        Status: <span className={user.status === 'ACTIVE' ? 'text-green-500' : 'text-red-500'}>
          {user.status}
        </span>
      </p>
      <p className="text-sm text-start dark:text-gray-300">Date of Birth: {user.dob}</p>
      <div className="flex justify-end gap-2 mt-3">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded transition">
          Edit
        </button>
        <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded transition">
          Delete
        </button>
      </div>
    </div>
  );
}

export default memo(UserCard);
