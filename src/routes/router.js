import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/layout";
import ManageMembers from "../pages/member";
import ManageProducts from "../pages/product";
import HomePage from "../pages/homepage/homepage";
import RegisterMember from "../pages/member/register_member";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  {
    path: "/manage",
    element: <Layout />,
    children: [
      {
        path: "/manage/member",
        element: <ManageMembers />,
      },
      {
        path: "/manage/register-member",
        element: <RegisterMember />,
      },
      {
        path: "/manage/product",
        element: <ManageProducts />,
      },
    ],
  },
]);

export default router;
