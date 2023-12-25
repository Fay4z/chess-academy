import IMAGES from "../images/Images";


function About() {
    return ( 
      <section className=" bg-foreign border -mx-10 bg-gradient-to-r from-violet-200 to-indigo-200">
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                <div className=" text-gray-700 sm:text-lg">
                    <h2 className="mb-4 text-3xl sm:text-4xl tracking-tight font-bold text-text">About :</h2>
                    <h3 className="text-2xl font-semibold pb-3">Coach Name: <span className=" font-medium text-accent">Abbas Ali J S</span></h3>
                    <p className="mb-4 text-lg">I am an experienced chess Coach and also psychologically motivate players, and so with great passion for chess. I put my experience together to teach high-quality lessons for all levels from beginner to International Rated Players. All these are available through my systematic professional Chess course. Having own idea to prepare the students in my 
                    style..</p>
                    <p className=" italic">"The greatest aspect about the Game of chess makes strategic thinking fun. The Game of chess is an intellectual and helps to presents of minds. Chess is universal; I can go anywhere in the world and play a game of chess."</p>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-8">
                    <img className="w-full rounded-lg border border-teal-500" src={IMAGES.coach} alt="office content 1" />
                    <img className="mt-4 w-full lg:mt-10 rounded-lg border border-teal-500" src={IMAGES.image2} alt="office content 2" />
                </div>
            </div>
        </section>
     );
}

export default About;