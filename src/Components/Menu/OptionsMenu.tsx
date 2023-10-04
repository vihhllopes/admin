import { Options } from "./Menu";
import React, { useState } from "react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { CiDeliveryTruck } from "react-icons/ci";
import { PiHouseSimpleLight } from "react-icons/pi";
import { SiDatabricks } from "react-icons/si";
import { Link, useLocation } from "react-router-dom";
const OptionsMenu: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <Options>
      <div>
        <div className="menu-button" onClick={toggleMenu}>
          <HiOutlineMenuAlt2 />
        </div>
        {isMenuOpen && (
          <ul className="menu-options">
            <li
              className={`menu-option-item ${
                location.pathname === "/" ? "active" : ""
              }`}
            >
              <Link to="/">
                <PiHouseSimpleLight
                  className={location.pathname === "/" ? "active-icon" : ""}
                />
              </Link>
            </li>
            <li
              className={`menu-option-item ${
                location.pathname === "/add-products" ? "active" : ""
              }`}
            >
              <Link to="/add-products">
                <SiDatabricks
                  className={
                    location.pathname === "/add-products" ? "active-icon" : ""
                  }
                />
              </Link>
            </li>
            <li
              className={`menu-option-item ${
                location.pathname === "/maps" ? "active" : ""
              }`}
            >
              <Link to="/maps">
                <CiDeliveryTruck
                  className={location.pathname === "/maps" ? "active-icon" : ""}
                />
              </Link>
            </li>
          </ul>
        )}
      </div>
    </Options>
  );
};

export default OptionsMenu;
