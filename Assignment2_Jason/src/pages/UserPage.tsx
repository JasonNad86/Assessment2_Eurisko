import { useMemo, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import UserCard from '../components/UserCard';
import Navbar from '../components/NavBar';
import { QueryKeys } from '../constants/query-keys';
import { getUsers } from '../api/users/get-user';
import {useDebounce} from 'use-debounce'; 

export default function UsersPage() {
  const [search, setSearch] = useState("");
  const [debouncedSearch] = useDebounce(search, 500); 

  const getUsersQuery = useQuery({
    queryKey:[QueryKeys.USERS, debouncedSearch],
    queryFn: ({ signal }) => getUsers({
      search: debouncedSearch,
      config: { signal }
    }),
    staleTime: 1000 * 60 * 5,
  });

  const users = useMemo(
    () => getUsersQuery.data ?? [],
    [getUsersQuery.data]
  );
  console.log("Users:",users)

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

        {getUsersQuery.isError && (
          <div className="mb-4 p-3 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-md">
            {getUsersQuery.error ? getUsersQuery.error.message : 'Failed to fetch users'}
          </div>
        )}

        {getUsersQuery.isLoading ? (
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