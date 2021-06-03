import React from "react";
import "./Header.css";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

function Header() {
  return (
    <div className="header_container">
      <img className="header_logo" src="./amazon_PNG11.png" alt="Amazon_Logo" />
      <div className="header_nav">
        <LocationOnIcon className="header_locationIcon" />
        <div className="header_option">
          <span className="header_option_lineone">Hello</span>
          <span className="header_option_linetwo">Select your address</span>
        </div>
      </div>

      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_nav">
        <div className="header_option">
          <span className="header_option_lineone">Hello User</span>
          <span className="header_option_linetwo">Sign In</span>
        </div>
        <div className="header_option">
          <span className="header_option_lineone">Returns</span>
          <span className="header_option_linetwo">& Orders</span>
        </div>
        <div className="header_option">
          <span className="header_option_lineone">Your</span>
          <span className="header_option_linetwo">Prime</span>
        </div>
        <div className="header_optionCart">
          <ShoppingCartIcon />
          <span className="header_option_linetwo header_cartCount">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
