import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import FadeUpAndInAnimation from '../animations/FadeUpAndInAnimation';
import { Parallax as ReactParallax } from 'react-parallax';


const BioSection = props => {

    const bioText = props.data.text.map( (bioText, key) => {
        return (
             <FadeUpAndInAnimation
                        animationClass="Text-animation"
                        animationSubClass={""}
                        bO="15%" 
                        key={key}
                    >
                <p key={key+1}>{bioText}</p>
            </FadeUpAndInAnimation>
        )
    })
    return(
        <ReactParallax
            bgImage={require('../../assets/images/gallery/IMG_9464.JPG')}
            strength={900}
        >
            <div className="Bio-section-container">
                <div className="Bio-parent">
                    <Parallax
                    className="Parallax-parent-lower"
                    offsetYMax={150}
                    offsetYMin={-100}
                    slowerScrollRate
                    tag="figure"
                    >
                    <h3 className="Typed-bio-header Lower Section-Header Section-Header"> Bio </h3>
                </Parallax>
                    <div className="Bio-sub-parent collapse-row-column">
                        <div className="Bio-blurb">
                          {bioText}
                        </div>
                    </div>
                </div>
            </div>
        </ReactParallax>
    );
};

export default BioSection;









