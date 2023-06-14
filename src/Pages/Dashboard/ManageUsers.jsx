import { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const ManageUsers = () => {
  const { user } = useContext(AuthContext);
  const [users, setUsers] = useState([user]);

  // const updateUserRole = (userId, newRole) => {
  //   const updatedUsers = users.map(user => {
  //     if (user._id === userId) {
  //       return { ...user, role: newRole };
  //     }
  //     return user;
  //   });

  //   setUsers(updatedUsers);
  // };

  const makeInstructor = (userId) => {
    const updatedUsers = users.map(user => {
      if (user._id === userId) {
        return { ...user, role: 'instructor' };
      }
      return user;
    });

    setUsers(updatedUsers);

    fetch(`/users/${userId}/role`, {
      method: 'PUT',
      body: JSON.stringify({ role: 'instructor' }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (response.ok) {
          console.log('User role updated successfully.');
          // You can perform additional actions if needed
        } else {
          throw new Error('Failed to update user role.');
        }
      })
      .catch(error => {
        console.error('Error updating user role:', error);
        // Handle error
      });
  };

  const makeAdmin = (userId) => {
    const updatedUsers = users.map(user => {
      if (user._id === userId) {
        return { ...user, role: 'admin' };
      }
      return user;
    });

    setUsers(updatedUsers);

    fetch(`/users/${userId}/role`, {
      method: 'PUT',
      body: JSON.stringify({ role: 'admin' }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (response.ok) {
          console.log('User role updated successfully.');
          // You can perform additional actions if needed
        } else {
          throw new Error('Failed to update user role.');
        }
      })
      .catch(error => {
        console.error('Error updating user role:', error);
        // Handle error
      });
  };

  return (
    <div className="container mx-auto">
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Role</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user._id}>
              <td className="px-4 py-2">{user.name}</td>
              <td className="px-4 py-2">{user.role}</td>
              <td className="px-4 py-2">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                  onClick={() => makeInstructor(user._id)}
                  disabled={user.role === 'instructor'}
                >
                  Make Instructor
                </button>
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => makeAdmin(user._id)}
                  disabled={user.role === 'admin'}
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
