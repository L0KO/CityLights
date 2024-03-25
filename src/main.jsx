import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import HomePage from './routes/HomePage';
import SearchPage from './routes/SearchPage';
import EcoSearchPage from './routes/EcoSearchPage';
import DetailsPage from './routes/DetailsPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/search",
    element: <SearchPage />
  },
  {
    path: "/eco",
    element: <EcoSearchPage />
  },
  {
    path: "/details",
    element: <DetailsPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
