import Container from "@mui/material/Container";
import { Box, Typography } from "@mui/material";
import { ProfitTremorCard, PurchasesTremorCard, SalesTremorCard } from "../components/TremorCard";
import TremorChart from "../components/TremorChart";
import { useSelector } from "react-redux";

const Home2 = () => {
  const {sales,purchases} = useSelector(state=>state.stock)
  return (
  <Container maxWidth="xl">
      <Typography color="error" variant="h4" mb={3}>
      Dashboard
      </Typography>
      <Box sx={{ width:"100%",display:"flex", gap:2, flexWrap:"wrap", marginBottom:"1rem"}} >
        <Box flex="1"><SalesTremorCard sales={sales} /></Box>
        <Box flex="1"><ProfitTremorCard sales={sales} purchases={purchases}/></Box>
        <Box flex="1"><PurchasesTremorCard purchases={purchases}/></Box>
      </Box>
      <TremorChart sales={sales} purchases={purchases}/>
    </Container>
)}

export default Home2
