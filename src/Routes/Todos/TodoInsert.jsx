import { useState } from "react";
import {
  mainContainer,
  inputStyle,
  formContainer,
  formTitle,
  formStyle,
  labelStyle,
  buttonStyle,
} from "../../Components/FormStyles";

export default function TodoInsert() {
    const [title,setTitle] = useState()
    const [desc,setDesc] = useState()
  const handleFormSubmit = (e) => {};
  console.log("Form Todo Insert");
  return (
    <div style={mainContainer}>
      <div style={formContainer}>
        <h1 style={formTitle}>Insert New Todo</h1>
        <form style={formStyle} onSubmit={handleFormSubmit}>
          <label style={labelStyle}>Title</label>
          <input
            style={inputStyle}
            type="text"
            placeholder="Title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <label style={labelStyle}>Description</label>
          <textarea
            style={inputStyle}
            type="textarea"
            placeholder="Input"
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          />
          <label style={labelStyle}>Date</label>
          <input style={inputStyle} type="date" name="date" />
          <div style={{ textAlign: "center" }}>
            <button
              style={buttonStyle}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#F08080";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#f25e60";
              }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
