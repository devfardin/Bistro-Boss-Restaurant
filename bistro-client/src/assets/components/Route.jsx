import {
    createBrowserRouter
  } from "react-router-dom";
import Root from "./Root";
import Home from "../pages/Home";
import OurMenu from "../pages/OurMenu";
import OurShop from "../pages/OurShop";
import Login from "../pages/Login";
import Registation from "../pages/Registation";
import PrivateRoute from "./PrivateRoute";
 import DashBoard from '../userDashBoard/DashBoard'

import UserHome from "../userDashBoard/page/UserHome";
import Reservation from "../userDashBoard/page/Reservation";
import PaymentHistory from "../userDashBoard/page/PaymentHistory";
import MyCart from "../userDashBoard/page/MyCart";
import AddReview from "../userDashBoard/page/AddReview";
import AllUser from "../userDashBoard/page/AllUser";
import AdminPrivateRoute from "../userDashBoard/components/AdminPrivateRoute";
import AddItems from "../userDashBoard/page/AddItems";
import ContactUs from "./Home/ContactUs";
 export const Routes = createBrowserRouter([
    {
      path: "/",
      element: <Root> </Root>,
      children: [
        {
          path:'/', 
          element: <Home> </Home>
        },
        {
          path:'/out-menu', 
          element: <PrivateRoute> <OurMenu> </OurMenu> </PrivateRoute>
        },
        {
          path:'/out-shop/:category', 
          element: <OurShop> </OurShop>
        },
        {
          path:'/Login', 
          element: <Login> </Login>
        },
        {
          path:'/Registration', 
          element: <Registation> </Registation>
        },
        {
          path:'/Contact-us', 
          element: <ContactUs></ContactUs>
        },
      ]
    },
    {
      path: 'Dashboard',
      element: <DashBoard> </DashBoard>,
      children:[
        {
          path:'home',
          element: <UserHome> </UserHome>
        },
        {
          path:'reservation',
          element: <Reservation> </Reservation>
        },
        {
          path:'PaymentHistory',
          element: <PaymentHistory></PaymentHistory>
        },
        {
          path:'mycart',
          element: <MyCart></MyCart>
        },
        {
          path:'addreview',
          element: <AddReview> </AddReview>
        },
        {
          path:'mybooking',
          element: <AddReview> </AddReview>
        },
        {
          path:'allUser',
          element: <AdminPrivateRoute><AllUser></AllUser></AdminPrivateRoute>
        },
        {
          path:'add-your-item',
          element: <AdminPrivateRoute><AddItems></AddItems></AdminPrivateRoute>
        },
      ]
    }
  ]);