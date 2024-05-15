import "./index.css";
import img1 from "../../assets/slider-image/image1.png";
import img2 from "../../assets/slider-image/image2.png";
import img3 from "../../assets/slider-image/image3.png";
import img4 from "../../assets/slider-image/image4.png";
import img5 from "../../assets/slider-image/image5.png";
import img6 from "../../assets/slider-image/image6.png";
import img7 from "../../assets/slider-image/image7.png";
import img8 from "../../assets/slider-image/image8.png";
import img9 from "../../assets/slider-image/image9.png";
import img10 from "../../assets/slider-image/image10.png";
import img11 from "../../assets/slider-image/image11.png";
import img12 from "../../assets/slider-image/image12.png";
import img13 from "../../assets/slider-image/image13.png";

const Slider = () => {
  // Tableau d'objets avec les données des images
  const imagesData = [
    { id: 1, src: img1, alt: 'Image 1' },
    { id: 2, src: img2 , alt: 'Image 2' },
    { id: 3, src: img3 , alt: 'Image 3' },
    { id: 4, src: img4 , alt: 'Image 4' },
    { id: 5, src: img5 , alt: 'Image 5' },
    { id: 6, src: img6 , alt: 'Image 6' },
    { id: 7, src: img7 , alt: 'Image 7' },
    { id: 8, src: img8 , alt: 'Image 8' },
    { id: 9, src: img9 , alt: 'Image 9' },
    { id: 10, src: img10 , alt: 'Image 10' },
    { id: 11, src: img11 , alt: 'Image 11' },
    { id: 12, src: img12 , alt: 'Image 12' },
    { id: 13, src: img13 , alt: 'Image 13' },
  ];

  return (

    <div className="box opacity">
      <div className="slider-container">
        <div className="slider">
          {imagesData.map((image) => (
            <div key={image.id}>
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>

  );
};

export default Slider;


  
