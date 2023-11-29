import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

function MyForm({ initialValues, validate, onSubmit }) {
    return (
        <Formik
            initialValues={initialValues}
            validate={validate}
            onSubmit={onSubmit}
        >
            {({ isSubmitting }) => (
                <Form>
                    <div>
                        <label htmlFor="name">Name</label>
                        <Field id="name" name="name" placeholder="sinit haile" />
                        <ErrorMessage name="name" component="div" />
                    </div>

                    <div>
                        <label htmlFor="email">Email</label>
                        <Field id="email" name="email" placeholder="prov311112@yahoo.com" />
                        <ErrorMessage name="email" component="div" />
                    </div>

                    {/* Add other fields as necessary */}

                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
    );
}

export default MyForm;