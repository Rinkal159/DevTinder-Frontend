//input fields for firstname, lastname and occupation

export default function InputFields({
  id,
  type,
  fieldName,
  value,
  setFieldValue,
}) {
  return (
    <div className="separators">
      <label className="label" htmlFor={id}>
        {fieldName}
      </label>
      <input
        className="passwordInput"
        type={type}
        name={id}
        onChange={setFieldValue}
        value={value}
        id={id}
      />
    </div>
  );
}
