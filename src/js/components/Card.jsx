import React from "react";

function Card(props){
    return (
        <div className="card" style={{width: "10rem"}}>
            <img src={props.img || thunder} className="card-img-top" style={{width}}/>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.comentario}</p>
                <a href="#" className="btn btn-success">{props.button}</a>
            </div>
        </div>
    );
}

export default Card;
