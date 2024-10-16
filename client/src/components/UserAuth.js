import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const UserAuth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const initialValues = isLogin 
    ? { username: '', password: '' }
    : { username: '', email: '', password: '' };

  const validate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = 'Required';
    }
    if (!values.password) {
      errors.password = 'Required';
    }
    if (!isLogin && !values.email) {
      errors.email = 'Required';
    }
    return errors;
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const url = isLogin ? '/api/login' : '/api/register';
      const response = await axios.post(`http://localhost:5555${url}`, values, { withCredentials: true });
      alert(response.data.message);
      navigate('/');
    } catch (error) {
      alert(error.response?.data?.message || 'An error occurred');
    }
    setSubmitting(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">{isLogin ? 'Login' : 'Register'}</h2>
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="max-w-md">
            <div className="mb-4">
              <Field type="text" name="username" placeholder="Username" className="w-full p-2 border rounded" />
              <ErrorMessage name="username" component="div" className="text-red-500 text-sm" />
            </div>
            {!isLogin && (
              <div className="mb-4">
                <Field type="email" name="email" placeholder="Email" className="w-full p-2 border rounded" />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
              </div>
            )}
            <div className="mb-4">
              <Field type="password" name="password" placeholder="Password" className="w-full p-2 border rounded" />
              <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
            </div>
            <button type="submit" disabled={isSubmitting} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 disabled:bg-blue-300">
              {isLogin ? 'Login' : 'Register'}
            </button>
          </Form>
        )}
      </Formik>
      <button onClick={() => setIsLogin(!isLogin)} className="mt-4 text-blue-500 hover:text-blue-700">
        Switch to {isLogin ? 'Register' : 'Login'}
      </button>
    </div>
  );
};

export default UserAuth;