import {schema, UserSchema} from "../schema/UserSchema";
import {zodResolver} from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {useForm} from "react-hook-form"
import { useNavigate } from "react-router-dom";
import { createUser } from "../api/users/create-user";
import { QueryKeys } from "../constants/query-keys";
export default function AddUserPage() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<UserSchema>({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      dateOfBirth: "",
      status: undefined,
    }
  });

  const createUserMutation = useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QueryKeys.USERS] });
      reset();
      navigate('/dashboard');
    },
    onError: (error) => {
      console.error("Error creating user:", error);
    }
  });

  const onSubmit = (data: UserSchema) => {
    createUserMutation.mutate({ userData: data });
    console.log(data)
  };
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center dark:text-white">
          Add New User
        </h1>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* First Name */}
          <div>
            <label
              className="block text-sm font-medium dark:text-gray-300"
            >
              First Name
            </label>
            <input
              {...register("firstName")}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm 
                focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 
                dark:text-white"
              placeholder="John"
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
            )}
          </div>

          {/* Last Name */}
          <div>
            <label
              className="block text-sm font-medium dark:text-gray-300"
            >
              Last Name
            </label>
            <input
              {...register("lastName")}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm 
                focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 
                dark:text-white"
              placeholder="Doe"
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium dark:text-gray-300"
            >
              Email
            </label>
            <input
              {...register("email")}
              type="email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm 
                focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 
                dark:text-white"
              placeholder="johndoe@example.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Date of Birth */}
          <div>
            <label
              className="block text-sm font-medium dark:text-gray-300"
            >
              Date of Birth
            </label>
            <input
              {...register("dateOfBirth")}
              type="date"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm 
                focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 
                dark:text-white"
            />
            {errors.dateOfBirth && (
              <p className="text-red-500 text-sm mt-1">{errors.dateOfBirth.message}</p>
            )}
          </div>

          {/* Status */}
          <div>
            <label
              className="block text-sm font-medium dark:text-gray-300"
            >
              Status
            </label>
            <select
              {...register("status")}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm 
                focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 
                dark:text-white"
            >
              <option value="">Select Status</option>
              <option value="active">Active</option>
              <option value="locked">Locked</option>
            </select>
            {errors.status && (
              <p className="text-red-500 text-sm mt-1">{errors.status.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md 
              transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Submitting..." : "Add User"}
          </button>
        </form>
      </div>
    </div>
  );
}