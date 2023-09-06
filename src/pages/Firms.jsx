
import { useEffect } from "react";
import useStockCall from "../hooks/useStockCall";

const Firms = () => {
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
const {getStockData} =useStockCall()
  useEffect(() => {
    getStockData("firms");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // CI=false

  return <div>Firms</div>;
};

export default Firms;