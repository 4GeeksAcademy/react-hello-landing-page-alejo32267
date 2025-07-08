import React from "react";

function Card(props){
    return (
        <div className="card" style={{width: "15rem", height:"35rem"}}>
            <img src={props.img || thunder} style={{width:"20 rem", height:"25%"}}/>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.comentario}</p>
                <a href="#" className="btn btn-primary">{props.button}</a>
            </div>
        </div>
    );
}

export default Card;
