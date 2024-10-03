import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AdDetail from "./pages/AdDetail.tsx";
import RecentAds from "./pages/RecentAds.tsx";
import AdCreaForm from "./pages/AdCreaForm.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <RecentAds />,
      },
      {
        path: "/about",
        element: <p>About</p>,
      },
      {
        path: "/ads/:adId",
        element: <AdDetail />,
      },
      {
        path: "/ads/new",
        element: <AdCreaForm />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
