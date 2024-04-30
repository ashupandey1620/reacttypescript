import React from 'react';
import './App.css';
import {Greet} from "./Components/Greet";
import {Person} from "./Components/Person";
import {PersonList} from "./Components/PersonList";
import {Status} from "./Components/Status";
import {Heading} from "./Components/Heading";
import {Oscar} from "./Components/Oscar";

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
      {/*  <PersonList names = {nameList}/>*/}
        {/*<Status status = {"loading"}/>*/}
        {/*<Heading> this is a placeholder txt </Heading>*/}

        <Oscar>
            <Heading>
                Oscar not goes to anyone other than Ashutosh Panduy
            </Heading>
        </Oscar>
    </div>
  );
}

export default App;
