import React from "react";
import "./Index.css";

const Header = () => {

const myNav={
    padding:"20px"

}
  return (
    <div>
      <nav style={myNav}>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Blog</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
