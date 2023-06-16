

const Hero = () => {
  return (
    <section className="text-gray-600">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-5 py-24">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <img
            className="rounded max-w-full"
            alt="hero"
            src="https://img.freepik.com/premium-vector/rainbow-colored-silhouette-people-with-different-sports-related-colors_635979-992.jpg?w=2000"
          />
        </div>
        <div className="flex-grow md:w-1/2 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl font-bold text-xl mb-4 text-gray-900">
            Sports are specific <br />
            physical activities
            <br className="hidden lg:inline-block" /> one can compete in.
          </h1>
          <p className="mb-8 leading-relaxed">
            Some famous sports include the Super Bowl, FIFA World Cup, Olympic Games, UEFA Champions League, Wimbledon, Tour de France, <br /> The Masters, NBA Finals, Ashes, etc. Series ote bag selvage hot chicken <br /> authentic turmeric truffaut hexagon try-hard chambray.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white border-0 py-2 px-6 focus:outline-none rounded bg-yellow-500 hover:bg-stone-900 text-lg">
              Enroll now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
