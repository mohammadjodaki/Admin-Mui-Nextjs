"use client";  
import * as React from "react";  
import { useState } from "react";  
import axios from "axios";  
import Alert from "@mui/material/Alert";  
import CheckIcon from "@mui/icons-material/Check";  
import Link from "next/link";

function Registration() {  
  const [registerUsername, setRegisterUsername] = useState("");  
  const [registerEmail, setRegisterEmail] = useState("");  
  const [registerPassword, setRegisterPassword] = useState("");  
  const [registerNumber, setRegisterNumber] = useState("");  
  const [alertMessage, setAlertMessage] = useState(null);  
  const [alertSeverity, setAlertSeverity] = useState("success");  

  const handleCheckDuplicate = async () => {  
    try {  
      const response = await axios.get("https://66b9d7affa763ff550f9c4ee.mockapi.io/user");  
      const users = response.data;  

      const isUsernameTaken = users.some(user => user.username === registerUsername);  
      const isEmailTaken = users.some(user => user.email === registerEmail);  

      if (isUsernameTaken) {  
        setAlertMessage("Username is already taken.");  
        setAlertSeverity("error");  
        return false;  
      }  

      if (isEmailTaken) {  
        setAlertMessage("Email is already registered.");  
        setAlertSeverity("error");  
        return false;  
      }  

      return true; 
    } catch (error) {  
      setAlertMessage("Error checking for duplicates.");  
      setAlertSeverity("error");  
      return false;  
    }  
  };  

  const handleRegister = async (e) => {  
    e.preventDefault();  
    const isValid = await handleCheckDuplicate();  
    if (!isValid) return;  

    try {  
      const response = await axios.post(  
        "https://66b9d7affa763ff550f9c4ee.mockapi.io/user",  
        {  
          username: registerUsername,  
          email: registerEmail,  
          password: registerPassword,  
          phone: registerNumber,  
        }  
      );  
      console.log(response.data);  
      setAlertMessage("Here is a gentle confirmation that your action was successful.");  
      setAlertSeverity("success");  
    } catch (error) {  
      setAlertMessage("This is an error Alert.");  
      setAlertSeverity("error");  
    }  
  };  

  return (  
    <div className="w-full h-screen flex flex-col justify-center items-center">  
      <div className="w-11/12 md:w-2/3 lg:w-1/3 h-1/2 shadow-xl flex flex-col rounded-xl">  
        <div className="bg-white py-14 p-5 rounded-b-xl flex-grow">  
    <h2 className="text-2xl font-bold text-center text-gray-700">Register</h2> 
          {alertMessage && (  
            <Alert icon={<CheckIcon fontSize="inherit" />} severity={alertSeverity}>  
              {alertMessage}  
            </Alert>  
          )}  
          <form onSubmit={handleRegister}>  
            <input  
              type="text"  
              placeholder="Username"  
              className="w-full p-2 border border-gray-300 rounded mb-4"  
              required  
              value={registerUsername}  
              onChange={(e) => setRegisterUsername(e.target.value)}  
            />  
            <input  
              type="email"  
              placeholder="Email"  
              className="w-full p-2 border border-gray-300 rounded mb-4"  
              required  
              value={registerEmail}  
              onChange={(e) => setRegisterEmail(e.target.value)}  
            />  
            <input  
              type="password"  
              placeholder="Password"  
              className="w-full p-2 border border-gray-300 rounded mb-4"  
              required  
              value={registerPassword}  
              onChange={(e) => setRegisterPassword(e.target.value)}  
            />  
            <input  
              type="number"  
              placeholder="Phone"  
              className="w-full p-2 border border-gray-300 rounded mb-4"  
              required  
              value={registerNumber}  
              onChange={(e) => setRegisterNumber(e.target.value)}  
            />  
            <button className="w-full bg-green-500 text-white p-2 rounded">  
              Register  
            </button> 
            <Link className='flex justify-center mt-5 underline font-bold text-blue-600 text-2xl' href="/">  
        click for Login  
    </Link>           
    </form>  
        </div>  
      </div>  
    </div>  
  );  
}  

export default Registration;