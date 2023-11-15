import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Home from './routes/Home.tsx'
import './index.css'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import GenreList from './components/GenreList.tsx'
import { GameList } from './components/GameList.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/home', element: <Home /> },
      { path: '/genre', element: <GenreList /> },
      { path: '/gamelist', element: <GameList /> },
    ]
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)
