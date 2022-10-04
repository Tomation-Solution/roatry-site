import React from "react";

const Card = (props) => {
    return (
        <div className="card">
            <div className="card-header">
                <img className="card-image container-radius" src={props.image} />
            </div>
            <div className="card-body">
                <div className="card-meta-cotainer display-flex content-between">
                    <div className="meta display-flex content-between">
                        <icon />
                        <p>{props.date}</p>
                    </div>
                    <div className="meta display-flex content-between">
                        <icon />
                        <p>{props.location}</p>
                    </div>
                </div>
                <div className="card-content">
                    <h5 className="content-title bold-font">{props.contentTitle}</h5>
                    <p className="content-text">{props.contentText}</p>
                    <a onClick={() => props.action()} className="card-action">Read more...</a>
                </div>
            </div>
        </div>
    )
}

export default Card