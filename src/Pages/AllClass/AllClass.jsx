import { useState, useEffect } from 'react';

const AllClass = () => {
  const [classes, setClasses] = useState([]);
 

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await fetch('http://localhost:5000/allData');
        if (response.ok) {
          const data = await response.json();
          setClasses(data);
        } else {
          console.log('Failed to fetch classes');
        }
      } catch (error) {
        console.log('An error occurred:', error);
      }
    };

    fetchClasses();
  }, []);



  return (
    <div className="bg-gray-200 mx-auto p-4 w-auto">
    <h2 className="text-2xl font-bold mb-4 text-center">All Class Information</h2>

    <div className="flex flex-wrap justify-center">
      {classes.map((classItem) => (
        <div
          key={classItem.id}
          className="bg-white rounded-lg p-4 shadow w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/3 mb-4"
          style={{
            // Add your custom card style here
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '16px',
            textAlign: 'center',
          }}
        >
         
          <h3 className="text-xl font-bold my-2 text-center">{classItem.className}</h3>
          <div className="flex items-center justify-center mb-2">
            <img src={classItem.instructorImage} alt={classItem.name} className="h-12 w-12 rounded-full mr-2" />
            <span>{classItem.instructorName}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Available Seats: {classItem.availableSeats}</span>
            <span>Price: {classItem.price}</span>
          </div>
          <div className="flex justify-center">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Select
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
);
  
};

export default AllClass;
