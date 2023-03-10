import * as React from "react";
// import Cta from "./cta";
// import logo from "../../images/Prezzo_Logo_RGB_OffWhite.png";

type Link = {
  label: string;
  url: string;
};

const links: Link[] = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "Menu",
    url: "#",
  },
  {
    label: "Delivery & Collection",
    url: "#",
  },
  {
    label: "A Celebration of Flavour",
    url: "#",
  },
  {
    label: "E-gifts",
    url: "#",
  },
  {
    label: "Christmas",
    url: "#",
  },
  {
    label: "Working with us",
    url: "#",
  }
];

const Header = () => {
  const linkDoms = links.map((link) => (
      <a className="navbar-item" href={link.url} >
        <span>{link.label}</span>
      </a>
  ));

  return (
    <>
      <div id="header" className="header-nav" style={{color:"black",backgroundColor:"lightblue"}}>
        <div className="container header-content" >
          <div className="header-content-left">
            <a className="button" href="#">
              <span className="is-hidden-touch">Find my location</span></a>
            <a className="button" href="#" title="Book now">Book now</a>
          </div>
          <div className="header-content-middle">
            <a className="logo" href="/">
              <img className="" src="https://www.mapmyindia.com/blog/wp-content/uploads/2010/09/mapmyindia-logo.jpg" />
            </a>
          </div>
          <div className="header-content-right lg:hidden">
            <span className="navbar-burger burger" data-target="navbarMenu">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
        </div>
        <div className="container">
          <nav className="navbar">
            {linkDoms}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
