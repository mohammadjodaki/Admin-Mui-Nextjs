"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Stack, Alert } from "@mui/material";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';


const style = {
  position: 'absolute',
  top: '15%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 450,
  bgcolor: '#003366',
  boxShadow: 24,
  p: 4,
};

function Page() {
  const [email, setEmail] = useState("mohammadjudaki@gmail.com");
  const [password, setPassword] = useState("m13681367J");
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch(
      "https://66b9d7affa763ff550f9c4ee.mockapi.io/user",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const users = await response.json();

    const userExists = users.some(
      (user) => user.email === email && user.password === password
    );

    if (userExists) {
      router.push("/Dashboard");
      setErrorMessage("");
    } else {
      setErrorMessage("Invalid email or password");
    }
  };
  useEffect (() =>{
    handleOpen()
  } ,[])

  return (
    <>
      <div className="flex items-center justify-center h-screen bg-gray-100">
      <Modal className='transition-transform scale-x-100' 
        open={open}
        onClose={handleClose}

      >
        <Box sx={style}>
          <div className="w-full">
        <button onClick={handleClose} className="w-full -mt-5 flex justify-end text-white"><CloseIcon/></button> 
        </div>
          <Typography className="text-white" variant="h6" component="h2">
          You can create your own account or to inter admin panel you can use defult information ! 
          </Typography>
        </Box>
      </Modal>
        <div className="bg-white p-8 rounded-lg shadow-lg w-[450px]">
          <div className="w-96 h-12 mx-auto">
            {errorMessage && (
              <Stack sx={{ width: "100%" }} spacing={10}>
                <Alert severity="error">{errorMessage}</Alert>
              </Stack>
            )}
          </div>
          <h2 className="text-2xl mt-5 font-bold text-center text-gray-700">
            Login to Admin Panel
          </h2>
          <form className="mt-6" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-600" htmlFor="email">
                Email:
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600" htmlFor="password">
                Password:
              </label>
              <input
                type="password"
                id="password"
                className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full h-14 flex pt-3 items-center justify-center text-3xl mt-10 text-white bg-blue-500 rounded hover:bg-blue-600 transition duration-300"
            >
              Login
            </button>
            <Link
              className="flex justify-center mt-5 underline font-bold text-blue-600 text-2xl"
              href="/Register"
            >
              click for Register
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}

export default Page;
