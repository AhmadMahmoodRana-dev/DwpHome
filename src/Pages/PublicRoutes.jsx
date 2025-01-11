import { Navigate, Outlet } from "react-router-dom";

const PublicRoutes = () => {
    const auth=localStorage.getItem('user');

  return auth ? <Navigate to="/Home" /> : <Outlet />;
};

export default PublicRoutes;
