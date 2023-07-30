import React from 'react';
import {ReactNavbar} from "overlay-navbar";
import logo from "../../../images/Asset 3@3x.png";

const Header = () => {
  return (
  <ReactNavbar 
  burgerColor="#050000"
  burgerColorHover="darkgrey"
  logo={logo} 
  logowidth="20vmax" 
  navColor1="white"
  logoHoverSize="10px"
  logoHoverColor="lightgrey"
  link1Family="poppins"
  link1Text="Search"
  link2Text="Cart"
  link3Text="Menu"
  link4Text="About"
  link1Url="/"
  link2Url="/search"
  link3Url="/cart"
  link4Url="/about"
  link1Size="1.5vmax"
  link1Color=	"rgb(35, 35, 35)"
  nav1justifyContent="flex-end"
  nav2justifyContent="flex-end"
  nav3justifyContent="flex-start"
  nav4justifyContent="flex-start"
  link1ColorHover="grey"
  link1Margin="1vmax"
  profileIconElement="rgba(35, 35, 35,0.8)"
 searchIconElement="rgba(35, 35, 35,0.8)"
 cartIconElement="rgba(35, 35, 35,0.8)"
 searchIconHover="grey"
cartIconHover="grey"
profileIconHover="grey"
cartIconMargin="1vmax"
  />);
}

export default Header; 
