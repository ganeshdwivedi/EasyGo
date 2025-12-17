import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import LoginScreen from "../components/LoginScreens/Login";
import Login2Screen from "../components/LoginScreens/Login2Screen";
import SignUpScreen from "../components/LoginScreens/SignUpScreen";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/auth",
    element: <LoginScreen />,
  },
  {
    path: "/auth/login",
    element: <Login2Screen />,
  },
  {
    path: "/auth/signup",
    element: <SignUpScreen />,
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);

export default router;
