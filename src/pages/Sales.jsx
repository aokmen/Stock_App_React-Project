// import { useDispatch, useSelector } from "react-redux";
// import { fetchFail, fetchStart, getSuccess } from "../features/stockSlice";
// import axios from "axios";
import { useEffect, useState } from "react";
import useStockCall from "../hooks/useStockCall";
import Container from "@mui/material/Container";
import { Button,Typography } from "@mui/material";
import SaleTable from "../components/tables/SaleTable";
import SaleModal from "../components/modals/SaleModal";

const Sales = () => {
 
  const { getSaleData } = useStockCall();

  //*Modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setInfo({
      brand_id: "",
      product_id: "",
      quantity: "",
      price: "",
    });
  }
  const [info, setInfo] = useState({
    brand_id: "",
    product_id: "",
    quantity: "",
    price: "",
  });

  useEffect(() => {
    // getFirms();
    // getStockData("sales");
    // getStockData("brands");
    // getStockData("products");
    // eslint-disable-next-line react-hooks/exhaustive-deps
    getSaleData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container maxWidth="md">
      <Typography color="error" variant="h4" mb={3}>
      Sales
      </Typography>
      <Button variant="contained" onClick={handleOpen}>
        New Sale
      </Button>
      <SaleModal
        open={open}
        handleClose={handleClose}
        info={info}
        setInfo={setInfo}
      />
      <SaleTable/>
    </Container>
  );
};

export default Sales;

//* Lifting State Up
