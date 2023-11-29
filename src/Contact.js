import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './Contact.css'; 

// Define your validation schema
const validationSchema = Yup.object({
    email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
    
});

function Contact() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    return (
        <div className="contact">
            <h1>Contact Me</h1>
            <p>Please reach out to me at prov311112@yahoo.com</p>

            {isSubmitted ? (
                <div>Your form has been submitted successfully!</div>
            ) : (
                <Formik
                    initialValues={{ email: '' }}
                    validationSchema={validationSchema}
                    onSubmit={(values, { setSubmitting }) => {
                        console.log('Submitting form with values:', values);
                        // Replace this with your actual submit function
                        fetch('/api/contact', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(values),
                        })
                        .then(() => {
                            setSubmitting(false);
                            setIsSubmitted(true);
                        })
                        .catch((error) => {
                            console.error('Error:', error);
                            setSubmitting(false);
                        });
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form className="contact-form">
                            <Field type="email" name="email" placeholder="Your email" className="contact-field" />
                            <ErrorMessage name="email" component="div" />
                            <button type="submit" disabled={isSubmitting} className="contact-button">
                                Submit
                            </button>
                        </Form>
                    )}
                </Formik>
            )}
        </div>
    );
}

export default Contact;