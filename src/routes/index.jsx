import { createBrowserRouter } from "react-router-dom";
import Layout from "../views/layout";
import {
  Menu,
  Communities,
  Dashboard,
  DashboardCategories,
  Menus,
  Home,
  Orders,
  Polls,
  ThreeHours,
  Waiters,
  SignUp,
  Login,
  Category,
} from "../views";
import { DashboardLayout } from "../views/layout/dashboard-layout";
import { DJUser } from "../views/dj-user";
import { DJUserLayout } from "../views/layout/dj-user-layout";
import { NotFound } from "../components";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
    errorElement: <NotFound />,
  },
  {
    path: "/three-hours",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <ThreeHours />,
      },
    ],
    errorElement: <NotFound />,
  },
  {
    path: "/menu",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Menu />,
      },
    ],
    errorElement: <NotFound />,
  },
  {
    path: "/polls",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Polls />,
      },
    ],
    errorElement: <NotFound />,
  },
  {
    path: "/category",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Category />,
      },
    ],
    errorElement: <NotFound />,
  },
  {
    path: "/communities",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Communities />,
      },
    ],
    errorElement: <NotFound />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <NotFound />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
    errorElement: <NotFound />,
  },

  {
    path: "/dashboard",
    element: (
      // <ProtectedRoute>
      <DashboardLayout />
      // </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "orders",
        children: [
          {
            element: <Orders />,
            index: true,
          },
        ],
      },
      {
        path: "categories",
        children: [
          {
            element: <DashboardCategories />,
            index: true,
          },
        ],
      },
      {
        path: "menus",
        children: [
          {
            element: <Menus />,
            index: true,
          },
        ],
      },
      {
        path: "waiter",
        children: [
          {
            element: <Waiters />,
            index: true,
          },
        ],
      },
    ],
    errorElement: <NotFound />,
  },
  {
    path: "music-list",
    element: <DJUserLayout />,
    children: [
      {
        index: true,
        element: <DJUser />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;
