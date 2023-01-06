import Hero from '../../components/hero/hero.component';
import CatalogueDeFormation from '../../components/catalogue-de-formation/catalogue-de-formation';
import Carousel from '../../components/carousel/Carousel';

const HomePage = () => {
  return (
    <div className="home-page">
      <Carousel />
      <Hero />
      <CatalogueDeFormation />
    </div>
  );
};

export default HomePage;
