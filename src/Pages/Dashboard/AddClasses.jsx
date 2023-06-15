import { useState } from 'react';

const AddClasses = () => {
  const [className, setClassName] = useState('');
  const [classImage, setClassImage] = useState('');
  const [availableSeats, setAvailableSeats] = useState();
  const [price, setPrice] = useState();
  const [instructorName, setInstructorName] = useState('');
  const [instructorEmail, setInstructorEmail] = useState('');
  const [instructorImage, setInstructorImage] = useState('');

  const updateClassName = (e) => {
    setClassName(e.target.value);
  };

  const updateClassImage = (e) => {
    setClassImage(e.target.value);
  };

  const updateAvailableSeats = (e) => {
    setAvailableSeats(parseInt(e.target.value));
  };

  const updatePrice = (e) => {
    setPrice(parseInt(e.target.value));
  };

  const updateInstructorName = (e) => {
    setInstructorName(e.target.value);
  };

  const updateInstructorEmail = (e) => {
    setInstructorEmail(e.target.value);
  };

  const updateInstructorImage = (e) => {
    setInstructorImage(e.target.value);
  };

  const addButtonClicked = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/addClass', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          className,
          classImage,
          availableSeats,
          price,
          instructorName,
          instructorEmail,
          instructorImage,
          status: 'pending',
        }),
      });

      if (response.ok) {
        console.log('Class added successfully');
        // Reset form fields or perform any other necessary actions
        setClassName('');
        setClassImage('');
        setAvailableSeats('');
        setPrice('');
        setInstructorName('');
        setInstructorEmail('');
        setInstructorImage('');
      } else {
        console.log('Failed to add class');
        // Handle error case
      }
    } catch (error) {
      console.log('An error occurred:', error);
    }
  };

  return (
    <div className="bg-gray-200 mx-auto ml-16 mt-16 p-4 w-[900px] ">
      <h2 className="text-2xl font-bold mb-4 text-center">Add Class Information</h2>

      <form onSubmit={addButtonClicked} className="mb-4">
        <div className="flex mb-4">
          <label className="mr-4 w-full">
            Class Name:
            <input
              type="text"
              id="class-name"
              value={className}
              onChange={updateClassName}
              className="border w-full border-gray-400 px-3 py-2 rounded-md focus:outline-none"
            />
          </label>

          <label className="mr-4 w-full">
            Class Image:
            <input
              type="text"
              id="class-image"
              value={classImage}
              onChange={updateClassImage}
              className="border w-full border-gray-400 px-3 py-2 rounded-md focus:outline-none"
            />
          </label>
        </div>

        <div className="flex mb-4">
          <label className="mr-4 w-full">
            Available Seats:
            <input
              type="number"
              id="available-seats"
              value={availableSeats}
              onChange={updateAvailableSeats}
              className="border w-full border-gray-400 px-3 py-2 rounded-md focus:outline-none"
            />
          </label>

          <label className="mr-4 w-full">
            Price:
            <input
              type="number"
              id="price"
              value={price}
              onChange={updatePrice}
              className="border w-full border-gray-400 px-3 py-2 rounded-md focus:outline-none"
            />
          </label>
        </div>

        <div className="flex mb-4">
          <label className="mr-4 w-full">
            Instructor Name:
            <input
              type="text"
              id="instructor-name"
              value={instructorName}
              onChange={updateInstructorName}
              className="border w-full border-gray-400 px-3 py-2 rounded-md focus:outline-none"
            />
          </label>

          <label className="mr-4 w-full">
            Instructor Email:
            <input
              type="email"
              id="instructor-email"
              value={instructorEmail}
              onChange={updateInstructorEmail}
              className="border w-full border-gray-400 px-3 py-2 rounded-md focus:outline-none"
            />
          </label>
        </div>

        <div className="flex mb-4">
          <label className="mr-4 w-full">
            Instructor Image:
            <input
              type="text"
              id="instructor-image"
              value={instructorImage}
              onChange={updateInstructorImage}
              className="border w-full border-gray-400 px-3 py-2 rounded-md focus:outline-none"
            />
          </label>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600"
        >
          Add
        </button>
      </form>

      
    </div>
  );
};

export default AddClasses;