import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TeamSection from "../components/TeamSection";

const Home = () => {
  return (
    <div className=" min-h-screen bg-black text-white font-[Rajdhani]" style={{backgroundColor: "rgb(97 0 97)"}}>
      <Navbar />
      <TeamSection />
      <Footer />
    </div>
  );
};

export default Home;
