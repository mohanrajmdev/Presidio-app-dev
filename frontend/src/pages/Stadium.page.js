import Tower from './Tower';
import React, { useState, useEffect, useContext } from "react";

import { Button } from "@mui/material";
import { useNavigate,Link } from "react-router-dom";
import { UserContext } from "../contexts/user.context";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Stadiumpage = () => {
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
    <div>
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
        <Tower name={"chinnasammy Stadium"} towername={'Tower A'} />
        <Tower name={"chinnasammy Stadium"} towername={'Tower B'} />
        <Tower name={"chinnasammy Stadium"} towername={'Tower C'} />
    </div>
  )
}

export default Stadiumpage;