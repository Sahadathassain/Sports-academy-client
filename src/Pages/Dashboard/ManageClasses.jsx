import  { useState, useEffect } from 'react';
import FeedbackModal from './FeedbackModal';

const ManageClasses = () => {
  const [classes, setClasses] = useState([]);
  const [selectedClass, setSelectedClass] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch('http://localhost:5000/allData')
      .then((response) => response.json())
      .then((data) => setClasses(data))
      .catch((error) => console.log(error));
  }, []);

  const handleApprove = (classId) => {
    const updatedClasses = classes.map((cls) => {
      if (cls._id === classId) {
        return { ...cls, status: 'approved' };
      }
      return cls;
    });
    setClasses(updatedClasses);
    updateClassStatus(classId, 'approved'); // Update status in the server/database
  };

  const handleDeny = (classId) => {
    const updatedClasses = classes.map((cls) => {
      if (cls._id === classId) {
        return { ...cls, status: 'denied' };
      }
      return cls;
    });
    setClasses(updatedClasses);
    updateClassStatus(classId, 'denied'); // Update status in the server/database
  };

  const updateClassStatus = (classId, status) => {
    // Make an API request to update the class status in the server/database
    fetch(`http://localhost:5000/classes/status/${classId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ status }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  const handleSendFeedback = (classId) => {
    const selectedClass = classes.find((cls) => cls._id === classId);
    setSelectedClass(selectedClass);
    setShowModal(true);
  };

  const handleFeedbackSubmit = (feedback) => {
    // Implement logic to send the feedback to the instructor
    console.log('Submitting feedback:', feedback);

    // Close the modal
    setShowModal(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4 text-center">Classes</h1>
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
                <div className='flex'>
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

      {/* Render the modal */}
      {showModal && selectedClass && (
        <FeedbackModal
          classId={selectedClass._id}
          instructorName={selectedClass.instructorName}
          instructorEmail={selectedClass.instructorEmail}
          onSubmit={handleFeedbackSubmit}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default ManageClasses;
