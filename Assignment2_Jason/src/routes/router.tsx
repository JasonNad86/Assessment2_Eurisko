import { createBrowserRouter, Navigate } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import UsersPage from '../pages/UserPage';
import ProtectedRoute from '../components/ProtectedRoute';
import AddUserPage from '../pages/AddUserPage';
import EditUserPage from '../pages/EditUserPage';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: '/dashboard',
        element: <UsersPage />,
      },
      {
        path: '/dashboard/new',
        element: <AddUserPage />,
      },
      {
        path:'/dashboard/edit/:id',
        element:<EditUserPage/>
      },
    ],
  },
  {
    path: '/',
    element: <Navigate to="/login" replace />,
  },
  {
    path: '*',
    element: <Navigate to="/login" replace />,
  },
]);

export default router;