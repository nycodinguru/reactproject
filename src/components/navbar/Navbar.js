import React from "react";
import { withRouter } from "react-router-dom";
import Scrollchor from 'react-scrollchor';


const Navbar = props => {
    return (
    <header className="Navbar-container-parent">
      <div className="Navbar-container">
        <Scrollchor to="" animate={{offset: 0, duration: 400}}>
          <div id="zthepro">ZTHEPRO</div>
        </Scrollchor>
        <a href="mailto:prodbyz@gmail.com" target="_top"><div className="Button"></div></a>
      </div>
    </header>
  );
};

export default withRouter(Navbar);
