
import { useEffect } from "react";
import useStockCall from "../hooks/useStockCall";

const Brands = () => {

const {getStockData} =useStockCall()
  useEffect(() => {
    // getBrands();
    getStockData("brands")
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // CI=false

  return <div>Brands</div>;
};

export default Brands;