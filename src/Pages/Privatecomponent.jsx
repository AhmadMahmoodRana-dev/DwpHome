import { Navigate, Outlet } from "react-router-dom";
import Layout from "./Layout";

const Privatecomponent = () => {
  const auth=localStorage.getItem('user');
  console.log(auth,"auth")
  return auth ? (
    <Layout>
      <Outlet />
    </Layout>
  ) : (
    <Navigate to="/LoginPage" />
  );
};

export default Privatecomponent;