import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from "react";
import s from "./ContactFrom.module.css"
import { nanoid } from 'nanoid'
import * as Yup from "yup";

const ContactForm = ({onAdd}) => {
  const nameFieldId = useId();
    const telFieldId = useId();
    const initialValues = {
        name: '',
        number: ''
    }

     const handleSubmit = (values, actions) => {
         onAdd({
             name: values.name,
             number: values.number,
             id: nanoid()
         })
		actions.resetForm();
    };
    
    const FeedbackSchema = Yup.object({
  name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
  number: Yup.string().matches(/^\d{3}-\d{2}-\d{2}$/, "Must be in format xxx-xx-xx").required("Required"),
});


  return (
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={FeedbackSchema}>
          <Form className={s.form}>
              <label htmlFor={nameFieldId}>Name</label>
              <Field type="text" name="name" id={nameFieldId} />
              <ErrorMessage name="name" component="span" />
              <label htmlFor={telFieldId}>Number</label>
              <Field type="tel" name="number" id={telFieldId} />
              <ErrorMessage name="number" component="span" />
			<button type="submit">Add contact</button>
			</Form>
    </Formik>
  )
}

export default ContactForm
