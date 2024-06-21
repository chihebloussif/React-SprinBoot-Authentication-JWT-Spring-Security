import React from "react";
import { getCurrentUser, logout } from "../services/authService";
import { useNavigate } from "react-router-dom";

const Profile: React.FC = () => {
  const currentUser = getCurrentUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div>
      <h2>ADMIN Dashboard</h2>
      <p>Username: {currentUser.user.username}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;
