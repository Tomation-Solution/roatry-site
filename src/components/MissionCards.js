import React from "react";

const MissionCard = (props) => {
    return (
        <div className="mission-cards font-regular">
            <div>
            <img height="50px" src={props.src} /></div>
            <p className="regular-font" style={props.style}>
                {props.text}
            </p>
        </div>
    )
}

export default MissionCard