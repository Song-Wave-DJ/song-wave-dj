import { createBrowserRouter } from "react-router-dom";
import {
  Menu,
  Communities,
  Dashboard,
  Menus,
  Home,
  Orders,
  Polls,
  ThreeHours,
  Waiters,
  SignUp,
  Login,
  Category,
  AdminDashboard,
  AdminOrders,
  AdminManagers,
  AdminMusic,
  ManagerLayout,
  DJUserLayout,
  AdminLayout,
  Layout,
  AdminWaiter,
  Users,
  AdminMenus,
  Billings,
  TableBillings,
} from "@/views";
import { DJUser } from "../views/dj-user";
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
    path: "three-hours",
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
    path: "menu",
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
    path: "polls",
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
    path: "category",
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
    path: "communities",
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
    path: "login",
    element: <Login />,
    errorElement: <NotFound />,
  },
  {
    path: "sign-up",
    element: <SignUp />,
    errorElement: <NotFound />,
  },

  // Mangar
  {
    path: "dashboard",
    element: <ManagerLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "/dashboard/orders",
        element: <Orders />,
      },
      {
        path: "/dashboard/billings/:id",
        element: <TableBillings />,
      },
      {
        path: "/dashboard/menus",
        element: <Menus />,
      },
      {
        path: "/dashboard/waiter",
        element: <Waiters />,
      },
      {
        path: "/dashboard/billings",
        element: <Billings />,
      },
      {
        path: "/dashboard/music",
        element: <DJUser />,
      },
    ],
    errorElement: <NotFound />,
  },

  // Admin
  {
    path: "admin-dashboard",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <AdminDashboard />,
      },
      {
        path: "/admin-dashboard/orders",
        element: <AdminOrders />,
      },
      {
        path: "/admin-dashboard/mangers",
        element: <AdminManagers />,
      },
      {
        path: "/admin-dashboard/musics",
        element: <AdminMusic />,
      },
      {
        path: "/admin-dashboard/mangers/:id",
        element: <AdminWaiter />,
      },
      {
        path: "/admin-dashboard/users",
        element: <Users />,
      },
      {
        path: "/admin-dashboard/menus",
        element: <AdminMenus />,
      },
    ],
    errorElement: <NotFound />,
  },

  // Dj Admin
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
