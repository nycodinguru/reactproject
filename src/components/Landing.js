import React from 'react';
import HeaderSection from './header-section/HeaderSection';
import DiscographySection from './discography-section/DiscographySection';
import NavbarContainer from "./navbar/NavbarContainer";
import ClientSection from './client-section/ClientSection';
import BioSection from './bio-section/BioSection';
//


const Landing = props => {
    return(
        <div className="Landing-page-container">
            <NavbarContainer />
            <HeaderSection />
            <DiscographySection 
                data={props.albumInfo}
                openModal={props.openModal}
            />
            <ClientSection 
                data={props.artistHeadshots}
                clientData={props.clientLogos}
            />
            <BioSection 
                data={props.bioInfo}
            />
        </div>
    )
};


export default Landing;
