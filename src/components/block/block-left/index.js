import "../index.css";
import React from "react";

export const Left = ({background, texte})  => {
    return ( 
        <div className="block opacity">
            <div className="block-texte">
                <p>{texte}</p>  
            </div>
            <div className="block-image">
                <img className="img img-left" src={background} alt="Description de l'image" />
            </div>
        </div>
    );
};