import React from 'react';




const ClientSection = props => {

    const artist = props.data.map( (artistInfo, key) => {
        return(
            <div className="Artist" style={{
                        background: `url('${artistInfo.clientImage}')`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        }} key={key+1}>
            <h4>{artistInfo.artistName}</h4>  
            </div> 
        )
    });

    const label = props.clientData.map( (labelInfo, key) => {
        return(
            <div className="Artist" style={{
                        background: `url('${labelInfo.clientLogo}')`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        }} key={key+1}>
            <h4>{labelInfo.clientName}</h4>  
            </div> 
        )
    });

    return (
        <div className="Client-section-container">
            <div className="Artist-parent-div"> {artist} </div>
            <div className="Artist-parent-div"> {label} </div>
        </div>
    )
}

export default ClientSection;