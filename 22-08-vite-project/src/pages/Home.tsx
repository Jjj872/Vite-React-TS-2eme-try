import HomeSection1 from '../components/HomeSection1';
import HomeSection2 from '../components/HomeSection2';
import HomeSection3 from '../components/HomeSection3';
import '../styles/home.scss'

const Home = () => {
  return (
    <main>
      <HomeSection1 />
      <HomeSection2 />
      <HomeSection3 />
    </main>
  );
};

export default Home;