import { Formik } from 'formik';
import * as Yup from 'yup';
import { useRegister } from '@modules/auth/hooks';
import { useState } from 'react';

const RegisterValidationSchema = Yup.object({
  email: Yup.string().email().required(),
  name: Yup.string().min(3).max(200).required(),
  password: Yup.string().min(8).max(50).required(),
});

export const RegisterForm = ({ onSuccess }: any) => {
  const [nonFieldErrors, setNonFieldErrors] = useState([]);
  const { doRegister, isLoading } = useRegister();

  const submitHandler = async (values: any, formikOpts: any) => {
    try {
      await doRegister(values);
      setNonFieldErrors([]);
      onSuccess();
    } catch (errorData: any) {
      setNonFieldErrors(errorData?.nonFieldErrors);
      if (errorData.fields) {
        formikOpts.setErrors(errorData.fields);
      }
    }
  };

  return (
    <Formik
      initialValues={{ email: '', name: '', password: '' }}
      validationSchema={RegisterValidationSchema}
      onSubmit={submitHandler}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit}>
          {nonFieldErrors.length > 0 && (
            <article className="message is-danger">
              <div className="message-body">
                <ul>
                  {nonFieldErrors?.map((field: string, index) => (
                    <li key={index}>{field}</li>
                  ))}
                </ul>
              </div>
            </article>
          )}

          <div className="field">
            <div className="control">
              <input
                name="name"
                className={[
                  'input',
                  errors.name && touched.name && errors.name ? 'is-danger' : '',
                ].join(' ')}
                type="text"
                disabled={isLoading}
                placeholder="Enter your name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
            </div>
            {errors.name && touched.name && (
              <p className="help is-danger">{errors.name}</p>
            )}
          </div>
          <div className="field">
            <div className="control">
              <input
                name="email"
                className={[
                  'input',
                  errors.email && touched.email && errors.email
                    ? 'is-danger'
                    : '',
                ].join(' ')}
                type="email"
                disabled={isLoading}
                placeholder="Enter your email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
            </div>
            {errors.email && touched.email && (
              <p className="help is-danger">{errors.email}</p>
            )}
          </div>
          <div className="field">
            <div className="control">
              <input
                name="password"
                className={[
                  'input',
                  errors.password && touched.password && errors.password
                    ? 'is-danger'
                    : '',
                ].join(' ')}
                type="password"
                disabled={isLoading}
                placeholder="Enter your password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
            </div>
            {errors.password && touched.password && (
              <p className="help is-danger">{errors.password}</p>
            )}
          </div>
          <div className="field">
            <div className="control">
              <button
                className="button is-primary is-fullwidth"
                disabled={isSubmitting || isLoading}
              >
                Register
              </button>
            </div>
          </div>
        </form>
      )}
    </Formik>
  );
};
