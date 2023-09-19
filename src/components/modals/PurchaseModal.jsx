import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import useStockCall from "../../hooks/useStockCall";
import { flexColumn, modalStyle } from "../../styles/globalStyle";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useSelector } from "react-redux";

export default function PurchaseModal({ open, handleClose, info, setInfo }) {

  const { postStockData } = useStockCall();
const {firms, brands, products} = useSelector(state=>state.stock)
  const handleChange = e => {
   if (e.target.name === "quantity") {
    setInfo({ ...info, [e.target.name]: Number(e.target.value)}); 
   } else
   setInfo({ ...info, [e.target.name]: e.target.value}); 
  };


  const handleSubmit = e => {
    e.preventDefault();
    
       postStockData("purchases", info);
    handleClose(); //? submit işleminden sonra modalın kapanması için burada handleClose fonksiyonunu çağırıyoruz.

  };

  return (
    <div>
      <Modal
        open={open}
        onClose={() => {
          handleClose();

        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={modalStyle}>
          <Box
            sx={flexColumn}
            component="form"
            onSubmit={handleSubmit}>
           <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Firm</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="firm_id"
              value={info.firm_id}
              label="Firm"
              onChange={handleChange}
            >
             {firms?.map(item=>(
               <MenuItem value={item.id} key={item.id}>{item.name}</MenuItem>
             ))}
            
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Brand</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="brand_id"
              value={info.brand_id}
              label="Brand"
              onChange={handleChange}
            > 
            {brands?.map(item=>(
              <MenuItem value={item.id} key={item.id}>{item.name}</MenuItem>
            ))}
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Product</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="product_id"
              value={info.product_id}
              label="Product"
              onChange={handleChange}
            >
               {products?.map(item=>(
               <MenuItem value={item.id} key={item.id}>{item.name}</MenuItem>
             ))}
            </Select>
          </FormControl>
       
     

          <TextField
              id="quantity"
              name="quantity"
              label="Quantity"
              type="number"
              value={info.quantity}
              onChange={handleChange}
              required
            />
            <TextField
              id="price"
              label="Price"
              type="number"
              name="price"
              value={info.price}
              variant="outlined"
              onChange={handleChange}
              required
            />

            
            <Button variant="contained" type="submit">
              Create Purchase
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
