// import { useDispatch, useSelector } from "react-redux";
// import { fetchFail, fetchStart, getSuccess } from "../features/stockSlice";
// import axios from "axios";
import { useEffect } from "react";
import useStockCall from "../hooks/useStockCall";
import Container from "@mui/material/Container"
import { Button, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import FirmCard from "../components/FirmCard";

const Firms = () => {
  //? firms verileri bana birden fazla yerde lazım olduğu için fonksiyonu burada değil de her yerden erişebileceğim bir noktada tanımlıyorum. İçerisinde react hookları lazım olduğu için de bu ortak nokta en iyi custom hook olmuş oluyor.
  // const dispatch = useDispatch();
  // const { token } = useSelector(state => state.auth);

  // const BASE_URL = process.env.REACT_APP_BASE_URL;

  // const getFirms = async () => {
  //   dispatch(fetchStart());
  //   try {
  //     const url = "firms";
  //     const { data } = await axios(`${BASE_URL}stock/${url}/`, {
  //       headers: {
  //         Authorization: `Token ${token}`,
  //       },
  //     });
  //     console.log(data);
  //     // dispatch(getSuccess({data, url:"firms"}))
  //     dispatch(getSuccess({ data, url })); // {data:data,url:url}
  //   } catch (error) {
  //     dispatch(fetchFail());
  //   }
  // };

  // const { getFirms } = useStockCall();
  const { getStockData} = useStockCall();
  const {firms} = useSelector(state=> state.stock)



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
      <Button variant="contained">New Firm</Button>
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
