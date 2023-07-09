import { createBrowserRouter, Navigate } from "react-router-dom";
import { AuthView, HomeView, ProfileView } from "./View";
import AuthCheck from "./utils/AuthCheck";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Navigate to="/app/home" replace/>,
      },
    {
        path:"/auth",
         children:[
            {
                path:"login",
                element:<AuthView/>,
            },
         ]
    },
    {
        path:"/app",
        element: <AuthCheck/>,
        children:[
            {
                path:"home",
                element:<HomeView/>,
            },
         {
                path:"profile",
                element:<ProfileView/>,
            } 
        ]
    }
])

export default router