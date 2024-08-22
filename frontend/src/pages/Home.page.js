import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { MdStadium } from "react-icons/md";
import Stadium from "./Stadium";
import { Button } from "@mui/material";
import { useNavigate,Link } from "react-router-dom";
import { UserContext } from "../contexts/user.context";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Home = () => {
  const { user } = useContext(UserContext);
  console.log(user.profile.email);

  
  const { logOutUser } = useContext(UserContext);
  const navigate = useNavigate();

  const logOut = async () => {
    try {
      const loggedOut = await logOutUser();
      if (loggedOut) {
        window.location.reload(true);
        toast.success("Logged out successfully!");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
    }
  };

  

  return (
    <div className="movie-list p-6 bg-gray-50 min-h-screen">
              <ToastContainer />
      <div className="flex justify-end mb-6">
        <Button
          variant="contained"
          onClick={logOut}
          className="mb-4 bg-blue-600 hover:bg-blue-700"
        >
          Logout
        </Button>
      </div>
      <h1>Welcome User!</h1>
      <Stadium name="Chinnasamy Stadium" match={"CSK vs RR"} />

    </div>
  );
};

export default Home;

