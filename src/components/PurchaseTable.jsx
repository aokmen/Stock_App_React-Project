import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid,GridToolbar } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import useStockCall from '../hooks/useStockCall';
import { btnStyle } from '../styles/globalStyle';




export default function PurchaseTable() {
    const {purchases} = useSelector(state=>state.stock)
    const { deleteStockData } = useStockCall();
    const columns = [
        { field: 'id', 
        headerName: 'ID',
         width: 50 },
        {
          field: 'createds',
          headerName: 'Date',
          width: 110,
        },
        {
          field: 'firm',
          headerName: 'Firm',
          width: 110,
        },
        {
          field: 'brand',
          headerName: 'Brand',
          width: 110,
        },
        {
          field: 'product',
          headerName: 'Product',
          width: 90,
        },
        {
          field: 'quantity',
          headerName: 'Quantity',
          width: 40,
        },
       
        {
          field: 'price',
          headerName: 'Price',
          width: 80,
        },
        {
          field: 'price_total',
          headerName: 'Amount',
          width: 80,
        },
        {
          field: 'action',
          headerName: 'Action',
          width: 70,
          headerAlign: "center",
          align: "center",
          sortable:false,
          renderCell: params => (
            <DeleteOutlineIcon
            onClick={()=>deleteStockData("purchases",params.id)} sx={btnStyle}
            />
          )
        },
        
      ];

  return (
    <Box sx={{  width: '100%' }}>
      <DataGrid
        rows={purchases}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[10]}
        checkboxSelection
        disableRowSelectionOnClick
        slots={{ toolbar: GridToolbar }}
      />
    </Box>
  );
}