import "../index.css";
import React from "react";

export const Right = ({background, texte})  => {
    return ( 
        <div className="block opacity">
            <div className="block-image">
                <img className="img img-right" src={background} alt="Description de l'image" />
            </div>
            <div className="block-texte">
                <p>{texte}</p>  
            </div>
        </div>
    );
};


