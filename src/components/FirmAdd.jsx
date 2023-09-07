import { Box, Button, TextField } from '@mui/material'
import { Form, Formik } from 'formik'
import React from 'react'

import { number,object, string } from 'yup'
import useStockCall from '../hooks/useStockCall'

export const firmSchema = object({

    name: string().required(),
    address: string().required(),
    phone: number().required(),
    image: string().required(), 
})

const FirmAdd = () => {
    const {postFirmData} = useStockCall()
  return (
    <div>
        <Formik
        initialValues={{
            name:"",
            address:"",
            phone:"",
            image:"",
        }}
        validationSchema={firmSchema}
        onSubmit={(values,actions) => {
             postFirmData(values);
             actions.resetForm();
             actions.setSubmitting(false);
            console.log(values);
          }}
        >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
                <Form >
                    <Box display="flex" flexDirection="column" gap={2}>
                    <TextField
                    name="name"
                    label="Firm Name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.name && Boolean(errors.name)} //error:true or false
                    helperText={touched.name && errors.name}
                  />
                    <TextField
                    name="address"
                    label="Address"
                    value={values.address}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.address && Boolean(errors.address)} //error:true or false
                    helperText={touched.address && errors.address}
                  />
                    <TextField
                    name="phone"
                    label="Phone"
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.phone && Boolean(errors.phone)} //error:true or false
                    helperText={touched.phone && errors.phone}
                  />
                    <TextField
                    name="image"
                    label="Image"
                    value={values.image}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.image && Boolean(errors.image)} //error:true or false
                    helperText={touched.image && errors.image}
                  />
                  <Button type="submit" variant="contained"> Submit Firm</Button>
                    </Box>

                </Form>
            )}
        </Formik>
    </div>
  )
}

export default FirmAdd
