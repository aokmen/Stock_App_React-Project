import { Box, Button, TextField } from '@mui/material'
import { Form, Formik } from 'formik'
import React from 'react'

import { object, string } from 'yup'
import useStockCall from '../hooks/useStockCall'

export const firmSchema = object({

    name: string().required(),
    image: string().required().url(), 
})

const BrandAdd = () => {
    const {postBrandData} = useStockCall()
  return (
    <div>
        <Formik
        initialValues={{
            name:"",
            image:"",
        }}
        validationSchema={firmSchema}
        onSubmit={(values,actions) => {
             postBrandData(values);
              actions.resetForm();
              actions.setSubmitting(true);
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

export default BrandAdd
