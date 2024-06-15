//React Component ->
// Two Types -> Class Base  == Old
// --> Functional == New

import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
//Default Import Method
// import Title from "./componenets/Title";
import Body from "./componenets/Body";
import Footer from "./componenets/Footer";
//Name Import Method
import Header from "./componenets/Title";
//For Importing Multiple Methods
// import * as obj from "./componenets/Title" ;
//Way to USe
// console.log(obj.Header);
import { IMG_CDN } from "./componenets/config";
import Error from "./componenets/Error";
import About from "./componenets/About";
import Contact from "./componenets/ContactUs";
import {
  Router,
  RouterProvider,
  createBrowserRouter,
  Outlet,
} from "react-router-dom";
import RestaurentMenu from "./componenets/RestaurentMenu";
import Profile from "./componenets/Profile";
import Shimmer from "./componenets/Shimmer";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./componenets/Cart";
// import Instamart from "./componenets/Instamart";

//LAzzy Loading

const Instamart = lazy(() => {
  return import("./componenets/Instamart");
});

//React Creat Element

//Dynamic Data
//Config Driven UI

/***
 * <React.Fragment>
 * this tag is used to avoid use of another wraping div
 * it is also Written as
 * <></>
 * </React.Fragment>
 */
const AppLayout = () => {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Outlet />
        <Footer />
      </Provider>
    </>
  );
};

//creating Router manger
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/about",
        element: <About />,
        children: [{ path: "profile", element: <Profile /> }],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/restaurent/:id",
        element: <RestaurentMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element:<Cart/>
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(container);
// Way to Render React.createElement

root.render(<RouterProvider router={appRouter} />);
//Way to Render React Functional Component
