import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type ThemeState = {
  isDark: boolean
  toggleTheme: () => void
  setTheme: (dark: boolean) => void
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      isDark: false,
      toggleTheme: () => set((state) => ({ isDark: !state.isDark })),
      setTheme: (dark) => set({ isDark: dark }),
    }),
    {
      name: 'theme-storage',
    }
  )
)

type AuthState = {
  accessToken: string | null
  expiresIn: number | null
  login: (token: string, expires: number) => void
  logout: () => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      accessToken: null,
      expiresIn: null,
      login: (token, expires) => set({ accessToken: token, expiresIn: expires }),
      logout: () => set({ accessToken: null, expiresIn: null }),
    }),
    {
      name: 'auth-storage',
    }
  )
)