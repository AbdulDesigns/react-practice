import React from "react";
import "./style.css";

const Navbar = ({ filterItem, menuList }) => {
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {menuList.map((curEl) => {
            return (
              <>
                <button
                  className="btn-group__item"
                  onClick={() => filterItem(curEl)}
                >
                  {curEl}
                </button>
              </>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
