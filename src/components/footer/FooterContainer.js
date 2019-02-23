import React,  { Component } from 'react';
import Footer from './Footer';


class FooterContainer extends Component {

    copyToClipboard = () => {
        const el = document.createElement('div');
        el.textContent = 'Copied!';
        el.setAttribute("id", "Copied-modal");
        document.body.appendChild(el);
        document.querySelector('.Email').select();
        document.execCommand('copy');
    }

    render(){
        return(
             <Footer 
             copyToClipboard={this.copyToClipboard}
             />
        )
    }
   
};

export default FooterContainer;