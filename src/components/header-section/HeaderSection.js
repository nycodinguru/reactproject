import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import Scrollchor from 'react-scrollchor';


const HeaderSection = props => {

    return (
        <div className="Header-section-container">
            <div className="Header-section-hero">
                <div className="Name-header-parent">
                    <div className="Name-header-left Name">ZTHEPRO </div>
                   
                </div>
                <div id="bars">
                    <div className="bars">
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        </div>
                    </div>
            </div>
            <div className="Piano-keys">
                <Scrollchor to="Discography" animate={{offset: 0, duration: 400}}>
                    <Parallax
                        className="Parallax-parent-header-upper"
                        offsetYMax={1000}
                        offsetYMin={0}
                        slowerScrollRate
                        tag="figure"
                    >
                        <h3 className="Header-header-upper Section-Header"> discography </h3> 
                    </Parallax>
                </Scrollchor>
            </div>
        </div>
    )
}

export default HeaderSection;