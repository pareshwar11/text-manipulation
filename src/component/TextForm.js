import React, { useState } from "react";

export default function TextForm(props) {
  // Dark Mode start here
  // const [myStyle, setmyStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });

  // const [btnText, setbtnText] = useState("Enable Dark Mode");

  // const toggleStyle = () => {
  //   if (myStyle.color === "black") {
  //     setmyStyle({
  //       color: "white",
  //       backgroundColor: "black",
  //     });
  //     setbtnText("Disable Dark Mode");
  //   } else {
  //     setmyStyle({
  //       color: "black",
  //       backgroundColor: "white",
  //     });
  //     setbtnText("Enable Dark Mode");
  //   }
  // };
  // Dark Mode close here

  const handleUpClick = () => {
    console.log("Uppercase btn was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase successfully", "success");
    // Example to taking function as a Props
  };
  const handleLoClick = () => {
    console.log("Lowercase btn was clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase successfully", "success");
  };
  const handleOnChange = (event) => {
    console.log("Changed");
    setText(event.target.value);
  };
  const handleClrClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared", "success");
  };

  // copy
  const handleCopy = () => {
    let newText = document.getElementById("exampleFormControlTextarea1");
    newText.select();
    navigator.clipboard.writeText(newText.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Copied to clipboard", "success");
  };
  const handleRemoveSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed Extra Spaces", "success");
  };

  const [text, setText] = useState("");

  return (
    <>
      <div className="container" style={{backgroundColor: props.mode==='dark'?'#042743':'white'}}>
        <h3 style={{color:props.mode==='dark'?'white':'black'}}>{props.heading}</h3>
        <div className="mb-3" >
          <label htmlFor="exampleFormControlTextarea1" className="form-label" style={{color:props.mode==='dark'?'white':'black'}}>word counter | character counter | lowercase to uppercase | uppercase to lowercase | remove extra spaces
          </label>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="exampleFormControlTextarea1"
            rows="8"
            style={{backgroundColor: props.mode==='dark'?'rgb(33 37 41 / 86%)':'white', color:props.mode==='dark'?'white':'black'}}
            // multiple inline JavaScript style Example
          ></textarea>
        </div>
      </div>
      <div className="btnStyle mx-2 my-1">

      <button type="button" className="btn btn-dark" onClick={handleUpClick}>
        UpperCase
      </button>
      <button type="button" className="btn btn-dark mx-2 my-1" onClick={handleLoClick}>
        LowerCase
      </button>
      <button type="button" className="btn btn-dark mx-2 my-1" onClick={handleClrClick}>
        Clear
      </button>
      <button type="button" className="btn btn-dark mx-2 my-1" onClick={handleCopy}>
        Copy
      </button>
      <button
        type="button"
        className="btn btn-dark mx-2 my-1"
        onClick={handleRemoveSpace}
        >
        Remove Space
      </button>
        </div>
      <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h3>Your Text Summary</h3>
        <p>
          {text.split(" ").filter((element)=>{ return element.length!==0}).length} words and {text.length} character
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to complete this summary</p>
        <h4>Preview</h4>
        <p className="p-2 border border-primary rounded" style={{backgroundColor: props.mode==='dark'?'rgb(33 37 41 / 86%)':'white', color:props.mode==='dark'?'white':'black', height: "16vh"}}>
        {text.length>0?text: "Enter your text to preview it here"}
        {/* {text} */}
        </p>
      </div>
    </>
  );
}
