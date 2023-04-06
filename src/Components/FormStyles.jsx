const mainContainer = {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "50vh",
    background: "",
    // background: "#8E2DE2",
    // background: "-webkit-linear-gradient(to bottom, #4A00E0, #8E2DE2)",
    //background: "linear-gradient(to bottom, #4A00E0, #8E2DE2)",
  };
  const formContainer = {
    width: "300px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.1)",
    padding: "5px 30px 30px 30px",
  };
  const formTitle = {
    color: "#95C2DE",
    textAlign: "center",
    marginBottom: "20px",
  };
  const formStyle = {
    display: "flex",
    flexDirection: "column",
  };
  const labelStyle = {
    color: "#f25e60",
    marginBottom: "10px",
    fontWeight: "bold",
    align: "left",
  };
  const inputStyle = {
    width: "100%",
    padding: "10px",
    marginBottom: "20px",
    marginRight: "20px",
    border: "1px solid #95C2DE",
    borderRadius: "5px",
    boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.1)",
  };
  const buttonStyle = {
    width: "50%",
    textAlign: "center",
    backgroundColor: "#95C2DE",
    color: "#fff",
    padding: "10px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.1)",
    transition: "backgroundColor 0.2s ease-in-out",
  };

  export {
    mainContainer,inputStyle,formContainer,formTitle,formStyle,labelStyle,buttonStyle
  }