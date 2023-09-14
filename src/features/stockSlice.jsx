import { createSlice } from "@reduxjs/toolkit";

const stockSlice = createSlice({
  name: "stock",

  initialState: {
    loading: false,
    error: false,
    products: [],
    sales: [],
    purchases: [],
    brands: [],
    firms: [],
    categories: [],
    //! statelerimizin isimleri ile endpointlerimizin isimlerini aynı verdik. Bunun sebebi tek bir reducerla tüm stateleri dinamik bir şekilde doldurabilelim.
  },
  reducers: {
    fetchStart: state => {
      state.loading = true;
      state.error = false;
    },
    // firmsSuccess: (state, { payload }) => {
    //   state.loading = false;
    //   state.firms = payload;
    // },
    // brandSuccess: (state, { payload }) => {
    //   state.loading = false;
    //   state.brands = payload;
    // },
    //! DRY (Dont Repeat Yourself)
    getSuccess: (state, { payload: { data, url } }) => {
      // url: firms, url:brands, url: products
      state.loading = false;
      state[url] = data; // state["firms"], state["brands"] anlamlarına gelerek tek bir reducerla tüm stateleri doldurabilmiş olduk.
    },
    getProCatBrandSuccess:(state,{payload})=>{
      state.loading = false;
      state.products=payload[0];
      state.brands=payload[1];
      state.categories=payload[2];
    },
    getPurchaseSuccess:(state,{payload})=>{
      state.loading = false;
      state.firms=payload[0];
      state.brands=payload[1];
      state.products=payload[2];
      state.purchases=payload[3];
    },
    getSaleSuccess:(state,{payload})=>{
      state.loading = false;
      state.sales=payload[0];
      state.brands=payload[1];
      state.products=payload[2];
    },
    getPurSalesSuccess:(state,{payload})=>{
      state.loading = false;
      state.purchases=payload[0];
      state.sales=payload[1];

    },
    fetchFail: state => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  fetchStart,
  getSuccess,
  fetchFail,
  getProCatBrandSuccess,
  getPurchaseSuccess,
  getSaleSuccess,
  getPurSalesSuccess
} = stockSlice.actions;
export default stockSlice.reducer;

// async-thunk yerine manuel dispatclerle yapıyoruz. extra reducerlarla yapmadan da bu şekilde yapabiliyoruz. İki yönteminde avantajı ve dezavantajı var.
