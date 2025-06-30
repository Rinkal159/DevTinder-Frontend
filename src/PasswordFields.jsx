export default function PasswordFields({
  id,
  type,
  fieldName,
  value,
  setFieldValue,
}) {
  return (
    <div className="separators">
      <label htmlFor={id}>{fieldName}</label>
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
