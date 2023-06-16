
import Modal from 'react-modal';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';

Modal.setAppElement('#root');

const UpdateClassForm = ({ classesData, onSubmit, onClose, refetch }) => {
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit } = useForm();

  const onUpdateSubmit = async (data) => {
    console.log(data);
    const { className, availableSeats, price, classImage } = data;
    const updateData = {
      className,
      availableSeats: parseFloat(availableSeats),
      price: parseFloat(price),
      classImage,
    };
    try {
      const response = await axiosSecure.patch(`/classes/${classesData._id}`, updateData);
      console.log(response.data);
      onSubmit();
      refetch();
      Swal.fire('Success', 'Class updated successfully!', 'success');
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <form onSubmit={handleSubmit(onUpdateSubmit)}>
      <div className="mb-4">
        <label
          htmlFor="className"
          className="block text-gray-700 font-bold mb-2">
          Class Name
        </label>
        <input
          type="text"
          id="className"
          {...register("className")}
          defaultValue={classesData.className}
          className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="classImage"
          className="block text-gray-700 font-bold mb-2">
          Class Image
        </label>
        <input
          type="text"
          id="classImage"
          {...register("classImage")}
          defaultValue={classesData.classImage}
          className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="availableSeats"
          className="block text-gray-700 font-bold mb-2">
          Available Seats
        </label>
        <input
          type="number"
          id="availableSeats"
          {...register("availableSeats")}
          defaultValue={classesData.availableSeats}
          className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="price" className="block text-gray-700 font-bold mb-2">
          Price
        </label>
        <input
          type="number"
          id="price"
          {...register("price")}
          defaultValue={classesData.price}
          className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="flex justify-between">
        <button
          type="submit"
          className="w-full bg-blue-500 text-white rounded-md py-2 hover:bg-blue-700">
          Update
        </button>
        <button
          type="button"
          onClick={onClose}
          className="w-full bg-red-500 text-white rounded-md py-2 hover:bg-red-700 ml-2">
          Close
        </button>
      </div>
    </form>
  );
};

export default UpdateClassForm;