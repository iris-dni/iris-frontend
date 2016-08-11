const renderSelect = (field) => (
  <div>
    <div>
      <select {...field.input} />
    </div>
    {field.touched && field.error && <div className='error'>{field.error}</div>}
  </div>
);

export default renderSelect;
