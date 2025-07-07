import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./routes/Homepage.jsx";
import PostListPage from "./routes/PostListPage.jsx";
import LoginPage from "./routes/LoginPage.jsx";
import RegisterPage from "./routes/RegisterPage.jsx";
import Write from "./routes/Write.jsx";
import SinglPostPage from "./routes/SinglPostPage.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import { ClerkProvider } from "@clerk/clerk-react";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

let router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/posts",
        element: <PostListPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/:slug",
        element: <SinglPostPage />,
      },
      {
        path: "/write",
        element: <Write />,
      },
      {
        path: "/about",
        element: (
          <div>
            <h1>About Page</h1>
          </div>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <RouterProvider router={router} />
    </ClerkProvider>
    {/* <App /> */}
    {/* Uncomment the line below to use the App component directly */}
    {/* <App /> */}
  </StrictMode>
);
