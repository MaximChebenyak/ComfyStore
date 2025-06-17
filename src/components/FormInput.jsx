/* const FormInput = ({ label, name, type, defaultValue, size }) => {
  return (
    <div className="form-control">
      <label htmlFor={name} className="label">
        <span className="label-text capitalize">{label}</span>
      </label>
      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        className={`input input-bordered ${size}`}
      />
    </div>
  );
};
export default FormInput; */
const FormInput = ({ label, name, type, ...rest }) => (
  <div className="flex items-center mb-4">
    <label htmlFor={name} className="w-32 mr-4 font-medium">
      {label}
    </label>
    <input
      type={type}
      name={name}
      id={name}
      className="flex-1 rounded-md px-3 py-2 bg-transparent border border-slate-700"
      {...rest}
    />
  </div>
);

export default FormInput;
