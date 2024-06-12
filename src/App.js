import React from 'react';
import './App.css';
import DotoryCard from "./DotoryCard/DotoryCard";

function App() {
    const toSite=()=>{
        window.open("https://github.com")
    }


    return (
        <div className="App">
            <DotoryCard/>


        </div>
    );
}

export default App;