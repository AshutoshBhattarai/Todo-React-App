const divStyle = {
  width: "70%",
  backgroundColor: "white",
  boxShadow: "10px 10px 10px #F08080",
  border: '1px solid #F08080',
  padding: "5px 20px 10px",
  marginBottom : "20px",
  borderRadius: "10px",
  textAlign: "left",
  transition: "transform 0.2s ease-in-out", // For the hover effect
  transform: "translateY(0)", // Starting position for the hover effect
  cursor: "pointer", // For the hover effect
};
const titleStyle = {
  color: "#F08080",
  marginBottom: "10px",
};
const textStyle = {
  color: "#333",
};

export default function TodoDisplay({ todos }) {
  return (
    <>
      <div
        style={divStyle}
        onMouseEnter={(e) => {
          e.target.style.transform = "translateY(-10px)";
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = "translateY(0)";
        }}
      >
        <h3 style={titleStyle}>{todos.title}</h3>
        <p style={textStyle}>{todos.description}</p>
        <p style={textStyle}>Complete On : {todos.complete_on}</p>
        <p style={textStyle}>Completed : {todos.completed.toString()}</p>
      </div>
    </>
  );
}
