import React, { useEffect } from 'react'
import {Typography } from "@mui/material";
import KpiCards from './KpiCards';
import Charts from '../components/Charts';
import useStockCall from '../hooks/useStockCall';

const Home = () => {
  const { getPurSales } = useStockCall();
  useEffect(() => {
    // getFirms();
    getPurSales();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Typography color="error" variant="h4" align="center" mb={3}>
        Dashboard
      </Typography>
      <KpiCards/>
      <Charts/>
    </div>
  )
}

export default Home

// react-query
// rtk-query
// useSwr