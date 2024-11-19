// import React, { ReactNode } from "react";
// import { Navigate } from "react-router-dom";

// interface ProtectedRouteProps {
//   isAdmin?: boolean;
//   isUser?: boolean;
//   children: ReactNode;
// }

// const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
//   isAdmin,
//   isUser,
//   children,
// }) => {
//   if (!isUser) {
//     return <Navigate to="/not-authorized" />;
//   }
//   if (!isAdmin) {
//     return <Navigate to="/not-authorized" />;
//   }

//   return <>{children}</>;
// };

// export default ProtectedRoute;

import React from "react";
import { Route, Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  roles: string;
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

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ roles, element }) => {
  //const isAuthenticated = Boolean(localStorage.getItem("accessToken"));
  const userRoles = getRolesFromLocalStorage();
  const isAdmin = userRoles.includes("ROLE_ADMIN");
  const isUser = userRoles.includes("ROLE_USER");

  return isAdmin || isUser ? <>{element}</> : <Navigate to="/" />;
};

export default ProtectedRoute;
