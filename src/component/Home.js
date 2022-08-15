import React, {useState} from 'react'
// import About from './About'
import Navbar from './Navbar'
import TextForm from './TextForm'

export default function Home() {
    const [mode, setmode] = useState('light')
    const [text, setText] = useState('Enable Dark Mode')

    const toggleBtn=()=>{
        if(mode==='light'){
          setmode('dark');
          setText('Disable Dark Mode')
      }else{
        setText('Enable Dark Mode')
        setmode('light');
      }
    }

  return (
    <div>
      <Navbar mode={mode} togglemode={toggleBtn} text={text}/>
      <div className="container my-3">
      {/* <About/> */}
        <TextForm heading="Enter the text to perform some fuctionality"/>
      </div>
    </div>
  )
}
