import React, { useEffect, useState } from 'react';  
import Box from '@mui/material/Box';  
import { DataGrid } from '@mui/x-data-grid';  
import EditIcon from '@mui/icons-material/Edit';  
import DeleteIcon from '@mui/icons-material/Delete';  
import Link from "next/link";  

const columns = (onProductDelete) => {  
  return [  
    {   
      field: 'id',  
      width: '200',  
      headerName: 'ID',  
      headerAlign: 'center',  
      align: 'center'   
    },  
    {  
      field: 'title',  
      headerName: 'Title',  
      width: '360',  
      headerAlign: 'center',  
      align: 'center',  
    },  
    {  
      field: 'price',  
      headerName: 'Price',  
      width: '300',  
      headerAlign: 'center',  
      align: 'center',  
    },  
    {  
      field: 'image',  
      headerName: 'Image',  
      width: '200',  
      headerAlign: 'center',  
      align: 'center',  
      renderCell:(params) =>(
        <img 
        src={params.value} 
        alt='Product'
        className='w-10 h-10 mx-auto mt-2'/>
      )
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
            <Link href={`/product/${params.id}`}>  
              <button style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: 0 }}>  
                <EditIcon className='text-blue-500 cursor-pointer' />  
              </button>  
            </Link>  
            <DeleteIcon className='text-red-500 cursor-pointer' onClick={() => onProductDelete(params.id)} />  
          </div>   
        )  
      }  
    },  
  ];  
};  

export default function DataGridDemo() {  
  const [rows, setRows] = useState([]);  

  const productDelete = (Id) => {  
    setRows(rows.filter(product => product.id !== Id));  
  };  

  useEffect(() => {  
    fetch('https://fakestoreapi.com/products')  
      .then(response => response.json())  
      .then(data => setRows(data))  
      .catch(error => console.error('Error fetching data:', error));  
  }, []);  

  return (  
    <Box sx={{ height: 475, width: '100%' }}> 
      <DataGrid  
        rows={rows}  
        columns={columns(productDelete)} 
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