import "./index.css";
import React from "react";

export const Part_Un = ({titre, num, texte1, texte2, texte3})  => {
    if(num === "text1"){
        return ( 
            <div className="texte1 opacity">
              <h1>{titre}</h1>
              <p>{texte1}</p>
              <p>{texte2}</p>
              <p>{texte3}</p>
            </div>
        );
    } else {
        return ( 
            <div className="texte2 opacity">
              <h1>{titre}</h1>
              <p>{texte1}</p>
              <p>{texte2}</p>
            </div>
        );
    }
};


