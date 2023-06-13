import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Section = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with desired options
  }, []);

  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div
          data-aos="fade-right"
          className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0"
        >
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://img.freepik.com/premium-vector/rainbow-colored-silhouette-people-with-different-sports-related-colors_635979-992.jpg?w=2000"
          />
        </div>
        <div
          data-aos="flip-down"
          className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center"
        >
          <h1 className="title-font sm:text-4xl font-bold text-xl mb-4  text-gray-900">
            Sports are specific <br />
            physical activities
            <br className="hidden lg:inline-block" /> one can compete Game
          </h1>
          <p className="mb-8 leading-relaxed">
            famous sports Super Bowl, FIFA World Cup, Olympic Games, UEFA
            Champions League, Wimbledon, Tour de France, The Masters, NBA
            Finals, Ashes etc Series ote bag selvage hot chicken authentic
            turmeric truffaut hexagon try-hard chambray.
          </p>
          <div className="flex justify-center" data-aos="zoom-down">
            <button className="inline-flex text-white border-0 py-2 px-6 focus:outline-none rounded bg-yellow-500 hover:bg-stone-900 text-lg">
              Enroll now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
