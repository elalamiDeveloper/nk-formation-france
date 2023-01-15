import './carousel.css';
import img1 from '../../assets/1.png';
import img2 from '../../assets/2.png';
import img3 from '../../assets/3.png';
import img4 from '../../assets/4.png';
import { ImageSlider } from '../../utils/componentsLinks';

const Carousel = () => {
  const urls = [img1, img2, img3, img4];

  return (
    <div>
      <div className="carousel-section ">
        <ImageSlider urls={urls} />
      </div>
    </div>
  );
};

export default Carousel;
