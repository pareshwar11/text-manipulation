
import './App.css';
// import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import React , {useState}  from 'react'

function App() {
  const [mode, setmode] = useState('light')
  const [text, setText] = useState('Enable Dark Mode')
  // const isBackgroundlight = true;
  const [isBackgroundlight, setIsBackgroundlight] = useState(true)
  const toggleBtn=()=>{
    if(mode==='light'){
      setIsBackgroundlight(false)
      setmode('dark');
      setText('Disable Dark Mode')
  }
  else{
    setIsBackgroundlight(true)
    setText('Enable Dark Mode')
    setmode('light');
  }
}

  return (
    <><div style={{backgroundColor: isBackgroundlight ? 'white' : 'black',
    }}>

      <Navbar mode={mode} togglemode={toggleBtn} text={text}/>
      <div className="container my-3">
      {/* <About/> */}
        <TextForm heading="Enter the text to perform some fuctionality"/>
      </div>
    </div>
    </>
  );
}

export default App;
