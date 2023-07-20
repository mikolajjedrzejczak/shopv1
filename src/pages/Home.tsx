import Hero from '../components/Hero';
import InfoBar from '../components/InfoBar';
import Section from '../components/Section';

const Home = () => {
  return (
    <div>
      <Hero />
      <Section styles={`md:flex-row-reverse`} />
      <InfoBar />
      <Section />
      <Section styles={`md:flex-row-reverse`} />
      <Section />
    </div>
  );
};

export default Home;
