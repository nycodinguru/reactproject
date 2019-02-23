import React, { Component } from 'react';
import Landing from "./Landing";
import { discographyInfo } from '../data/data';
import { artistHeadshots } from '../data/data';
import { clientLogos } from '../data/data';
import { bioInfo } from '../data/data';


class LandingContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modalState: ""
          };
    
        this.openModal = this.openModal.bind(this);
      }

    componentDidMount(){
        const artists = document.querySelectorAll('.Artist');
        artists.forEach( i =>  i.addEventListener("touchstart", this.toggleHoverClass));
    }
    
    componentWillUnmount(){
        const artists = document.querySelectorAll('.Artist');
        artists.forEach( i => i.removeEventListener("touchstart", this.toggleHoverClass));
    }

    openModal = modalId => {
        const modal = document.querySelector(`#${modalId}`);
        if (this.state.modalState === "open"){
            modal.style = "display: none;"
            this.state.modalState = "closed";
        } else { modal.style = "display: block; height: 100vh; width: 100vw; opactiy: 1; z-index: 10000; position: fixed; top: 0; background-color: rgba(0, 0, 0, .6);"
        this.state.modalState = "open" }
    };

    toggleHoverClass = (i) => {
            if (i.target.classList.contains(':hover') === true){
                i.classList.remove(":hover");
            } else {  i.classList.add(":hover");}
            
    };
   

    render() {
        return (
            <Landing 
            albumInfo={discographyInfo}
            openModal={this.openModal}
            artistHeadshots={artistHeadshots}
            clientLogos={clientLogos}
            bioInfo={bioInfo}
            />
        )
    }


};

export default LandingContainer;