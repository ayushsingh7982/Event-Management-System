import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [User, setUser] = useState(null);
  const authData = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const parsedUser = JSON.parse(loggedInUser);
      setUser(parsedUser.role);
    }
  }, [authData]);

  const handleLogin = (email, password) => {
    if (email === "admin@me.com" && password === "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (
      authData &&
      authData.employees?.find(
        (e) => e.email === email && e.password === password
      )
    ) {
      setUser("employee");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee" }));
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <>
      {!User && <Login handleLogin={handleLogin} />}
      {User === "employee" && <EmployeeDashboard />}
      {User === "admin" && <AdminDashboard />}
    </>
  );
};

export default App;
