import "./index.css";
import React, { useRef } from "react";

export const Video = ({ url, image_video })  => {
    const videoRef = useRef(null);

    const handleVideoEnd = () => {
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play();
      }
    };
    return ( 
        <div className="container-video">
            <video autoPlay muted onEnded={handleVideoEnd} ref={videoRef}>
                <source src={url} type="video/mp4"/>
            </video>
            <div className="container-logo">
                <img className="logo" src={image_video}></img>
            </div>
      </div> 
    );
};