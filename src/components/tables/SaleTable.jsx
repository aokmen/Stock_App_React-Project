import React from "react";
import useStockCall from "../../hooks/useStockCall";
import { useSelector } from "react-redux";
import { GridActionsCellItem} from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { btnStyle } from "../../styles/globalStyle";
import DataTable from "./DataTable";

const SaleTable = ({ setOpen, setInfo }) => {
  const { deleteStockData } = useStockCall();
  const { sales } = useSelector(state => state.stock);

  const columns = [
    {
      field: "createds",
      headerName: "Date",
      minWidth: 150,
      headerAlign: "center",
      align: "center",
    },

    {
      field: "brand",
      headerName: "Brand",
      flex: 1,
      minWidth: 100,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "product",
      headerName: "Product",
      flex: 1,
      minWidth: 100,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "quantity",
      headerName: "Quantity",
      minWidth: 50,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "price",
      headerName: "Price",
      minWidth: 50,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "price_total",
      headerName: "Amount",
      minWidth: 50,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "actions",
      headerName: "Actions",
      minWidth: 40,
      headerAlign: "center",
      align: "center",
      renderCell: ({ id, row: { brand_id, product_id, quantity, price } }) => {
        return [
          <GridActionsCellItem
            key={"edit"}
            icon={<EditIcon />}
            label="Edit"
            onClick={() => {
              setOpen(true);
              setInfo({ id, brand_id, product_id, quantity, price });
            }}
            sx={btnStyle}
          />,
          <GridActionsCellItem
            key={"delete"}
            icon={<DeleteIcon />}
            label="Delete"
            onClick={() => deleteStockData("sales", id)}
            sx={btnStyle}
          />,
        ];
      },
    },
  ];
  return <DataTable rows={sales} columns={columns} />;
};

export default SaleTable;
