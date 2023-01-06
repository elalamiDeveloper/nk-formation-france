import { useState } from 'react';

import './image-slider.css';

const ImageSlider = ({ urls }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? urls.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === urls.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="image-slider">
      <div className="container">
        <div>
          <div onClick={goToPrevious} className="left-arrow-styles">
            ❰
          </div>
          <div onClick={goToNext} className="right-arrow-styles">
            ❱
          </div>
        </div>

        <div className="image-slider">
          <img src={urls[currentIndex]} alt="" />
        </div>

        <div className="dots-container-styles">
          {urls.map((_, slideIndex) => {
            const st = {
              color: slideIndex === currentIndex ? '#cca65c' : '',
            };

            return (
              <div
                className="dot-style"
                style={st}
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
              >
                ●
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
