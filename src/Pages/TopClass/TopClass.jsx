import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import useAuth from '../../hooks/useAuth';

const TopClass = () => {
  const [classes, setClasses] = useState([]);
const {theme} =useAuth();
  useEffect(() => {
    fetch('https://y-nine-murex.vercel.app/allData')
      .then(response => response.json())
      .then(data => setClasses(data))
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className={`text-gray-600 body-font ${theme}`}>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold py-10 mb-4 text-center" data-aos="fade-left">Top Enroll Class</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {classes.map(cls => (
            <div
              key={cls._id}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
              style={{ width: '100%' }}
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="500"
            >
              <img src={cls.classImage} alt="Class" className="w-full h-48 rounded-xl" data-aos="zoom-in" />
              <div className="px-4 py-4">
                <h2 className="text-lg font-bold mb-2" data-aos="fade-up">{cls.className}</h2>
                <p className="text-sm mb-2" data-aos="fade-up">Instructor: {cls.instructorName}</p>
                <p className="text-sm mb-2" data-aos="fade-up">Email: {cls.instructorEmail}</p>
                <p className="text-sm mb-2" data-aos="fade-up">Available Seats: {cls.availableSeats}</p>
                <p className="text-sm mb-2" data-aos="fade-up">Price: {cls.price}</p>
                <button className="inline-flex text-white border-0 py-2 px-4 focus:outline-none rounded bg-yellow-500 hover:bg-stone-900 text-lg" data-aos="fade-up">Enroll Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopClass;
