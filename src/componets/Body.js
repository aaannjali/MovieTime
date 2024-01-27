import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Browse from "../componets/Browse"
import Login from './Login';

const Body = () => {
  const appRouter = createBrowserRouter([
        {
                path:"/",
                element: <Login />,
        },
        {
                path:"/",
                element: <Browse />,
        },
]);  
  return (
    <div>
       <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body
