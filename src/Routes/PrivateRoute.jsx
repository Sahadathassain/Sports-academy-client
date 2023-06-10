import { useContext } from 'react';
import { Navigate } from 'react-router';

import PropTypes from 'prop-types';
import { AuthContext } from '../Providers/AuthProvider';

const PrivateRoute = (  {children} ) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <progress className="progress w-56"></progress>;
  }

  if (user?.email) {
    return children; // Render the children when the user is logged in
  }

  return <Navigate to="/login" replace />; // Redirect to the login page when the user is not logged in
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
export default PrivateRoute;
