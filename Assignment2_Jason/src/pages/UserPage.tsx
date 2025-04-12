// src/pages/UsersPage.tsx
import { useEffect, useState } from 'react';
import { useAuthStore } from '../zustand/store';
import UserCard from '../components/UserCard';
import Navbar from '../components/NavBar';
import { User } from '../types/User';

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const accessToken = useAuthStore((state) => state.accessToken);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await fetch(`/api/users?search=${search}`, {
          headers: { 
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
          }
        });

        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.result?.message || 'Failed to fetch users');
        }
        setUsers(data.result?.data?.users || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error occurred');
        setUsers([]);
      } finally {
        setLoading(false);
      }
    };

    const debounceTimer = setTimeout(fetchUsers, 500);
    return () => clearTimeout(debounceTimer);
  }, [search, accessToken]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Navbar />
      <div className="p-4 mx-auto max-w-7xl">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search users..."
          className="w-full md:w-96 p-3 mb-6 rounded-lg border border-gray-300 
            focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 
            dark:border-gray-600 dark:text-white"
        />

        {error && (
          <div className="mb-4 p-3 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-md">
            {error}
          </div>
        )}

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : users.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {users.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </div>
        ) : (
          <div className="text-center py-10 text-gray-500 dark:text-gray-400">
            {search ? "No matching users found" : "No users available"}
          </div>
        )}
      </div>
    </div>
  );
}