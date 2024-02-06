import { Formik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import { useEdit } from '@modules/dashboard/hooks/useEdit';

const EditValidationSchema = Yup.object({
  name: Yup.string().min(3).required(),
});

export const ProfileForm = ({ onSuccess, user }: any) => {
  const [nonFieldErrors, setNonFieldErrors] = useState([]);
  const { doEdit, isLoading } = useEdit();

  const submitHandler = async (values: any, formikOpts: any) => {
    try {
      await doEdit(values);
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
      initialValues={{ name: '' || user?.name }}
      validationSchema={EditValidationSchema}
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
            <label className="label">Nama</label>
            <div className="control">
              <input
                name="name"
                className={[
                  'input',
                  errors.name && touched.name && errors.name ? 'is-danger' : '',
                ].join(' ')}
                type="text"
                disabled={isLoading}
                placeholder="Enter your Name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
            </div>
            {errors.name && touched.name && (
              <p className="help is-danger">{errors.name as any}</p>
            )}
          </div>
          <div className="field">
            <div className="control">
              <button
                className="button is-primary"
                disabled={isSubmitting || isLoading}
              >
                Edit
              </button>
            </div>
          </div>
        </form>
      )}
    </Formik>
  );
};
