
import { useEffect, useState } from "react";
import useStockCall from "../hooks/useStockCall";
import Container from "@mui/material/Container"
import { Button, Dialog, Grid, Modal, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import FirmCard from "../components/FirmCard";
import BasicModal from "../components/Modals";


const Firms = () => {

  const { getStockData} = useStockCall();
  const {firms} = useSelector(state=> state.stock)
  // const [open, setOpen] = useState(false)

  useEffect(() => {
    // getFirms();
    getStockData("firms");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container maxWidth="xl">
      <Typography color="error" variant="h4" mb={3}>
        Firms
      </Typography>
      <BasicModal/>
      
      <Grid container alignItems='center' justifyContent='center' spacing={3} mt={3}>
        {firms?.map(firm => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={firm.id}>
           <FirmCard firm={firm} />
          </Grid>
        ))}
      </Grid>
      
          
    </Container>
       
  );
};

export default Firms;
