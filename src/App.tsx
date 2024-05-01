import React from 'react';
import './App.css';
import {Box} from './Components/context/Box'
import {ThemeContextProvider} from "./Components/context/ThemeContext";


function App() {
  return (
    <div className="App">
        <ThemeContextProvider>
            <Box/>
        </ThemeContextProvider>
    </div>
  );
}
export default App;


//Reusablity and avoid code duplicacy