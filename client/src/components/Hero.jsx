import IMAGES from "../images/Images";
import { scroller } from "react-scroll";

export function Hero() {
  const handleContactSection = () => {
    scroller.scrollTo("contactSection", {
      duration: 1500,
      delay: 100,
      smooth: "easeInOutQuint",
      // ... other options
    });
  };

  const handleFeatureSection = () => {
    scroller.scrollTo("featureSection", {
      duration: 1500,
      delay: 100,
      smooth: "easeInOutQuint",
      // ... other options
    });
  };

  const handleSetActive = (to) => {
    console.log(to);
  };

  return (
    <section className="flex flex-col md:flex-row items-center justify-around py-12 md:py-24 lg:py-32 xl:py-38 md:px-10 -mx-10 bg-gradient-to-r from-violet-200 to-indigo-200 mb-10 px-5">
      <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
        <h1 className="text-4xl py-3 font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
          Abbas Chess Academy
        </h1>
        <p className="mx-auto md:mx-0 max-w-[700px] text-gray-500 md:text-xl">
          Unleash Your Chess Potential, Discover personalized learning and
          interactive training for beginners to chess master at{" "}
          <span className="font-semibold text-accent">
            Abbas Chess Academy today
          </span>
        </p>
        <div className="space-x-4">
          <button
            className="btn btn-sm sm:btn-sm md:btn-md lg:btn-lg bg-primary hover:bg-green-400 border border-none"
            onClick={handleFeatureSection}
          >
            Get Started
          </button>

          <button
            className="btn btn-sm sm:btn-sm md:btn-md lg:btn-lg bg-accent text-white hover:bg-purple-600 border border-none "
            onClick={handleContactSection}
          >
            Learn More
          </button>
        </div>
      </div>
      <div className="mt-4 md:mt-0">
        <img
          alt="Hero Section Image"
          className=" h-80 w-96 md:h-96 md:w-[600px] md:-py-10 xl:h-[420px] object-cover border-none rounded-md mix-blend-darken "
          height="400"
          src={IMAGES.heroImage}
          style={{
            aspectRatio: "400/400",
            objectFit: "cover",
          }}
          width="400"
        />
      </div>
    </section>
  );
}

function MainHero() {
  return (
    <div>
      <Hero />
    </div>
  );
}

export default MainHero;
