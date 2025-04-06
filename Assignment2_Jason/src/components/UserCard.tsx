type User = {
  firstName: string;
  lastName: string;
  email: string;
  status: string;
  dob: string;
};

export default function UserCard({ user }: { user: User }) {
  const initials = user.firstName[0] + (user.lastName[0] || "");

  return (
    <div className="bg-white shadow p-4 rounded-lg">
      <div className="bg-[#3251D0] flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white text-lg font-bold mx-auto mb-2">
        {initials}
      </div>
      <h2 className="text-start font-semibold">
        {user.firstName} {user.lastName}
      </h2>
      <p className="text-sm text-start text-gray-600">{user.email}</p>
      <p className="text-sm text-start">Status: {user.status}</p>
      <p className="text-sm text-start">Date of Birth: {user.dob}</p>
      <div className="flex justify-end gap-2 mt-3">
        <button className="bg-[#3251D0] text-white px-3 py-1 rounded hover:bg-blue-600 transition">
          Edit
        </button>
        <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition">
          Delete
        </button>
      </div>
    </div>
  );
}
