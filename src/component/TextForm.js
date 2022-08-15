import React, { useState } from "react";

export default function TextForm(props) {
  // Dark Mode start here
  const [myStyle, setmyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const [btnText, setbtnText] = useState("Enable Dark Mode");

  const toggleStyle = () => {
    if (myStyle.color === "black") {
      setmyStyle({
        color: "white",
        backgroundColor: "black",
      });
      setbtnText("Disable Dark Mode");
    } else {
      setmyStyle({
        color: "black",
        backgroundColor: "white",
      });
      setbtnText("Enable Dark Mode");
    }
  };
  // Dark Mode close here

  const handleUpClick = () => {
    console.log("Uppercase btn was clicked");
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    console.log("Lowercase btn was clicked");
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    console.log("Changed");
    setText(event.target.value);
  };
  const handleClrClick = () => {
    let newText = "";
    setText(newText);
  };

  // copy
  const handleCopy = () => {
    let newText = document.getElementById("exampleFormControlTextarea1");
    newText.select();
    navigator.clipboard.writeText(newText.value);
  };
  const handleRemoveSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const [text, setText] = useState("");

  return (
    <>
      <div className="container" style={myStyle}>
        <h3>{props.heading}</h3>
        <div className="mb-3" style={myStyle}>
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Text Functions for daily uses
          </label>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="exampleFormControlTextarea1"
            rows="11"
          ></textarea>
        </div>

        {/* <button type="button" className="btn btn-primary" onClick={handleUpClick}>UpperCase</button> */}
      </div>
      <button onClick={toggleStyle} type="button" className="btn btn-primary">
        {btnText}
      </button>
      <button type="button" className="btn btn-primary" onClick={handleUpClick}>
        UpperCase
      </button>
      <button type="button" className="btn btn-primary" onClick={handleLoClick}>
        LowerCase
      </button>
      <button type="button" className="btn btn-primary" onClick={handleClrClick}>Clear</button>
      <button
        type="button"
        className="btn btn-primary"
        onClick={handleCopy}
      >
        Copy
      </button>
      <button type="button" className="btn btn-primary" onClick={handleRemoveSpace}>Remove Space</button>
      <div className="container my-3" style={myStyle}>
        <h3>Your Text Summary</h3>
        <p>
          {text.split(" ").length} words and {text.length} character
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to complete this summary</p>
        <h4>Preview</h4>
        <p>{text}</p>
      </div>
    </>
  );
}
