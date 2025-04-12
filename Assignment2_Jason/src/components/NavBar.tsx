import { useNavigate } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";
import { useAuthStore, useThemeStore } from "../zustand/store";

export default function Navbar() {
  const navigate = useNavigate();
  const logout = useAuthStore((state) => state.logout);
  const { isDark, toggleTheme } = useThemeStore();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-blue-800 dark:bg-gray-800 text-white p-4 flex justify-between items-center shadow-lg">
      <h1 className="text-xl font-bold dark:text-gray-200">User Management</h1>
      
      <div className="flex items-center gap-4">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg hover:bg-blue-700 dark:hover:bg-gray-700 transition-colors"
        >
          {isDark ? (
            <FaSun className="w-5 h-5 text-yellow-400" />
          ) : (
            <FaMoon className="w-5 h-5 text-blue-200" />
          )}
        </button>

        <button
          className="bg-white text-blue-800 dark:bg-gray-700 dark:text-white font-medium px-4 py-2 rounded-md 
            hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
        >
          Create User
        </button>

        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 text-white font-medium px-4 py-2 rounded-md 
            transition-colors"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}