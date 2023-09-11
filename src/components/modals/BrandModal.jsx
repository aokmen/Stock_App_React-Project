import React from "react";
import { flexColumn, modalStyle } from "../../styles/globalStyle";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import useStockCall from "../../hooks/useStockCall";
import { Formik, Form } from "formik";
// import { object, string } from "yup";//* destructure ederek yup içerisinden ilgili metotları aldık.


// export const brandSchema = object({
//   name: string()
//     .min(1, "Too short!")
//     .max(30, "Too Long!")
//     .required("Name zorunludur"),
//   image: string().min(1, "Too short!").required(""),
// });//? eğer validasyon yapmak istemezsek bunlara ihtiyacımız yok.

export default function BrandModal({ open, handleClose, info, setInfo }) {
  const { postStockData, putStockData } = useStockCall();
  const handleSubmit = values => {//! handleSubmit diye bir fonksiyon tanımlayıp formike bu fonksiyıonu verdik. Formikten gelen valuesu böylelikle yakaladık.
    if (values.id) {
      //! update yaptığımızda yine infodan dolayı values içerisinde artık id bilgisi olduğu için ona göre burada da kontrol yaptık
      putStockData("brands", values);
    } else {
      postStockData("brands", values);
    }
    handleClose();
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
      <Box sx={modalStyle}>
        {/* stillendirme özelliklerini birkaç modal da kullandığımız için aynı özellikleri tekrar tekrar yazmak yerine ortak bir alana yani globalsStyle içerisine taşımış olduk. */}
        <Formik
          initialValues={info} //!nitialValuesa üst componentten gelen info stateini verdik. İnputlarımızdakl name attributeları ile Yup daki keyleri aynı tanımladık.
          // validationSchema={brandSchema}//* eğer validasyon yapmak istemezsek bunlara ihtiyacımız yok.
          onSubmit={handleSubmit}>
          {({
            values,
            handleChange,
            //  touched,
            //  errors,
            // handleBlur,
          }) => (
            <Form>
              <Box sx={flexColumn}>
                <TextField
                  label="Brand Name"
                  name="name"
                  id="name"
                  type="text"
                  variant="outlined"
                  value={values?.name}
                  onChange={handleChange}
                  // onBlur={handleBlur}//* eğer validasyon yapmak istemezsek ihtiyacımız yok.
                  // helperText={touched.name && errors.name}//* eğer validasyon yapmak istemezsek ihtiyacımız yok.
                  // error={touched.name && Boolean(errors.name)}//* eğer validasyon yapmak istemezsek ihtiyacımız yok.
                />

                <TextField
                  label="Image Url"
                  name="image"
                  id="image"
                  type="url"
                  variant="outlined"
                  value={values?.image}
                  onChange={handleChange}
                  // onBlur={handleBlur}//* eğer validasyon yapmak istemezsek ihtiyacımız yok.
                  // helperText={touched.name && errors.name} //* eğer validasyon yapmak istemezsek ihtiyacımız yok.
                  // error={touched.name && Boolean(errors.name)}//* eğer validasyon yapmak istemezsek ihtiyacımız yok.
                />

                <Button type="submit" variant="contained" size="large">
                  {info.id ? "Update Brand" : "Submit Brand"}
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </Modal>
  );
}

//! Formiksiz versiyon

// import React from "react";
// import { flexColumn, modalStyle } from "../../styles/globalStyle";
// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import Modal from "@mui/material/Modal";
// import TextField from "@mui/material/TextField";
// import useStockCall from "../../hooks/useStockCall";

// export default function BrandModal({ open, handleClose, info, setInfo }) {
//   const { postStockData, putStockData } = useStockCall();

//   const handleChange = e => {
//     e.preventDefault();
//     const { name, value } = e.target;
//     setInfo({ ...info, [name]: value });
//   };
//   const handleSubmit = e => {
//     e.preventDefault();

//     if (info.id) {
//       putStockData("brands", info);
//     } else {
//       postStockData("brands", info);
//     }
//     handleClose();
//   };

//   return (
//     <Modal
//       open={open}
//       onClose={handleClose}
//       aria-labelledby="modal-modal-title"
//       aria-describedby="modal-modal-description">
//       <Box sx={modalStyle}>
//         {/* stillendirme özelliklerini birkaç modal da kullandığımız için aynı özellikleri tekrar tekrar yazmak yerine ortak bir alana yani globalsStyle içerisine taşımış olduk. */}
//         <Box sx={flexColumn} component={"form"} onSubmit={handleSubmit}>
//           <TextField
//             label="Brand Name"
//             name="name"
//             id="name"
//             type="text"
//             variant="outlined"
//             value={info?.name}
//             onChange={handleChange}
//             required
//           />

//           <TextField
//             label="Image Url"
//             name="image"
//             id="image"
//             type="url"
//             variant="outlined"
//             value={info?.image}
//             onChange={handleChange}
//           />

//           <Button type="submit" variant="contained" size="large">
//             {info.id ? "Update Brand" : "Submit Brand"}
//           </Button>
//         </Box>
//       </Box>
//     </Modal>
//   );
// }
