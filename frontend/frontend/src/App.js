import React,{useState } from "react";
import { BrowserRouter} from "react-router-dom";
//import MainPage from "./component/MainPage";
//import "./index.css";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";

import "./App.css";

function App() {
  const [currentForm,setCurrentForm]=useState('login');

  const toggleForm=(formName) =>{
    setCurrentForm(formName);
  }
    return (
      
      <div className="App">
        <React.Fragment>
          <BrowserRouter>
            {
              currentForm === "login" ? <Login onFormSwitch={toggleForm} /> :<Register onFormSwitch={toggleForm}/>
            }
          </BrowserRouter>
        </React.Fragment>
      </div>
      
  );
}

export default App;
