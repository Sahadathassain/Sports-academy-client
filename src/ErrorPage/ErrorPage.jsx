import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="px-9">
        <img className="h-96 w-96" src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=2000" alt="error" />
      </div>
      <div>
        <NavLink className="justify-center" to="/">
          <button className="btn text-lg mt-5 text-center">Go Back</button>
        </NavLink>
      </div>
    </div>
  );
};

export default ErrorPage;
