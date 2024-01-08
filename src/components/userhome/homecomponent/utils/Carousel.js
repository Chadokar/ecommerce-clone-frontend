import React, { useState, useEffect } from "react";
import { Button, Card, CardMedia } from "@mui/material";
import "./Carousel.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const images = [
  "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/4f9ffd5f11a2a4b9.jpg?q=20",
  "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/5fe2c1cd410c0e18.jpg?q=20",
  "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/830b0b3bff28e292.jpg?q=20",
];

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [activeIndex]);

  return (
    <div>
      <Card className="carousel-card">
        <div
          className="carousel-images"
          style={{
            transform: `translateX(${-activeIndex * 100}%)`,
            transition: "transform 0.5s ease", // Adjust the transition duration and easing
          }}
        >
          {images.map((image, index) => (
            <CardMedia
              key={index}
              component="img"
              alt={`Image ${index + 1}`}
              className="carousel-image"
              height="300"
              width="100%"
              image={image}
            />
          ))}
        </div>
        <Button
          className="carousel-button carousel-button-prev"
          sx={{
            position: "absolute",
            background: "rgba(255, 255, 255, 0.5)",
            "&:hover": {
              background: "rgba(255, 255, 255, 0.8)",
            },
          }}
          onClick={handlePrev}
          disabled={activeIndex === 0}
        >
          <ArrowBackIcon />
        </Button>
        <Button
          className="carousel-button carousel-button-next"
          sx={{
            position: "absolute",
            background: "rgba(255, 255, 255, 0.5)",
            "&:hover": {
              background: "rgba(255, 255, 255, 0.8)",
            },
          }}
          onClick={handleNext}
          disabled={activeIndex === images.length - 1}
        >
          <ArrowForwardIcon />
        </Button>
      </Card>
    </div>
  );
};

export default Carousel;
