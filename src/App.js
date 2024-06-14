import React from 'react';
import './App.css';
import DotoryCard from "./DotoryCard/DotoryCard";
import Glass from "./Glass/Glass";

function App() {
    const toSite=()=>{
        window.open("https://github.com")
    }


    return (
        <div className="App">
            <DotoryCard/>
            <div className={"glass"}>
                <Glass/>
            </div>


        </div>
    );
}

export default App;