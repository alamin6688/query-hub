import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Blogs from "../Pages/Blogs/Blogs";
import MyProfile from "../Pages/MyProfile/MyProfile";
import Contact from "../Pages/Contact/Contact";
import MyQueries from "../Pages/MyQueries/MyQueries";
import AddQuery from "../Pages/AddQuery/AddQuery";
import Queries from "../Pages/Queries/Queries";
import QueryDetails from "../Pages/Queries/QueryDetails";
import MyRecommendations from "../Pages/MyRecommendations/MyRecommendations";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/queries",
        element: <Queries></Queries>
      },
      {
        path: "/queries/:id",
        element: <QueryDetails></QueryDetails>,
        loader: ({params}) => fetch(
          `${import.meta.env.VITE_API_URL}/myQueries/${params.id}`
        )
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/profile",
        element: <MyProfile></MyProfile>
      },
      {
        path: "/my-queries",
        element: <MyQueries></MyQueries>
      },
      {
        path: "/my-recommendations",
        element: <MyRecommendations></MyRecommendations>
      },
      {
        path: "/add-query",
        element: <AddQuery></AddQuery>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
    ],
  },
]);
