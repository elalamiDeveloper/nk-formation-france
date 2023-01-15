import {
  Carousel,
  Hero,
  CatalogueDeFormation,
} from '../../utils/componentsLinks';

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
