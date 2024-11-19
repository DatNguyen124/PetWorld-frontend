import React from "react";
import { Route, Navigate } from "react-router-dom";

interface AdminRouteProps {
  element: React.ReactNode;
}

const getRolesFromLocalStorage = (): string[] => {
  try {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    return user.roles || [];
  } catch (error) {
    console.error("Error parsing local storage item", error);
    return [];
  }
};

const AdminRoute: React.FC<AdminRouteProps> = ({ element }) => {
  const isAuthenticated = Boolean(localStorage.getItem("accessToken"));
  const userRoles = getRolesFromLocalStorage();
  const isAdmin = userRoles.includes("ROLE_ADMIN");

  return isAdmin ? <>{element}</> : <Navigate to="/" />;
};

export default AdminRoute;
