import Hero from '../components/Hero';
import InfoBar from '../components/InfoBar';
import Section from '../components/Section';
import IMG from '../assets/white_hoodie.png';
import IMG2 from '../assets/white_tshirt.png';
import IMG3 from '../assets/pink_hoodie.png';
import FAQ from '../components/FAQ';

const Home = () => {
  return (
    <div>
      <Hero />
      <Section position={`md:flex-row-reverse`} image={IMG} caption="HOODIE" />
      <InfoBar />
      <Section image={IMG} caption="HOODIE" />
      <Section position={`md:flex-row-reverse`} image={IMG3} caption="HOODIE" />
      <Section image={IMG2} caption="T-SHIRT" />
      <FAQ />
    </div>
  );
};

export default Home;
