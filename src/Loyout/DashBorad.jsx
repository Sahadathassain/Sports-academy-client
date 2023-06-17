import { FaAddressCard, FaFolder } from 'react-icons/fa';
import { AiFillHome } from 'react-icons/ai';
import { FcPaid } from 'react-icons/fc';
import { MdManageAccounts, MdOutlinePayment } from 'react-icons/md';
import { GrUserManager } from 'react-icons/gr';
import { NavLink, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import useRole from '../hooks/useRole';



const Dashboard = () => {
  const { user } = useAuth();
  const { role: userRole } = useRole();
  console.log(userRole);
  console.log(user);
  

  return (
    <div className="flex">
      <div className="w-64 bg-yellow-500 fixed h-screen">
        <div className="flex items-center justify-center p-4">
          <div className="items-center justify-center">
            <img src={user?.photoURL} alt="Avatar" className="w-24 h-25 mb-4 rounded-full ml-5" />
           
            <div>
              <p className="text-black  text-xl font-bold ">{user?.displayName}</p>
            </div>
          </div>
        </div>
        <hr className="bg-black" />
        <div className="gap-10">
          <ul className="p-4">
            {userRole === 'student' && (
              <>
                <li>
                  <NavLink className="mr-2 flex items-center" to="enrolled-classes" exact={true}>
                    <FcPaid className="mr-2" />
                    <span className="text-black text-1xl"> My Enrolled Classes</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink className="mr-2 mt-9 mb-5 flex items-center" to="selectedClasses" exact={true}>
                    <AiFillHome className="mr-2" />
                    <span className="text-black text-1xl"> My Selected Classes</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink className="mr-2 flex items-center" to="payment" exact={true}>
                    <MdOutlinePayment className="mr-2" />
                    <span className="text-black text-1xl">Payment</span>
                  </NavLink>
                </li>
              </>
            )}
            {userRole === 'instructor' && (
              <>
                <li>
                  <NavLink className="mr-2 flex items-center" to="addClass" exact={true}>
                    <FaAddressCard className="mr-2" />
                    <span className="text-black text-2xl">Add Class</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink className="mr-2 mt-9 mb-5 flex items-center" to="myClass" exact={true}>
                    <FaFolder className="mr-2" />
                    <span className="text-black text-2xl">My Classes</span>
                  </NavLink>
                </li>
              </>
            )}
            {userRole === 'admin' && (
              <>
                <li>
                  <NavLink className="mr-2 flex items-center" to="manage-classes" exact={true}>
                    <MdManageAccounts className="mr-2" />
                    <span className="text-black text-2xl">Manage Classes</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink className="mr-2 mt-9 mb-5 flex items-center" to="manage-users" exact={true}>
                    <GrUserManager className="mr-2" />
                    <span className="text-black text-2xl">Manage Users</span>
                  </NavLink>
                </li>
              </>
            )}
            <hr />
            <li>
              <NavLink className="mr-2 mt-9 flex items-center" to="/">
                <AiFillHome className="mr-2" />
                <span className="text-black text-3xl">Home</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="ml-64 ">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
