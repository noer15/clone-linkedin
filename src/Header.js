import React from "react";
import "./Header.css";
import Logo from "./assets/logo.png";
import {
  Search,
  Home,
  SupervisorAccount,
  BusinessCenter,
  Chat,
  Notifications,
} from "@material-ui/icons";
import HeaderOption from "./HeaderOption";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img src={Logo} alt="linkedin" />
        <div className="header_search">
          <Search />
          <input type="text" name="" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={Home} title="Home" />
        <HeaderOption Icon={SupervisorAccount} title="My Network" />
        <HeaderOption Icon={BusinessCenter} title="Jobs" />
        <HeaderOption Icon={Chat} title="Messaging" />
        <HeaderOption Icon={Notifications} title="Nitification" />
        <HeaderOption
          avatar="https://lh3.googleusercontent.com/ogw/ADea4I4PYGTSOEvF-v6nA29154YayIf48jpEMboKUwgK=s32-c-mo"
          title="Me"
        />
      </div>
    </div>
  );
}

export default Header;
