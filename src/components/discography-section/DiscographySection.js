import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import FadeUpAndInAnimation from '../animations/FadeUpAndInAnimation';
import { Parallax as ReactParallax } from 'react-parallax';


const DiscographySection = props => {

    const albums = props.data.map( (albumInfo, key) => {
        return(
            <div key={key+10}>
                <FadeUpAndInAnimation
                        animationClass="Album-animation"
                        animationSubClass={""}
                        bO="15%" 
                    >
                <div className="Album" key={key+9}>
                    <div className="Album-art" style={{
                                    background: `url('${albumInfo.albumArt}')`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    }} key={key+1}>
                    <div className="play-button" onClick={ () => props.openModal(albumInfo.id)} key={key+2}></div>  
                    </div>
                    <h3 key={key+3}>{albumInfo.artistName}</h3>
                    <h4 key={key+4}>{albumInfo.albumName}</h4>
                </div>
                </FadeUpAndInAnimation>
            </div>
        )
    });

    const modals = props.data.map( (albumInfo, key) => {
        return(
            <div className="Modal-parent" id={albumInfo.id} key={key+5}>
                <div className="Modal-player-container" key={key+6}>
                    <div className="Modal-close-button" onClick={ () => props.openModal(albumInfo.id)} key={key+7}></div>
                    <iframe title="1" src={`https://embed.spotify.com/?uri=${albumInfo.uri}`} width="100%" height="100" frameBorder="0" key={key+8}></iframe>
                </div>
            </div>
        )
    });

return(
    <ReactParallax
            bgImage={require('../../assets/images/gallery/FullSizeRender\ 2.jpg')}
            strength={1000}
        >
    <div id="Discography" className="Discography-section-container">
    
        <div className="Discography-section-parent">
            <Parallax
                className="Parallax-parent-header-lower"
                offsetYMax={200}
                offsetYMin={-300}
                slowerScrollRate
                tag="figure"
            >
            <h3 className="Discography-header-lower Section-Header"> discography </h3> 
        </Parallax>
        <div className="Spotify-widget-parent">
            {albums}
            {modals}
        </div>
        </div>
       
    </div>
    </ReactParallax>
)

}

export default DiscographySection;