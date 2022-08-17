import React from "react";

export default function About(props) {

  return (
    <>
    <div className="container" style={{backgroundColor: props.mode==='dark'?'#042743':'white'}} >

    <h1 className="my-2 " style={{color:props.mode==='dark'?'white':'black'}}>About Us</h1>
      <div className="accordion" id="accordionExample" style={{backgroundColor: props.mode==='dark'?'#212529':'white'}}>
        <div className="accordion-item" style={{backgroundColor: props.mode==='dark'?'#212529':'white', color:props.mode==='dark'?'white':'black'}}>
          <h2 className="accordion-header rounded-3" id="headingOne" style={{backgroundColor: props.mode==='dark'?'#212529':'white'}}>
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne" style={{backgroundColor: props.mode==='dark'?'#212529':'white', color:props.mode==='dark'?'white':'black'}}
              >
              What you can do with this website ?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample" 
          >
            <div className="accordion-body" >
              <strong>Here you can set your text into UPPERCASE, LOWERCASE, Copy the text, and Remove the Extra Spaces and also you can count the number of words and character</strong>
            </div>
          </div>
        </div>
        <div className="accordion-item" style={{backgroundColor: props.mode==='dark'?'#212529':'white', color:props.mode==='dark'?'white':'black'}}>
          <h2 className="accordion-header" id="headingTwo" >
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo" style={{backgroundColor: props.mode==='dark'?'#212529':'white', color:props.mode==='dark'?'white':'black'}}
            >
              Browser Compatible
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
            >
            <div className="accordion-body" >
              This website works in any web browser such as Chrome, FireFox, Internet Explorer, Safari, Opera.
            </div>
          </div>
        </div>
        <div className="accordion-item " style={{backgroundColor: props.mode==='dark'?'#212529':'white', color:props.mode==='dark'?'white':'black'}}>
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree" style={{backgroundColor: props.mode==='dark'?'#212529':'white', color:props.mode==='dark'?'white':'black'}}
              >
              My Another Project 
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
            >
            <div className="accordion-body">
              <a className="text-decoration-none" href="https://medlocator.vercel.app/">MedLocator</a> <br />
              <a className="text-decoration-none" href="https://pareshwar11.github.io/pareshwar/">Portfolio</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
