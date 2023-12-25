import About from "../components/About";
import Benefits from "../components/Benefits";
import Contact from "../components/Contact";
import Features from "../components/Features";
import MainHero from "../components/Hero";

import { Element } from "react-scroll";

function Home() {
    return ( 
        <div className="mx-10">
            <MainHero />
            <Element name="featureSection" className="element">
                <Features />
            </Element>
            <Benefits />
            <About />
            <Element name="contactSection" className="element">
                <Contact />
            </Element>
        </div>
     );
}

export default Home;