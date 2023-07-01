import { createBrowserRouter, Navigate } from "react-router-dom";
import { AuthView, HomeView, ProfileView,RegisterView } from "./View";
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
            {
                path:"register",
                element:<RegisterView/>,
            }
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