import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";

import ReactModal from "react-modal";
import UpdateClassForm from "../AllClass/UpdateClassForm";

const MyClasses= () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedClass, setSelectedClass] = useState(null);
  const axiosSecure = useAxiosSecure();
  const { data: classes = [], refetch } = useQuery(["classes"], async () => {
    const res = await axiosSecure.get("/classes");
    return res.data;
  });

  const handleUpdateClick = (classesData) => {
    setSelectedClass(classesData);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setSelectedClass(null);
    setIsModalOpen(false);
  };

  return (
    <div className=" w-full ml-20">
      <h2 className="text-2xl font-bold mb-4 text-center">Instructor Classes</h2>
      <div className="overflow-x-auto">
        <div className="w-full overflow-scroll">
          <table className="w-full table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2">#</th>
                <th className="px-4 py-2">Class Name</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Total Enrolled Students</th>
                <th className="px-4 py-2">Feedback</th>
                <th className="px-4 py-2">Update</th>
              </tr>
            </thead>
            <tbody>
              {classes.map((classesData, index) => (
                <tr
                  key={classesData._id}
                  className={`${index % 2 === 0 ? "bg-gray-100" : "bg-white"}`}>
                  <td className="px-4 py-2 border">{index + 1}</td>
                  <td className="px-4 py-2 border">{classesData.className}</td>
                  <td className="px-4 py-2 border">{classesData.status}</td>
                  <td className="px-4 py-2 border">
                    {classesData?.enrolledStudents?.length || 0}
                  </td>
                  <td className="px-4 py-2 border">
                    {classesData.status ? classesData.feedback : "-"}
                  </td>
                  <td className="px-4 py-2 border">
                    <button
                      className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-blue-700"
                      onClick={() => handleUpdateClick(classesData)}>
                      Update
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <ReactModal
        ariaHideApp={false}
        isOpen={isModalOpen}
        onRequestClose={handleModalClose}
        contentLabel="Update Class">
        <h2 className="text-2xl font-bold mb-4">Update Class</h2>
        {selectedClass && (
          <UpdateClassForm
            refetch={refetch}
            classesData={selectedClass}
            onSubmit={handleModalClose}
            onClose={handleModalClose}
          />
        )}
      </ReactModal>
    </div>
  );
};

export default MyClasses;