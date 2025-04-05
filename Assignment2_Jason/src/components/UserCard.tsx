type User = {
    firstName: string;
    lastName: string;
    email: string;
    status: string;
    dob: string;
  };
  
  export default function UserCard({ user }: { user: User }) {
    const initials = user.firstName[0] + user.lastName[0];
  
    return (
      <div className="bg-white shadow p-4 rounded-lg">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white text-lg font-bold mx-auto mb-2">
          {initials}
        </div>
        <h2 className="text-center font-semibold">{user.firstName} {user.lastName}</h2>
        <p className="text-sm text-center text-gray-600">{user.email}</p>
        <p className="text-sm text-center">Status: {user.status}</p>
        <p className="text-sm text-center">DOB: {user.dob}</p>
        <div className="flex justify-center gap-2 mt-3">
          <button className="bg-primary text-white px-3 py-1 rounded hover:bg-blue-700 transition">Edit</button>
          <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition">Delete</button>
        </div>
      </div>
    );
  }
  