import React from "react";


function Card(props) {

    return (
        <div className="card">
        <div className="imgcon">
        <img src={props.img_src} alt="img" className="card_img" />
        </div>
            
            <div className="card_info">
                <span className="card_category"> {props.title} </span>
                <h3 className="card_title"> {props.sname} </h3>
                <a href={props.link} target="_blank">
                    <button>Watch Now</button>
                </a>
            </div>
        </div>
    )
}


export default Card;