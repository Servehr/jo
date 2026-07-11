import { createBrowserRouter } from "react-router-dom"
import { Login } from "../views/auth/login"
import { Register } from "../views/auth/register"


const router = createBrowserRouter(
  [
     { path: '/',  element: <Login /> },
     { path: '/register',  element: <Register /> },
  ]
)

export default router