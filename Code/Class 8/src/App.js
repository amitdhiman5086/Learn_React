//React Component ->
// Two Types -> Class Base  == Old
// --> Functional == New

import React from "react";
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
import {IMG_CDN} from "./componenets/config"

//React Creat Element



//Dynamic Data
const burgerKing = {
  name: "Chinese Wok",
  image:
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f996b31033fd07603bfb28cb4e526683",
  cusines: ["Chinese", "Italiyan"],
  rating: "4.5",
};



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
      <>
        <Header />
        <Body />
        <Footer />
      </>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(container);
// Way to Render React.createElement

root.render(<AppLayout />);
//Way to Render React Functional Component
