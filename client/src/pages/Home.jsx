import About from "../components/About";
import Benefits from "../components/Benefits";
import Contact from "../components/Contact";
import Features from "../components/Features";
import MainHero from "../components/Hero";

import { Element } from "react-scroll";
import Carousel from "../components/Carousel";
import Testimonals from "../components/Testimonial";
import { Seo } from "./Seo";
function Home() {
  return (
    <div className="mx-10">
      <Seo
        title="Abbas Chess Academy | Home"
        description="Abbas Chess Academy the best chess academy in Tamil Nadu,our academy created many International FIDE Rated players and WORLD Youth participant around the world and check out our flexible Chess courses on both online or offline"
        type="Chess Academy"
        name="Abbas Chess Academy"
      />
      <MainHero />
      <Element name="featureSection" className="element">
        <Features />
      </Element>
      <Benefits />
      <Carousel />
      <About />
      <Testimonals />
      <Element name="contactSection" className="element">
        <Contact />
      </Element>
    </div>
  );
}

export default Home;
