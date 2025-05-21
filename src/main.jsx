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
import Register from "./Components/SinginOut/Register.jsx";
import MyPlantsPage from "./Pages/MyPlantsPage.jsx";
import PageNotFound from "./Components/PageNotFound.jsx";
import UpdatePage from "./Pages/UpdatePage.jsx";
import PrivateRoute from "./Provider/PrivateRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      { index: true, element: <HomePage></HomePage> },
      { path: "/addplant", element: <PrivateRoute><AddNewPlant></AddNewPlant></PrivateRoute> },
      {
        path: "/details/:id",
        element: <PrivateRoute><DetailsPage></DetailsPage></PrivateRoute>,
        loader: ({ params }) =>
          fetch(`https://a10-server-beryl.vercel.app/plants/${params.id}`),
      },
      { path: "/allplants", element: <AllPlantsPage></AllPlantsPage> },
      {
        path: "/login",
        element: <Login></Login>,
      },
       {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path:"/myplants",
        element:<PrivateRoute><MyPlantsPage></MyPlantsPage></PrivateRoute>
      },
      {
        path:'/update/:id',
        element:<UpdatePage></UpdatePage>,
        loader: ({params})=>fetch(`https://a10-server-beryl.vercel.app/plants/${params.id}`)
      }
    ],
  },
  
  {
    path: "/*",
    element:<PageNotFound></PageNotFound>
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
