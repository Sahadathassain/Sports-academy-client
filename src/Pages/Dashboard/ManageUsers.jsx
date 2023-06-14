import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../hooks/uesAxosecure';
import Swal from 'sweetalert2';

const ManageUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });

  const handleMakeAdmin = (user) => {
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            title: `${user.name} is an Admin Now!`,
            showConfirmButton: false,
            timer: 1000,
            icon: "success",
          });
          refetch();
        }
      });
  };

  const handleMakeInstructor = (user) => {
    fetch(`http://localhost:5000/users/instructor/${user._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            title: `${user.name} is now an Instructor!`,
            showConfirmButton: false,
            timer: 1000,
            icon: "success",
          });
          refetch();
        }
      });
  };

  return (
    <div className="container mx-auto mt-24 ml-20">
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="px-4 py-2 text-center">Photo URL</th>
            <th className="px-4 py-2 text-center">Name</th>
            <th className="px-4 py-2 text-center">Role</th>
            <th className="px-4 py-2 text-center">Actions</th>
            <th className="px-4 py-2 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td className="px-4 py-2 text-center">
                <div className="flex items-center ">
                  <img
                    src={user.photoURl}
                    alt="Avatar"
                    className="w-14 h-14 rounded-full  mr-6"
                  />
                 
                </div>
              </td>
              <td className="px-4 py-2 text-center"> {user.name}</td>
              <td className="px-4 py-2 text-center">{user.role}</td>
              <td className="px-4 py-2 text-center">
                <button
                  className="btn px-4 py-2"
                  onClick={() => handleMakeInstructor(user)}
                  disabled={user.role === "instructor"}
                >
                  Make Instructor
                </button>
              </td>
              <td className="px-4 py-2 text-center">
                <button
                  className="btn px-4 py-2"
                  onClick={() => handleMakeAdmin(user)}
                  disabled={user.role === "admin"}
                >
                  Make Admin
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUsers;
