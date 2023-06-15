import  { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

// Placeholder for useAxiosSecure hook
// Placeholder for useAuth hook
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AllClass = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [selectedClasses, setSelectedClasses] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  const { data: classes = [], refetch } = useQuery(["allclass"], async () => {
    const res = await axiosSecure.get("/allclasses"); // Updated API endpoint
    return res.data;
  });

  const { data: selectedClassesData = [] } = useQuery(
    ["selectedclasses"],
    async () => {
      const res = await axiosSecure.get("/selectedclasses");
      return res.data;
    },
    {
      enabled: !!user,
    }
  );

  useEffect(() => {
    if (selectedClassesData.length > 0) {
      setSelectedClasses(selectedClassesData);
    }
  }, [selectedClassesData]);

  const handleSelect = async (classData) => {
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

    const {
      _id,
      className,
      classImage,
      price,
      availableSeats,
      instructorName,
      instructorEmail,
      photoUrl,
      feedback,
    } = classData;

    const selectClass = {
      studentEmail: user.email,
      studentName: user.displayName,
      className,
      selectedId: _id,
      classImage,
      price,
      availableSeats,
      instructorName,
      instructorEmail,
      photoUrl,
      feedback,
      enrolled: false,
    };

    const isAlreadySelected = selectedClasses.some(
      (selectedClass) =>
        selectedClass.selectedId === _id &&
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

    try {
      const res = await axiosSecure.post("/selectedclasses", selectClass);
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Class is selected",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.log(error);
      // Handle error if the request fails
    }
  };

  const approvedClasses = classes.filter(
    (classData) => classData.status === "approved"
  );

  useEffect(() => {
    refetch();
  }, [refetch]);

  return (
    <div className="w-full">
      <h1 className="text-3xl text-center font-bold my-8">Approved Classes</h1>
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
              <h2 className="text-xl font-bold mb-2">
                Class Name: {classData.className}
              </h2>
              <p className="mb-2">Instructor: {classData.instructorName}</p>
              <p className="mb-2">Total Seats: {classData.totalSeats}</p>
              <p className="mb-2">
                Available Seats: {classData.availableSeats}
              </p>
              <p className="mb-2">Price: ${classData.price}</p>
              <button
                disabled={
                  classData.availableSeats === 0 ||
                  selectedClasses.some(
                    (selectedClass) =>
                      selectedClass.selectedId === classData._id &&
                      selectedClass.studentEmail === user?.email
                  )
                }
                onClick={() => handleSelect(classData)}
                className="btn-gray w-full disabled:bg-gray-500 disabled:hover:text-white disabled:cursor-not-allowed"
              >
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
