export default function Navbar() {
    return (
      <nav className="bg-primary text-white p-4 flex justify-between items-center shadow">
        <h1 className="text-xl font-bold">User Management</h1>
        <div className="flex gap-3">
          <button className="bg-white text-primary font-medium px-4 py-1 rounded hover:bg-gray-100 transition">Create User</button>
          <button className="bg-red-500 text-white font-medium px-4 py-1 rounded hover:bg-red-600 transition">Logout</button>
          <button className="bg-white text-primary font-medium px-4 py-1 rounded hover:bg-gray-100 transition">Toggle Theme</button>
        </div>
      </nav>
    );
  }
  