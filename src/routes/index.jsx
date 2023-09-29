import { createBrowserRouter } from "react-router-dom";
import Layout from "../views/layout";
import {
  Categoies,
  Communities,
  DashboardMenu,
  Home,
  Orders,
  Polls,
  ThreeHours,
} from "../views";
import Login from "../views/auth/login/login";
import { Dashboard } from "../views/dashboard";
import { DashboardLayout } from "../views/layout/dashboard-layout";
import { DashboardCategories } from "../views/categoriess/categories";
import { DJUser } from "../views/dj-user";
import { DJUserLayout } from "../views/layout/dj-user-layout";

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
    errorElement: <p>Error</p>,
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
    errorElement: <p>Error</p>,
  },
  {
    path: "/menu",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Categoies />,
      },
    ],
    errorElement: <p>Error</p>,
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
    errorElement: <p>Error</p>,
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
    errorElement: <p>Error</p>,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <p>Error</p>,
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
            element: <DashboardMenu />,
            index: true,
          },
        ],
      },
    ],
    errorElement: <Error />,
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
    errorElement: <Error />,
  },
]);

export default router;
