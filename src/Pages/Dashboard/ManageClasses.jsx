import  { useState, useEffect } from 'react';

const ClassesPage = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/allData')
      .then((response) => response.json())
      .then((data) => setClasses(data))
      .catch((error) => console.log(error));
  }, []);

  const handleApprove = (classId) => {
    setClasses((prevClasses) => {
      return prevClasses.map((cls) => {
        if (cls._id === classId) {
          return { ...cls, status: 'approved' };
        }
        return cls;
      });
    });
  };

  const handleDeny = (classId) => {
    setClasses((prevClasses) => {
      return prevClasses.map((cls) => {
        if (cls._id === classId) {
          return { ...cls, status: 'denied' };
        }
        return cls;
      });
    });
  };

  const handleSendFeedback = (classId) => {
    // Implement logic to open modal or navigate to feedback route
    console.log(`Send feedback for class with ID ${classId}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Classes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {classes.map((cls) => (
          <div key={cls._id} className="bg-white rounded-lg overflow-hidden shadow-lg">
            <img src={cls.classImage} alt="Class" className="w-full h-48 object-cover" />
            <div className="px-4 py-4">
              <h2 className="text-lg font-bold mb-2">{cls.className}</h2>
              <p className="text-sm mb-2">Instructor: {cls.instructorName}</p>
              <p className="text-sm mb-2">Email: {cls.instructorEmail}</p>
              <p className="text-sm mb-2">Available Seats: {cls.availableSeats}</p>
              <p className="text-sm mb-2">Price: {cls.price}</p>
              <p className="text-sm mb-2">Status: {cls.status || 'pending'}</p>
              {cls.status === 'pending' && (
                <div>
                  <button
                    onClick={() => handleApprove(cls._id)}
                    className="mr-2 bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded disabled:opacity-50"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleDeny(cls._id)}
                    className="mr-2 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded disabled:opacity-50"
                  >
                    Deny
                  </button>
                </div>
              )}
              <button
                onClick={() => handleSendFeedback(cls._id)}
                className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
              >
                Send Feedback
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClassesPage;
