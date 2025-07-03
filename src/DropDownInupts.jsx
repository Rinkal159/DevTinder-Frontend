import Select from "react-select";

// for state, tech stacks and goals
export default function DropDownInupts({
  id,
  fieldName,
  isMulti,
  options,
  input,
  handleInput,
  placeholder
}) {
  return (
    <div className="separators">
      <label className="label" htmlFor={id}>
        {fieldName}
      </label>

      <Select
        isMulti={isMulti}
        options={options}
        value={input}
        onChange={handleInput}
        placeholder={placeholder}
        styles={{
            control : (base) => ({
                ...base,
                cursor:"text",
            }),
            menuList : (base) => ({
                ...base,
                maxHeight:"15rem"
            })
        }}
      />
    </div>
  );
}
