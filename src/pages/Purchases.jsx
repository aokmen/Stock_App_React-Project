// import { useDispatch, useSelector } from "react-redux";
// import { fetchFail, fetchStart, getSuccess } from "../features/stockSlice";
// import axios from "axios";
import { useEffect, useState } from "react";
import useStockCall from "../hooks/useStockCall";
import Container from "@mui/material/Container";
import { Button,Typography } from "@mui/material";
import PurchaseModal from "../components/modals/PurchaseModal";
import PurchaseTable from "../components/PurchaseTable";

const Purchases = () => {
 
  const { getPurchaseData } = useStockCall();

  //*Modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setInfo({
      firm_id: "",
      brand_id: "",
      product_id: "",
      quantity: "",
      price: "",
    });
  }
  const [info, setInfo] = useState({
    firm_id: "",
    brand_id: "",
    product_id: "",
    quantity: "",
    price: "",
  });

  useEffect(() => {
    // getFirms();
    // getStockData("firms");
    // getStockData("brands");
    // getStockData("products");
    // getStockData("purchases");
    // eslint-disable-next-line react-hooks/exhaustive-deps
    getPurchaseData() //! promise.all()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container maxWidth="md">
      <Typography color="error" variant="h4" mb={3}>
      Purchases
      </Typography>
      <Button variant="contained" onClick={handleOpen}>
        New Purchase
      </Button>
      <PurchaseModal
        open={open}
        handleClose={handleClose}
        info={info}
        setInfo={setInfo}
      />
      <PurchaseTable/>
    </Container>
  );
};

export default Purchases;

//* Lifting State Up
