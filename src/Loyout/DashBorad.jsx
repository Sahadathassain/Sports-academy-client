import { FaAddressCard, FaFolder } from 'react-icons/fa';
import { AiFillHome } from 'react-icons/ai';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="flex">
            <div className="w-64 bg-yellow-500 fixed h-screen">
                <div className="flex items-center justify-center p-4">
                    <div className="items-center justify-center">
                        <img
                            src="https://img.freepik.com/premium-vector/sports-academy-logo-illustration_288067-677.jpg"
                            alt="Avatar"
                            className="w-48 h-48 rounded-full mr-3"
                        />
                        <div>
                            <p className="text-black text-center">johndoe@example.com</p>
                           
                        </div>
                    </div>
                </div>

                <div className='gap-10 '>
                <ul className="p-4">
                    <li>
                        <NavLink className="mr-2 flex items-center" to="/dashboard/addclass">
                            <FaAddressCard className="mr-2" />
                            <span className="text-black text-3xl">Add Classes</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="mr-2 mt-9 flex items-center" to="/dashboard/reservations">
                            <FaFolder className="mr-2" />
                            <span className="text-black text-3xl">My Classes</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="mr-2 mt-9 flex items-center" to="/">
                            <AiFillHome className="mr-2" />
                            <span className="text-black text-3xl">Home</span>
                        </NavLink>
                    </li>
                </ul>
                </div>
            </div>
            <div className="ml-64  ">
                <Outlet />
                
            </div>
           
        </div>
    );
};

export default Dashboard;
