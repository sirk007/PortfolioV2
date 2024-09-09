import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';

// Validation Schema
const validationSchema = Yup.object({
  to_name: Yup.string().required('Name is required'),
  from_name: Yup.string().email('Invalid email address').required('Email is required'),
  message: Yup.string().required('Message is required'),
});

const Contact = () => {
  return (
    <section id="Contact" className="py-16 bg-neutral-800">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Contact Me
        </h2>
        <Formik
          initialValues={{ to_name: '', from_name: '', message: '' }}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm, setStatus }) => {
            emailjs
              .send(
                'service_44hxfjp', 
                'template_6rregk2', 
                values, // Form data as plain object
                'XBvyH_gYB72iruE-5' 
              )
              .then(
                () => {
                  setStatus({ success: 'Your message has been sent successfully!' });
                    console.log('Succesful!');
                    alert('Success!');
                  resetForm();
                },
                (error) => {
                  setStatus({ error: 'Failed to send message. Please try again later.' });
                  alert('Failed!');
                  console.log('FAILED...', error.text);
                }
              );
          }}
        >
          {({ status }) => (
            <Form className="bg-neutral-700 p-8 rounded-lg shadow-md grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col space-y-4">
                <label htmlFor="name" className="block text-white font-semibold mb-2">
                  Name
                </label>
                <Field
                  type="text"
                  id="name"
                  name="to_name"
                  className="w-full p-3 border border-gray-600 rounded-md bg-neutral-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Name"
                />
                <ErrorMessage name="to_name" component="div" className="text-red-500 text-sm" />
              </div>
              <div className="flex flex-col space-y-4">
                <label htmlFor="email" className="block text-white font-semibold mb-2">
                  Email
                </label>
                <Field
                  type="email"
                  id="email"
                  name="from_name"
                  className="w-full p-3 border border-gray-600 rounded-md bg-neutral-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Email"
                />
                <ErrorMessage name="from_name" component="div" className="text-red-500 text-sm" />
              </div>
              <div className="md:col-span-2 flex flex-col space-y-4">
                <label htmlFor="message" className="block text-white font-semibold mb-2">
                  Message
                </label>
                <Field
                  as="textarea"
                  id="message"
                  name="message"
                  rows="6"
                  className="w-full p-3 border border-gray-600 rounded-md bg-neutral-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Message"
                />
                <ErrorMessage name="message" component="div" className="text-red-500 text-sm" />
              </div>
              <div className="md:col-span-2 text-center">
                <button
                  type="submit"
                  className="bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                >
                  Send
                </button>
              </div>
              {status && status.success && (
            <div className="text-green-500 text-center mt-4">
                {status.success}
            </div>
            )}
            {status && status.error && (
            <div className="text-red-500 text-center mt-4">
                {status.error}
            </div>
            )}
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default Contact;