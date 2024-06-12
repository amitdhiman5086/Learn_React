import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOffline from "../utils/useOffline";
import UserData from "../utils/UserData";

const loggedInUser = () => {
  return true;
};
//Function Component

const Title = () => (
  <a href="/">
    <img
      className="h-28 p-2 rounded-full"
      alt="logo"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR86tYjrHWG7yuib2FlQU0llpvL1gMwcZibUQ&s"
    ></img>
  </a>
);

// --> Functional == New
//Functional Component is a normal Function
//Name of Component Start with capital letters
export const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { user } = useContext(UserData);

  const isOnline = useOffline();
  return (
    <div className="flex  justify-between px-10 bg-blue-500 rounded-2xl">
      {Title()}
      <div className="flex  justify-center items-center  space-x-5 ">
        <ul className="flex space-x-5">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Cntact Us</li>
          </Link>
          <Link to="/instamart">
            <li>Instamart</li>
          </Link>
        </ul>
        <h1>{isOnline ? "🔴" : "✅"}</h1>
        {isLoggedIn ? (
          <div className="flex ">

            <h1
            className="pt-6">{user.name}</h1>
            <button
              className="bg-blue-400 p-3 m-3 hover:bg-blue-800 rounded-md"
              onClick={() => {
                setIsLoggedIn(false);
              }}
            >
              Logout
            </button>
          </div>
        ) : (
          <button
            className="bg-blue-400 p-3 m-3 hover:bg-blue-800 rounded-md"
            onClick={() => {
              setIsLoggedIn(true);
            }}
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
  //way to insert Create Element  in Function Component
  //Way to inert Component in Component two ways
};

export default Header;
