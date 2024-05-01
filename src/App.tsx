import React from 'react';
import './App.css';
import {Button} from "./Components/Button";
import {Input} from "./Components/Input";

function App() {


  return (
    <div className="App">
      <Button handleClick={(event,id)=>{
          console.log("Button Clicked",event);
      }}
      />
        <Input value='' handlechange={(event)=>console.log(event)}/>
    </div>
  );
}

export default App;
