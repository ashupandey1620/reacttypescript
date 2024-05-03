import React from 'react';
import './App.css';
import {Counter} from "./Components/class/Counter";

function App() {
  return (
    <div className="App">
       <Counter message = 'The Count Value is '/>
    </div>
  );
}
export default App;




//Reusablity and avoid code duplicacy
//A context always need to be created outside the componsent,
// while its future value will always be set inside the component