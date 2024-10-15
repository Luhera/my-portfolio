import NavBar from "../../components/NavBar/NavBar";
import AboutMe from "./sections/About/About";
import Hero from "./sections/Hero/Hero";
import ProjectsSection from "./sections/Projects/Projetcts";

const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <AboutMe />
      <ProjectsSection />
    </>
  );
};

export default Home;
