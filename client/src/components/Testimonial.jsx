import IMAGES from "../images/Images";

function Testimonals() {
  return (
    <div className=" py-20 ">
      <h1 className=" text-center mb-10 text-3xl sm:text-4xl tracking-tight font-bold text-text ">
        Testimonials
      </h1>

      <div className="grid grid-row gap-10 lg:grid-cols-1">
        <div className="rounded-md text-center p-7 mx-auto max-w-xl bg-gradient-to-r from-violet-200 to-indigo-200">
          <div className="grid justify-center space-y-6 py-5">
            <img
              src={IMAGES.ajayIM}
              alt="ajaikrishna"
              className="rounded-full h-28 w-28 mx-auto"
            />
            <h2 className="text-2xl text-center font-semibold">
              S. Ajai Krishna <span className="font-bold">IM</span>
            </h2>
            <div className=" flex space-x-4 justify-center text-2xl">
              <p className=" font-bold">Rating: </p>
              <p>2359</p>
            </div>
          </div>
          <div>
            <p className=" italic leading-8 text-justify max-w-lg mx-auto px-8">
              I have learnt a lot from Abbas sir. The learning experience has
              always been great. He is a very dedicated coach who always gives
              his best for his students.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonals;
