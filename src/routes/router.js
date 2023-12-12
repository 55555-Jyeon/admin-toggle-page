import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/layout";
import HomePage from "../pages/homepage/homepage";
import ManageMembers from "../pages/member";
import MemberList from "../pages/member/member_list";
import RegisterMember from "../pages/member/register_member";
import ManageProducts from "../pages/product";
import ProductList from "../pages/product/product_list";
import RegisterProduct from "../pages/product/register_product";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  {
    path: "/manage",
    element: <Layout />,
    children: [
      {
        path: "/manage/member/",
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
