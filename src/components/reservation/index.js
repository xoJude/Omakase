import "./index.css";
import React from "react";

export const Reservation = ({logo, titre, button_text, texte1, texte2})  => {
    return ( 
        <div className="reservation">
        <p className="text-reservation">{titre}</p>
        <a href="https://www.goma-restaurant.com/omakase-contact" className="button">
          <button className="button-reserve">{button_text}</button>
        </a>
        <div className="certif-tripo">
            <a href="https://www.tripadvisor.fr/Restaurant_Review-g1182377-d19335130-Reviews-Goma_Omakase-Chessy_Marne_la_Vallee_Seine_et_Marne_Ile_de_France.html"><img src={logo}></img></a>
            <p className="text-tripo">{texte1}</p>
            <p className="text-tripo">{texte2}</p>
          </div>
      </div>
    );
};


