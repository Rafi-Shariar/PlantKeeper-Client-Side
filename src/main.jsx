import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./Layouts/MainLayout.jsx";
import HomePage from "./Pages/HomePage.jsx";
import AuthProvider from "./Context/AuthProvider.jsx";
import AddNewPlant from "./Components/AddNewPlant.jsx";
import DetailsPage from "./Pages/DetailsPage.jsx";
import AllPlantsPage from "./Pages/AllPlantsPage.jsx";
import Login from "./Components/SinginOut/Login.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      { index: true, element: <HomePage></HomePage> },
      { path: "/addplant", element: <AddNewPlant></AddNewPlant> },
      {
        path: "/details/:id",
        element: <DetailsPage></DetailsPage>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/plants/${params.id}`),
      },
      { path: "/allplants", element: <AllPlantsPage></AllPlantsPage> },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
  
  {
    path: "/*",
    errorElement: <h1>Page Not Found Error !!</h1>,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
