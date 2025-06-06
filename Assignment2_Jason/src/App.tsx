import { RouterProvider } from 'react-router-dom';
import router from './routes/router';
import { useThemeStore } from './zustand/store';
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';

function App() {
  const { isDark } = useThemeStore()

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
  }, [isDark])

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <RouterProvider router={router} />
      <Toaster position="top-center" />
    </div>
  )
}

export default App;