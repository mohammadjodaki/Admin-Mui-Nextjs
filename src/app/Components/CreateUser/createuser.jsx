import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { DataGrid } from '@mui/x-data-grid'; 
import React, { useEffect, useState } from 'react';  

const CreateUser = () => {
  const [rows, setRows] = useState([]); 

  const columns = () => {
    return [  
      { field: 'id', width: '100', headerName: 'ID', headerAlign: 'center', align: 'center' },  
      { field: 'username', headerName: 'Username', width: '200', headerAlign: 'center', align: 'center' },  
      { field: 'email', headerName: 'Email', width: '300', headerAlign: 'center', align: 'center' },  
      { field: 'phone', headerName: 'Phone', width: '250', type: 'number', headerAlign: 'center', align: 'center' },  
    ];  
  };  

  useEffect(() => {  
    fetch('https://66b9d7affa763ff550f9c4ee.mockapi.io/user')  
      .then(response => response.json())  
      .then(data => setRows(data))  
      .catch(error => console.error('Error fetching data:', error));  
  }, []);  

  const [username , setUsername] = useState('')
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')
  const [phone , setPhone] = useState('')
  const [image , setImage] = useState('')

  const registerHandler = event => {
    event.preventDefault();

    if (!username || !email || !password || !phone || !image) {
      alert('Please fill in all fields')
      return
      }

    let usersave = {
        username: username,
        email: email,
        password: password,
        phone: phone,
        image: image
    }

    const userExists = rows.some(row => row.username === username || row.email === email);
    if (userExists) {
        alert('User with this username or email already exists!');
        return; 
    }

    fetch('https://66b9d7affa763ff550f9c4ee.mockapi.io/user/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json' 
        },
        body: JSON.stringify(usersave) 
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Network response was not ok.');
    })
    .then(data => {
      setRows(prevRows => [...prevRows, data]); 
      
      setUsername('');
      setEmail('');
      setPassword('');
      setPhone('');
      setImage('');
    })
    .catch(error => console.error('Error creating user:', error));
  }

  return (  
    <>  
      <h1 className="text-5xl text-center font-bold mt-5">Create User</h1>  
      <form className="w-full flex flex-wrap md:flex-nowrap gap-5 justify-between" onSubmit={registerHandler}>
        <div className="w-1/3 h-[520px] mt-8 bg-white rounded-xl shadow-lg">  
          <Box className='flex flex-col w-3/4 mx-auto gap-5 mt-10'>  
            <TextField id="outlined-basic" label="username" variant="outlined" value={username} onChange={(event) =>setUsername(event.target.value)} />  
            <TextField id="outlined-basic" label="email" variant="outlined" value={email} onChange={(event) =>setEmail(event.target.value)}/>  
            <TextField id="outlined-basic" label="password" variant="outlined" value={password} onChange={(event) =>setPassword(event.target.value)}/>  
            <TextField id="outlined-basic" label="phone" variant="outlined" value={phone} onChange={(event) =>setPhone(event.target.value)}/>  
            <TextField id="outlined-basic" label="image" variant="outlined" value={image} onChange={(event) =>setImage(event.target.value)}/>  
          </Box>  
          <Stack className="w-1/2 mx-auto mt-10">  
            <Button className="font-bold text-xl p-2" variant="contained" color="success" type="submit">Add User</Button>  
          </Stack>  
        </div>  
        <div className="w-2/3 h-[520px] mt-8 bg-white rounded-xl shadow-lg">  
          <Box sx={{ height: 520, width: '100%' }}>  
            <DataGrid  
              rows={rows}  
              columns={columns()}  
              initialState={{  
                pagination: {  
                  paginationModel: { pageSize: 7 },  
                },  
              }}  
              pageSizeOptions={[5]}   
              checkboxSelection   
              disableRowSelectionOnClick   
            />  
          </Box>  
        </div>  
      </form>  
    </>  
  );  
};

export default CreateUser;  