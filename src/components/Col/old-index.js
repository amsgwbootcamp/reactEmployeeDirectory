import React from "react";
import "./style.css";

function Col(props) {
    return (<div>
        <div className="col"><img alt={props.name} src={props.image} /></div>
        <div className="col">{props.id}</div>
        <div className="col">{props.name}</div>
        <div className="col">{props.phone} </div>
        <div className="col">{props.email} </div>
        <div className="col">{props.dob} </div>
    </div>
    )
};

export default Col; 