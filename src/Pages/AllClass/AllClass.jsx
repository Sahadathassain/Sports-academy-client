import  { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

import axios from "axios";
import { UserContext } from "../../hooks/UserContext";
import { useQuery } from "@tanstack/react-query";

const AllClass = () => {
  const [selectedClasses, setSelectedClasses] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useContext(UserContext);

  const fetchClasses = async () => {
    const res = await axios.get("http://localhost:5000/classes");
    return res.data;
  };

  const { data: classes = [], refetch } = useQuery(['classes'], fetchClasses);

  const handleSelect = async (classData) => {
    // Check if the user is logged in
    if (!user || !user.email) {
      Swal.fire({
        title: "Please login to select a class",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
      return;
    }

    const selectClass = {
      studentEmail: user.email,
      studentName: user.displayName,
      className: classData.className,
      selectedId: classData._id,
      classImage: classData.classImage,
      price: classData.price,
      availableSeats: classData.availableSeats,
      instructorName: classData.instructorName,
      instructorEmail: classData.instructorEmail,
      photoUrl: classData.photoUrl,
      feedback: classData.feedback,
      enrolled: false,
    };

    const isAlreadySelected = selectedClasses.some(
      (selectedClass) =>
        selectedClass.selectedId === classData._id &&
        selectedClass.studentEmail === user.email
    );

    if (isAlreadySelected) {
      Swal.fire({
        position: "top-end",
        icon: "info",
        title: "Class already selected",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }

    setSelectedClasses((prevSelectedClasses) => [
      ...prevSelectedClasses,
      selectClass,
    ]);

    axios
      .post("http://localhost:5000/selectedclasses", selectClass)
      .then((response) => {
        if (response.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Class is selected",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const approvedClasses = classes.filter(
    (classData) => classData.status === "approved"
  );

  useEffect(() => {
    refetch();
  }, [refetch]);

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 mx-4 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {approvedClasses.map((classData) => (
          <div
            key={classData._id}
            className={`class-card bg-white rounded-lg overflow-hidden shadow-md ${
              classData.availableSeats === 0 ? "no-seats" : ""
            }`}
          >
            <img
              src={classData.classImage}
              alt={classData.className}
              className="w-full h-48"
            />
            <div className="p-4 text-lg">
              <h2 className="font-bold mb-2">{classData.className}</h2>
              <p className="text-gray-600 mb-2">
                Instructor: {classData.instructorName}
              </p>
              <p className="text-gray-600 mb-2">
                Price: {classData.price} USD
              </p>
              <p className="text-gray-600 mb-2">
                Available Seats: {classData.availableSeats}
              </p>
            </div>
            <div className="p-4">
              <button
                className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={() => handleSelect(classData)}
                disabled={classData.availableSeats === 0}
              >
                Select Class
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllClass;
