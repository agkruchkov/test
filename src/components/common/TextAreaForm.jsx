import React from "react";
import { useField } from "formik";

const TextAreaForm = ({ label, ...fieldProps }) => {
  const [field, meta] = useField(fieldProps);
  return (
    <div className="form-common">
      <label htmlFor={fieldProps.name}>{label}</label>
      <textarea className="text-textarea" {...field} {...fieldProps} />
      {meta.touched && meta.error && <div className="error">{meta.error}</div>}
    </div>
  );
};

export default TextAreaForm;
