import React, { Component } from "react";
import Navbar from "./Navbar";

export default class NavbarContainer extends Component {
  
componentDidMount(){
  window.addEventListener("scroll", this.revealNavbar, {passive: true});
}

componentWillUnmount(){
  window.removeEventListener("scroll", this.revealNavbar, {passive: true})
}

revealNavbar = () => {

  const navbarContainerParent = document.querySelector('.Navbar-container-parent');
  const navbarContainer = document.querySelector('.Navbar-container');
  const portfolioUpperHeader = document.querySelector('.Header-header-upper');

  if (window.scrollY >= 50) {
    this.setState({ className: "scrolled" });
    navbarContainerParent.classList.add(this.state.className);
    navbarContainer.classList.add(this.state.className);
  }
  if (window.scrollY >= 130) {
    portfolioUpperHeader.classList.add(this.state.className);
  }
  if (window.scrollY < 50) {
    navbarContainerParent.classList.remove("scrolled");
    navbarContainer.classList.remove("scrolled");
    portfolioUpperHeader.classList.remove("scrolled");
  } 
}

  render() {
    return (
      <Navbar />
    );
  }
}
