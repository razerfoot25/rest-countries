import React from "react";
import { HiOutlineMoon } from "react-icons/hi";
const Header = ({ onChange }) => {
  return (
    <header className="main__header grid-container">
      <div className="main__header--div p-block-200 p-block-100-md">
        <p>Where in the world?</p>
        <button onClick={onChange}>
          <HiOutlineMoon />
          <div>Dark Mode</div>
        </button>
      </div>
    </header>
  );
};

export default Header;
