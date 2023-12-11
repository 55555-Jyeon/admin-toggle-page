import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/layout";
import ManageMembers from "../pages/member";
import ManageProducts from "../pages/product";
import HomePage from "../pages/homepage/homepage";
import RegisterMember from "../pages/member/register_member";
import RegisterProduct from "../pages/product/register_product";
import ProductList from "../pages/product/product_list";
import MemberList from "../pages/member/member_list";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  {
    path: "/manage",
    element: <Layout />,
    children: [
      {
        path: "/manage/member",
        element: <ManageMembers />,
        children: [
          {
            path: "/manage/member/list",
            element: <MemberList />,
          },
          {
            path: "/manage/member/register",
            element: <RegisterMember />,
          },
        ],
      },
      {
        path: "/manage/product",
        element: <ManageProducts />,
        children: [
          {
            path: "/manage/product/list",
            element: <ProductList />,
          },

          {
            path: "/manage/product/register",
            element: <RegisterProduct />,
          },
        ],
      },
    ],
  },
]);

export default router;
