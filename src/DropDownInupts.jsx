import Select from "react-select";

// for state, tech stacks and goals
export default function DropDownInupts({
  id,
  fieldName,
  isMulti,
  options,
  input,
  handleInput,
  placeholder,
}) {

  const customStyles = {
    control: (base, state) => ({
      ...base,
      cursor: "text",
      margin: "0.25rem",
      backgroundColor: document.documentElement.classList.contains("dark")
        ? "#d0d0d0"
        : "white",
      borderColor: document.documentElement.classList.contains("dark")
        ? "black"
        : "white",
      "&:hover": {
        borderColor: document.documentElement.classList.contains("dark")
        ? "white"
        : "#590074",
        boxShadow : document.documentElement.classList.contains("dark")
        ? "rgb(235, 193, 255) 0px 5px 0px -4px;"
        : "rgba(21, 0, 43, 0.3) 0px 5px 5px -4px;"
      },
    }),
    placeholder : (base) => ({
      ...base,
      color : "black"
    }),
    menuList: (base) => ({
      ...base,
      maxHeight: "15rem",
      backgroundColor: document.documentElement.classList.contains("dark")
        ? "black"
        : "white",
    }),
    option: (base, state) => ({
      ...base,
      cursor: "pointer",
      color: document.documentElement.classList.contains("dark")
        ? "white"
        : "black",
      color: state.isFocused
        ? "black"
        : document.documentElement.classList.contains("dark")
        ? "white"
        : "black",
    }),
    singleValue: (base) => ({
      ...base,
      color: "black",
    }),
    input: (base) => ({
      ...base,
      color: document.documentElement.classList.contains("dark")
        ? "white"
        : "black",
    }),
    clearIndicator: (base) => ({
      ...base,
      cursor: "pointer",
    }),
  };


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
        styles={customStyles}
      />
    </div>
  );

}

