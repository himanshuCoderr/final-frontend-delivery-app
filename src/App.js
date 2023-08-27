import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import AppetizerPage from "./Pages/AppetizerPage";
import VegPage from "./Pages/VegPage";
import DessertsPage from "./Pages/DessertsPage";
import NonVegPage from "./Pages/NonVegPage";
import ChineesePage from "./Pages/ChineesePage";
import LoginPage from "./Pages/LoginPage";
import ProfilePage from "./Pages/ProfilePage";
import MyCartPage from "./Pages/MyCartPage";
import * as ReactDOM from "react-dom";
import { AuthProvider } from "./AuthContext/AuthContext";
import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import BreakFastPage from "./Pages/BreakFastPage";
import SignUpPage from "./Pages/SignUpPage";
import AdminLogin from "./Pages/Admin/AdminLogin";
import OrderHistoryPage from "./Pages/OrderHistoryPage";
const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/userProfile",
    element: <ProfilePage />,
  },
  {
    path: "/myCart",
    element: <MyCartPage />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
  {
    path: "/appetizer",
    element: <AppetizerPage />,
  },
  {
    path: "/veg",
    element: <VegPage />,
  },
  {
    path: "/nonveg",
    element: <NonVegPage />,
  },
  {
    path: "/desserts",
    element: <DessertsPage />,
  },
  {
    path: "/breakfast",
    element: <BreakFastPage />,
  },
  {
    path: "/chineese",
    element: <ChineesePage />,
  },
  {
    path: "/admin/adminLogin",
    element: <AdminLogin />,
  },
  {
    path: "/user/orderHistory",
    element: <OrderHistoryPage/>,
  },
]);

function App() {
  return (
    <AuthProvider>
      <div className=" ">
        <RouterProvider router={router} />
      </div>
    </AuthProvider>
  );
}

export default App;
