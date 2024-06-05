// Hot Modules Replacement (HMR)
// File Watcher Algorithms --- in C++
// Bundling
// Minify
//Removing Console Log Cleaning our Code
//Super Fast Algorithm
//Dev and Production Reday Build
//Image Optimization
//Caching while Development
//Compression
//Compatble With older Version Of Browser
//Its Also allow to do HTTPs in LocalHost -- using -->  npx parcel index.html --https
//Port Numbers
//Consistent Hashing Algorithm
//Zero Configuration
//Create Server

//Transitive Dependencies

import React from "react";
import ReactDOM from "react-dom/client";

// const heading1 = React.createElement(
//   "h1",
//   {
//     id: "title",
//     key: "h2",
//   },
//   "Namste React 1"
// );
// console.log(heading1);
// const heading2 = React.createElement(
//   "h2",
//   {
//     id: "heading",
//     key: "h1",
//   },
//   "Namste React ok changed 2"
// );

//New Syntax of Creating elements using JSX(JavsScript With XML(Extensible Markeup Language))
const heading1 = (<h1>Namste JavaScript</h1>);

const container = React.createElement(
  "h1",
  {
    id: "container",
  },
  [heading1]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
