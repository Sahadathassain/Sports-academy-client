
import 'tailwindcss/tailwind.css';

const MySelectedClasses = () => {
//   if (!data || data.length === 0) {
//     return <p>No classes selected.</p>;
//   }

  return (
    <table className="w-full mx-auto bg-white">
      <thead>
        <tr>
          <th className="py-2 px-4">Class Image</th>
          <th className="py-2 px-4">Class Name</th>
          <th className="py-2 px-4">Instructor</th>
          <th className="py-2 px-4">Price</th>
          <th className="py-2 px-4">Available Seats</th>
          <th className="py-2 px-4">Action</th>
          <th className="py-2 px-4">Payment</th>
        </tr>
      </thead>
      <tbody>
        {/* {data.map((item, index) => (
          <tr key={index}>
            <td className="py-2 px-4">{item.classImage}</td>
            <td className="py-2 px-4">{item.className}</td>
            <td className="py-2 px-4">{item.instructor}</td>
            <td className="py-2 px-4">{item.price}</td>
            <td className="py-2 px-4">{item.availableSeats}</td>
            <td className="py-2 px-4">{item.action}</td>
            <td className="py-2 px-4">{item.payment}</td>
          </tr>
        ))} */}
      </tbody>
    </table>
  );
};

export default MySelectedClasses;
