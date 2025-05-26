const FormCheckbox = ({ label, name, defaultValue, size }) => {
  return (
    <div className="form-control">
      <label
        htmlFor={name}
        className="label cursor-pointer flex flex-col items-center"
      >
        <span className="label-text capitalize ">{label}</span>
        <input
          type="checkbox"
          name={name}
          defaultChecked={defaultValue}
          className={`checkbox checkbox-primary ${size} `}
        />
      </label>
    </div>
  );
};
export default FormCheckbox;
