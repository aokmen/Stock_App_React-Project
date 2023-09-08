
import { useEffect } from "react";
import useStockCall from "../hooks/useStockCall";
import Container from "@mui/material/Container"
import { Button, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import BrandCard from "../components/BrandCard";
import BasicModal from "../components/ModalsFirm";
import BasicModalBrand from "../components/ModalsBrand";

const Brands = () => {
 
  const { getStockData} = useStockCall();
  const {brands} = useSelector(state=> state.stock)



  useEffect(() => {
    // getFirms();
    getStockData("brands");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container maxWidth="xl">
      <Typography color="error" variant="h4" mb={3}>
        Brands
      </Typography>
      <BasicModalBrand/>
      <Grid container alignItems='center' justifyContent='center' spacing={3} mt={3}>
        {brands?.map(brand => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={brand.id}>
           <BrandCard brand={brand} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Brands;