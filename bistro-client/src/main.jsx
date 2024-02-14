import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { Routes } from './assets/components/Route';
import { HelmetProvider } from 'react-helmet-async';
import AuthContext from './assets/components/AuthContext';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
const queryClient = new QueryClient()




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
    <QueryClientProvider client={queryClient}>
    <AuthContext>
     <RouterProvider router={Routes}> </RouterProvider>
     </AuthContext>
    </QueryClientProvider>
    </HelmetProvider>
  </React.StrictMode>
)
