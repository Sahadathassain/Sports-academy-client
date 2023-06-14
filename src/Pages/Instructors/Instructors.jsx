import  { useEffect, useState } from 'react';

const Instructors = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/allData')
      .then(response => response.json())
      .then(data => setClasses(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4 text-center">All Instructors</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10">
        {classes.map(cls => (
          <div key={cls._id} className="bg-white rounded-lg overflow-hidden shadow-lg">
            <img src={cls.instructorImage} alt="Class" className="w-full h-48 rounded-xl" />
            <div className="px-4 py-4">
              <h2 className="text-lg font-bold mb-2">{cls.className}</h2>
              <p className="text-sm mb-2">Instructor: {cls.instructorName}</p>
              <p className="text-sm mb-2">Email: {cls.instructorEmail}</p>
              <p className="text-sm mb-2">Available Seats: {cls.availableSeats}</p>
              <p className="text-sm mb-2">Price: {cls.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
