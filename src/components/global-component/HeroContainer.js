import React from "react";

const HeroContainer = (props) => {
    return(
        <div className={`hero-container ${props.classes ? props.classes : ''}`}>
            {props.children}
        </div>
    )
}

export default HeroContainer;