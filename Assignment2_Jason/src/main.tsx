import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { initTheme } from './utils/themes.ts'
import { QueryClientProvider } from '@tanstack/react-query';
import { getQueryClient } from './lib/get-query-client.ts'

initTheme();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={getQueryClient()}>
    <App />
    </QueryClientProvider>
  </StrictMode>,
)
