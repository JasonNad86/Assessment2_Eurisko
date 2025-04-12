import { useThemeStore } from '../zustand/store'

export function initTheme() {
  const savedTheme = localStorage.getItem('theme-storage')
  const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  
  const isDark = savedTheme 
    ? JSON.parse(savedTheme).state.isDark 
    : systemDark

  document.documentElement.classList.toggle('dark', isDark)
  
  useThemeStore.getState().setTheme(isDark)
}