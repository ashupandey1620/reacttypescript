import React from 'react';
import './App.css';
import {UserContextProvider} from "./Components/context/userContext";
import {User} from "./Components/context/User";

function App() {
  return (
    <div className="App">
        <UserContextProvider>
            <User/>
        </UserContextProvider>
    </div>
  );
}
export default App;


//Reusablity and avoid code duplicacy
//A context always need to be created outside the componsent, while its future value will always be set inside the component