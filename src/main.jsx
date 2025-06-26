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
import ContactPage from "./Pages/ContactaPage.jsx";
import BlogsPage from "./Pages/BlogsPage.jsx";
import BlogDetails from "./Components/Blogs/BlogDetails.jsx";
import AboutUsPage from "./Pages/AboutUsPage.jsx";
import Dashboard from "./Dashboard/Dashboard.jsx";
import DashboardHomePage from "./Pages/DashboardPages/DashboardHomePage.jsx";
import AllPlantsDashboard from "./Dashboard/AllPlantsDashboard.jsx";
import NewBlog from "./Dashboard/NewBlog.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      { index: true, element: <HomePage></HomePage> },
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
        path:'/contact',
        element:<ContactPage></ContactPage>
      },
      {
        path:'/blogs',
        element:<BlogsPage></BlogsPage>,

      },
      {
         path: "/blogs/:id",
        element: <PrivateRoute><BlogDetails></BlogDetails></PrivateRoute>,
        loader: ({ params }) =>
          fetch(`https://a10-server-beryl.vercel.app/blogs/${params.id}`),
      
      },
      {
        path:'/aboutus',
        element:<AboutUsPage></AboutUsPage>
      }
    ],
  },
  {
    path:'/dashboard/:email',
    element:<Dashboard></Dashboard>,
    children:[
      {index:true, element:<DashboardHomePage></DashboardHomePage>},
      {path:'myplants', element:<PrivateRoute><MyPlantsPage></MyPlantsPage></PrivateRoute>},
      {path:'addplant', element:<PrivateRoute><AddNewPlant></AddNewPlant></PrivateRoute>},
      {
        path:'update/:id',
        element:<UpdatePage></UpdatePage>,
        loader: ({params})=>fetch(`https://a10-server-beryl.vercel.app/plants/${params.id}`)
      },
      {
        path:'Allplants',
        element:<AllPlantsDashboard></AllPlantsDashboard>
      },
      {
        path:'contact',
        element:<ContactPage></ContactPage>
      },
      {
        path:'submitBlog',
        element:<NewBlog></NewBlog>
      }
      
      

    ]

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
