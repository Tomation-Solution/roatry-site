import React from "react"

const ContainerButton = (props) => {
    return (
    <div className={props.class}>
        {props.children}
    </div>
    )
}

export default ContainerButton