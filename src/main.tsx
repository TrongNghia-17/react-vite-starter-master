import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Layout from './layout'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/book",
        element: <div>book world!</div>,
      },
      {
        path: "/about",
        element: <div>about world!</div>,
      },
    ]
  },
  {
    path: "/login",
    element: <div>login world!</div>,
  }, {
    path: "/register",
    element: <div>register world!</div>,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <Layout /> */}
    <RouterProvider router={router} />
  </StrictMode>
)
