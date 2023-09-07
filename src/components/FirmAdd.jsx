import { Formik } from 'formik'
import React from 'react'
import { number,object, string } from 'yup'

export const firmSchema = object({

    firm_name: string().required(),
    adress: string().required(),
    phone: number().required(),
    image: string().required(), 
})

const FirmAdd = () => {
  return (
    <div>
        <Formik
        initialValues={{
            firm_name:"",
            adress:"",
            phone:"",
            image:"",
        }}
        validationSchema={firmSchema}
        >

        </Formik>
    </div>
  )
}

export default FirmAdd
