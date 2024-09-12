import React, { useEffect, useState } from 'react';  
import Box from '@mui/material/Box';  
import { DataGrid } from '@mui/x-data-grid';  
import EditIcon from '@mui/icons-material/Edit';  
import DeleteIcon from '@mui/icons-material/Delete';  
import Link from "next/link";  

const columns = (onUserDelete) => {  
  return [  
    {   
      field: 'id',  
      width: '200',  
      headerName: 'ID',  
      headerAlign: 'center',  
      align: 'center'   
    },  
    {  
      field: 'username',  
      headerName: 'Username',  
      width: '260',  
      headerAlign: 'center',  
      align: 'center',  
    },  
    {  
      field: 'email',  
      headerName: 'Email',  
      width: '300',  
      headerAlign: 'center',  
      align: 'center',  
    },  
    {  
      field: 'phone',  
      headerName: 'Phone',  
      width: '300',  
      type: 'number',  
      headerAlign: 'center',  
      align: 'center',  
    },  
    {  
      field: 'action',  
      headerName: 'Action',  
      width: '300',  
      headerAlign: 'center',  
      align: 'center',  
      renderCell: (params) => {  
        return (  
          <div className='flex justify-evenly items-center'>  
            <Link href={`/user/${params.id}`}>  
              <button style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: 0 }}>  
                <EditIcon className='text-blue-500 cursor-pointer' />  
              </button>  
            </Link>  
            <DeleteIcon className='text-red-500 cursor-pointer' onClick={() => onUserDelete(params.id)} />  
          </div>   
        )  
      }  
    },  
  ];  
};  

export default function DataGridDemo() {  
  const [rows, setRows] = useState([]);  

  const userDelete = (Id) => {  
    setRows(rows.filter(user => user.id !== Id));  
  };  

  useEffect(() => {  
    fetch('https://66b9d7affa763ff550f9c4ee.mockapi.io/user')  
      .then(response => response.json())  
      .then(data => setRows(data))  
      .catch(error => console.error('Error fetching data:', error));  
  }, []);  

  return (  
    <Box sx={{ height: 475, width: '100%' }}>  
      <DataGrid  
        rows={rows}  
        columns={columns(userDelete)} 
        initialState={{  
          pagination: {  
            paginationModel: {  
              pageSize: 7,  
            },  
          },  
        }}  
        pageSizeOptions={[5]}   
        checkboxSelection   
        disableRowSelectionOnClick   
      />  
    </Box>  
  );  
}