import { Outlet, Navigate } from "react-router-dom";
import { useState } from "react";

const ProtectedRoute = () => {
  const [isAuth, setIsAuth] = useState(false);

  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
