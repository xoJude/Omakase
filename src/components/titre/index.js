import "./index.css";
import React from "react";

export const Titre = ({texte})  => {
    return ( 
        <div className="block-titre opacity">
            <h1>{texte}</h1>
        </div>

    );
};