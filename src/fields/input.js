const renderField = (field) => (
  <div>
    <input {...field.input} />
    {field.touched && field.error && <div className='error'>{field.error}</div>}
  </div>
);

export default renderField;
