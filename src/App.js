import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

console.log(logo)

function App() {
  const [Mode, setMode] = useState('light') 
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
      setAlert({msg:message, Type:type})
      setTimeout(()=>{
        setAlert(null)
      },3000)
  }

  const toggleMode = () =>{

    if(Mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = 'gray'
      showAlert('Dark Mode has been enabled','success')
      document.title = 'TextUtils DarkMode'
      
    }

    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('Light Mode has been enabled','success')
      document.title = 'TextUtils LightMode'
      
    }
  }

  return (
  <>

<Router>
  <Navbar title='TextUtils' aboutText='About TextUtils' Mode={Mode} toggleMode={toggleMode}/>
  <Alert alert={alert} />
    <Routes>

      <Route path="/about" element={<About Mode={Mode}/>}/>
      <Route path="/" element={<TextForm heading="Enter the text to analyze" showAlert={showAlert} mode={Mode}/>}/>

    </Routes>
</Router>
<div className="container my-3">



</div>
 </>
  );
}

export default App;
