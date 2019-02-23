import React from 'react';


const Footer = props => {
    return (
        <div className="Footer-container">
            <div className="Footer-links-parent">
                <a href="https://soundcloud.com/zthepro" target="_blank" rel="noopener noreferrer"><div className="Footer-link" id="Sound-cloud"></div></a>
                <a href="https://www.instagram.com/zthepro_" target="_blank" rel="noopener noreferrer"><div className="Footer-link" id="Instragram"></div></a>
            </div>
            <p className="Footer-email" onClick={ () => props.copyToClipboard()}> prodbyz&#64;gmail.com </p>
            <p className="Footer-copyright"> &copy; 2019, ZTHEPRO. </p>
            <textarea className="Email" readOnly>prodbyz&#64;gmail.com</textarea>
        </div>
    )
};

export default Footer;