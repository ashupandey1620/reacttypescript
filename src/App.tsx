import React from 'react';
import './App.css';
import {Greet} from "./Components/Greet";
import {Person} from "./Components/Person";
import {PersonList} from "./Components/PersonList";

function App() {

    const personName = {
        first: "Omi",
        last: "Pandey",
    }

    const nameList = [
        {
            first:"Arpit",
            last:"Trivedi"
        },
        {
            first:"Arpit",
            last:"Vishwakarma"
        },
        {
            first:"Abhishek",
            last:"Srivastava"
        },
    ]

  return (
    <div className="App">
      {/*<Greet name ='Ashutosh Pandey' messageCount={99} isLoggedIn={true}/>*/}
      {/*  <Person name={personName}/>*/}
        <PersonList names = {nameList}/>
    </div>
  );
}

export default App;
