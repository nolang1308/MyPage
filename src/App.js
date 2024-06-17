import React from 'react';
import './App.css';
import DotoryCard from "./DotoryCard/DotoryCard";
import Glass from "./Glass/Glass";

function App() {

    return (
        <div className="App">
            <DotoryCard/>
            <div className={"glass"}>
                <Glass/>
                <div></div>
            </div>


        </div>
    );
}

export default App;