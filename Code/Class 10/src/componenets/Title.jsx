import { useState } from "react";
import { Link } from "react-router-dom";

const loggedInUser = () => {
  return true;
};
//Function Component

const Title = () => (
  <a href="/">
    <img
      className="logo"
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
  return (
    <div className="header">
      {Title()}
      <div className="nav-items">
        <ul>
          <Link to="/"><li>Home</li></Link>
          <Link to="/about"><li>About</li></Link>
          <Link to="/contact"><li>Cntact Us</li></Link>
          <li>Cart</li>
        </ul>
        <div>
          {isLoggedIn ? (
            <button
              onClick={() => {
                setIsLoggedIn(false);
              }}
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => {
                setIsLoggedIn(true);
              }}
            >
              Login
            </button>
          )}
        </div>
      </div>
    </div>
  );
  //way to insert Create Element  in Function Component
  //Way to inert Component in Component two ways
};

export default Header;
