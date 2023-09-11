import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { btnStyle } from "../styles/globalStyle";
import useStockCall from "../hooks/useStockCall";

// const rows = [
//   { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
//   { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
//   { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
//   { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
//   { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
//   { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
//   { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
//   { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
//   { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
// ];

export default function ProductTable() {
  const { products } = useSelector(state => state.stock);
  const { deleteStockData } = useStockCall();

  const columns = [
    {
      field: "id",
      headerName: "ID",
      minWidth: 40,
      maxWidth: 70,
      headerAlign: "center",
      align: "center",
      flex: 1,
    },
    {
      field: "category",
      headerName: "Category",
      minWidth: 150,
      headerAlign: "center",
      align: "center",
      flex: 2,
    },
    {
      field: "brand",
      headerName: "Brand",
      minWidth: 150,
      headerAlign: "center",
      align: "center",
      flex: 2,
    },
    {
      field: "name",
      headerName: "Name",
      minWidth: 150,
      headerAlign: "center",
      align: "center",
      flex: 2,
    },
    {
      field: "stock",
      headerName: "Stock",
      type: "number",
      minWidth: 110,
      headerAlign: "center",
      align: "center",
      flex: 0.8,
    },
    {
      field: "actions",
      headerAlign: "center",
      headerName: "Actions",
      align: "center",
      // description: "This column has a value getter and is not sortable.",
      sortable: false, //! o sütunda sort işlemlerini kapat
      minWidth: 40,
      flex:1,
      renderCell: params => (
        //   console.log(params)
        <DeleteOutlineIcon
          onClick={() => deleteStockData("products", params.id)}
          sx={btnStyle}
        />
      ),
    },
  ];

  return (
    <Box sx={{ width: "100%",marginTop:'1rem' }}>
      <DataGrid
        rows={products}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        slots={{
          toolbar: GridToolbar,
        }}
        autoHeight
        pageSizeOptions={[5, 10, 15, 25, 50]}
        // checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
