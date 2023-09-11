import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import useStockCall from "../../hooks/useStockCall";
import InputMask from "react-input-mask";
import { flexColumn, modalStyle } from "../../styles/globalStyle";

//! aynı yapıyı diğer modallarda da kullancağımız için globalStyle.jsx dosyasına taşıdık oradan export edip her yerde kullanabiliyoruz.
// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 400,
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
//   p: 4,
// };

export default function FirmModal({ open, handleClose, info, setInfo }) {
  //   const [open, setOpen] = React.useState(false);
  //   const handleOpen = () => setOpen(true);
  //   const handleClose = () => setOpen(false);
  //   const [info, setInfo] = React.useState({
  //     name: "",
  //     phone: "",
  //     image: "",
  //     address: "",
  //   });
  //! statelerimizi lifting state up yaparak bir üst componente taşıdık ki oradan gerekli olan yerlere dağıtım yapabilelim. Bizim örneğimizde FirmModal componenti hem yeni firma eklemek için hemde var olan firmayı update edebilmek için kullanılıyor. Bu nedenle modalı açabilmek ve update işleminde içini doldurabilmek için Firms componentine statelerimizi taşımış olduk oradan da FirmCard componentine props yoluyla göndermiş olduk.
  const { postStockData, putStockData } = useStockCall();

  const handleChange = e => {
    setInfo({ ...info, [e.target.name]: e.target.value }); //! inputların name attributelarındaki isimler ile info statetimin içindeki keyler aynı olduğu için bu şekilde tek bir fonksiyonla inputdaki verilerimi state e aktarabildim.
  };

  console.log("info", info);

  const handleSubmit = e => {
    e.preventDefault();
    console.log(info);
    if (info.id) {
      putStockData("firms", info); //! update işleminde info dolu geldiği için içerisinde id bilgiside yer alıyor. Biz bu id üzerinden sorgulama yaparak id varsa yapacağın işlem put işlemi id yoksa yapacağın işlem post işlemi diye belirtmiş olduk.
    } else {
      postStockData("firms", info);
    }
    handleClose(); //? submit işleminden sonra modalın kapanması için burada handleClose fonksiyonunu çağırıyoruz.
    // setInfo({
    //   name: "",
    //   phone: "",
    //   image: "",
    //   address: "",
    // });//! setInfo yu handleclose içerisine taşıyarak tekrardan kurtulmuş olduk.
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={() => {
          handleClose();
          //   setInfo({
          //     name: "",
          //     phone: "",
          //     image: "",
          //     address: "",
          //   });
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={modalStyle}>
          <Box
            sx={flexColumn}
            component="form"
            onSubmit={handleSubmit}>
            <TextField
              label="Firm Name"
              name="name"
              id="name"
              type="text"
              variant="outlined"
              value={info.name}
              onChange={handleChange}
              required
            />
            <TextField
              label="Address"
              name="address"
              id="address"
              type="text"
              variant="outlined"
              value={info.address}
              onChange={handleChange}
              required
            />
            <InputMask
              mask="+4\9 99 999 99"
              maskChar="_"
              value={info.phone}
              onChange={handleChange}
              name="phone"
              id="phone"
              type="tel"
              required>
              {inputProps => (
                <TextField {...inputProps} label="Phone" variant="outlined" />
              )}
            </InputMask>
            {/* <TextField
              label="Phone"
              name="phone"
              id="phone"
              type="tel"
              variant="outlined"
              value={info.phone}
              onChange={handleChange}
              required
            /> */}
            <TextField
              label="Image"
              name="image"
              id="image"
              type="url"
              variant="outlined"
              value={info.image}
              onChange={handleChange}
              required
            />
            <Button variant="contained" type="submit">
              {info.id ? "Update Firm" : "Create Firm"}
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
