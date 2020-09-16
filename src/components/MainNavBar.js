import React, { useEffect } from "react";
import "./MainNavBar.css";
import Logo from "../images/ATG Icon.png";
import { Link } from "react-router-dom";

const MainNavBar = (props) => {
  useEffect(() => {
    let toggleLinks = document.querySelector(".toggle-links");
    let navLinks = document.querySelector(".nav-disktop");
    let mainHeading = document.querySelector(`.${props.styles.headerContent}`);

    let navOpen = false;

    // toggleLinks Click EventListener

    toggleLinks.addEventListener("click", (e) => {
      if (!navOpen) {
        toggleLinks.classList.add("animate-toggle");
        navLinks.style.display = "flex";
        mainHeading.style.display = "none";
        props.handleNavOpen();

        navOpen = true;
      } else {
        toggleLinks.classList.remove("animate-toggle");
        navLinks.style.display = "none";
        mainHeading.style.display = "block";
        props.handleNavClose();

        navOpen = false;
      }
    });
  }, [props]);
  return (
    <div>
      <nav class="main-navbar">
        <div class="container">
          <div class="toggle-links">
            <span class="toggle half start"></span>
            <span class="toggle "></span>
            <span class="toggle half end"></span>
          </div>
          <div class="logo">
            <img src={Logo} alt="logo" />
            <h1 style={props.color ? { color: props.color } : {}}>Alts</h1>
            <span style={props.color ? { color: props.color } : {}}>
              Together
            </span>
          </div>
          <ul class="list-unstyled  nav-disktop">
            <li>
              <Link to="/" style={props.color ? { color: props.color } : {}}>
                about
              </Link>
            </li>
            <li>
              <Link to="/" style={props.color ? { color: props.color } : {}}>
                videos
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                style={props.color ? { color: props.color } : {}}
              >
                blog
              </Link>
            </li>
            <li>
              <Link to="/" style={props.color ? { color: props.color } : {}}>
                contact
              </Link>
            </li>
          </ul>
          <div class="nav-end">
            <i class="fa fa-search fa-xl"></i>
            <button>join us</button>
            <span></span>
            <Link to="/login">login</Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MainNavBar;
