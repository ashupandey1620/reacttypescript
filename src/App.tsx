import React from 'react';
import './App.css';
import {Counter} from "./Components/class/Counter";
import {List} from "./Components/generics/list";

function App() {
  return (
    <div className="App">
      <List onClick={(item)=> console.log(item)} items={['Batman','SuperMan','Wonder Women']} />
      <List onClick={(item)=> console.log(item)} items={[1,2,3]} />
    </div>
  );
}
export default App;




//Reusablity and avoid code duplicacy
//A context always need to be created outside the componsent,
// while its future value will always be set inside the component