import React, { useState, useEffect } from 'react';

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = ["./images/Group13.png", "./images/Group14.png", "./images/Group16.png"]; // Replace with your image file names
  const intervalDuration = 3000; // Adjust the interval duration in milliseconds (3 seconds in this example)

  // Function to handle the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to handle the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Use useEffect to set up the interval for auto-playing
  useEffect(() => {
    const intervalId = setInterval(nextSlide, intervalDuration);

    // Clear the interval when the component is unmounted or when the currentIndex changes
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  const imageStyle = {
    maxWidth: '100%', // Adjust this value as needed to control the maximum width of the image
    maxHeight: '1000px', // Adjust this value as needed to control the maximum height of the image
  };

  return (
    <div>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} style={imageStyle}  />
    </div>
  );
};

export default Slideshow;