import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";





import HomePage from "./pages/home/home.page.jsx";
import CartPage from "./pages/cart/cart.page.jsx";
import RootLayout from "./layout/root.layout.jsx";
import CheckoutPage from "./pages/checkout/checkout.page.jsx";
import SignInPage from "./pages/auth/sign-in/sign-in.page.jsx";
import SignUpPage from "./pages/auth/sign-up/sign-up.page.jsx";
import PaymentPage from "./pages/payment/payment.page.jsx";
import ShopPage from "./pages/shop/shop.page.jsx";
import ProductPage from "./pages/product/product.page.jsx";
import OrderPage from "./pages/profile/orders.page.jsx";
import AdminHomePage from "./pages/admin/admin-home.page.jsx";
import AdminProductsPage from "./pages/admin/products.page.jsx";
import AdminCategoriesPage from "./pages/admin/categories.page.jsx";
import AdminOrdersPage from "./pages/admin/orders.page.jsx";
import FrequentlyAskQuestionsPage from "./pages/Frequentlr Ask Questions/FrequentlyAskQuestions.page.jsx";
import OnelinePaymentProcessPage from "./pages/Online Payment Process/OnlinePaymentProcess.page.jsx";
import HomeDeliveroptionsPage from "./pages/Home Deliver Options/HomeDeliveroptins.page.jsx";


import { Toaster } from 'sonner';

import { ClerkProvider } from "@clerk/clerk-react";
import AdminLayout from "./layout/admin.layout.jsx";
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/checkout",
        element: <CheckoutPage />,
      },
      {
        path: "/payment",
        element: <PaymentPage />,
      },
      {
        path: "/shop",
        element: <ShopPage />,
      },
      {
        path: "/product/:id",
        element: <ProductPage />,
      },
      {
        path: "/profile/orders",
        element: <OrderPage />,
      },
      {
        path:"/FAQ",
        element: <FrequentlyAskQuestionsPage />,
      },
      {
        path:"/OPP",
        element: <OnelinePaymentProcessPage />,
      },
      {
        path:"/Delivery",
        element: <HomeDeliveroptionsPage />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {path: "", element:<AdminHomePage />},
      {path: "products", element: <AdminProductsPage />},
      {path: "categories", element: <AdminCategoriesPage />},
      {path: "orders", element: <AdminOrdersPage />},
    ],
  },
  {
    path: "/sign-in",
    element: <SignInPage />,
  },
  {
    path: "/sign-up",
    element: <SignUpPage />,
  },
]);







ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <RouterProvider router={router} />
      <Toaster richColors/>
    </ClerkProvider>
  </React.StrictMode>
);