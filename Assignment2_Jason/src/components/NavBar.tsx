import { FaMoon, FaRegMoon } from "react-icons/fa6";

export default function Navbar() {
  return (
    <nav className="bg-[#3251D0] text-white p-4 flex justify-between items-center shadow">
      <h1 className="text-xl font-bold">User Management</h1>
      <div className="flex gap-3">
        <button className="bg-white text-[#3251D0] font-medium px-4 py-1 rounded hover:bg-gray-100 transition">
          Create User
        </button>
        <button className="bg-red-500 text-white font-medium px-4 py-1 rounded hover:bg-red-600 transition">
          Logout
        </button>
        <button className="group px-4 py-1 transition">
          <span className="block group-hover:hidden">
            <FaRegMoon />
          </span>
          <span className="hidden group-hover:block">
            <FaMoon />
          </span>
        </button>
      </div>
    </nav>
  );
}
