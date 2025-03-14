import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ publicPage = false }) => {
  const { user } = useSelector((state) => state.auth);

  if (publicPage) {
    return user ? <Navigate to="/" /> : <Outlet />;
  }
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
