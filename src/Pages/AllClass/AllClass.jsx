import { useState, useEffect } from 'react';

const AllClass = () => {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        const fetchClasses = async () => {
            try {
                const response = await fetch('http://localhost:5000/allData');
                if (response.ok) {
                    const data = await response.json();
                    setClasses(data);
                } else {
                    console.log('Failed to fetch classes');
                }
            } catch (error) {
                console.log('An error occurred:', error);
            }
        };

        fetchClasses();
    }, []);


    return (
        <div className="bg-gray-200 mx-auto  p-4 w-auto">
            <h2 className="text-2xl font-bold mb-4 text-center">All Class Information</h2>

            <table className="min-w-full bg-white">
                <thead>
                    <tr>
                        <th className="px-6 py-3 border-b-2 border-gray-300 text-center text-sm font-bold text-gray-800">
                            Image
                        </th>
                        <th className="px-6 py-3 border-b-2 border-gray-300 text-center text-sm font-bold text-gray-800">
                            Name
                        </th>
                        <th className="px-6 py-3 border-b-2 border-gray-300 text-center text-sm font-bold text-gray-800">
                        Instructor Image
                        </th>
                        <th className="px-6 py-3 border-b-2 border-gray-300 text-center text-sm font-bold text-gray-800">
                            Instructor Name
                        </th>
                        <th className="px-6 py-3 border-b-2 border-gray-300 text-center text-sm font-bold text-gray-800">
                            Available Seats
                        </th>
                        <th className="px-6 py-3 border-b-2 border-gray-300 text-center text-sm font-bold text-gray-800">
                            Price
                        </th>
                        <th className="px-6 py-3 border-b-2 border-gray-300 text-center text-sm font-bold text-gray-800">Button</th>
                    </tr>
                </thead>
                <tbody className='py-10 bg-slate-200 '>
                    {classes.map((classItem) => (
                        <tr key={classItem.id}>
                            <td className="px-16 mx-2 py-6 mb-3  whitespace-nowrap justify-center  ">
                                <img
                                    src={classItem.
                                        classImage}
                                    alt={classItem.name}
                                    className="h-30 w-20 rounded-xl"
                                />
                            </td>
                            <td className="px-6 py-4 text-center whitespace-nowrap ">{classItem.className}</td>
                            <td className="px-16  py-6 text-center whitespace-nowrap ml-6 ">
                                <img
                                    src={classItem.
                                        instructorImage}
                                    alt={classItem.name}
                                    className="h-12 w-12 rounded-full"
                                />
                            </td>
                            
                            <td className="px-6 py-4 text-center whitespace-nowrap">{classItem.
                                instructorName}</td>
                            <td className="px-6 py-4 text-center whitespace-nowrap">{classItem.availableSeats}</td>
                            <td className="px-6 py-4 text-center whitespace-nowrap">{classItem.price}</td>
                            <td className="px-6 py-4 text-center whitespace-nowrap">
                                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                                    Select
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AllClass;
