import React from "react";
import './App.css';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {Projects} from "./projects/Projects";
import {RemoteWorkBlock} from "./remoteWork/RemoteWorkBlock";
import {Contacts} from "./contacts/Contacts";
import {Footer} from "./footer/Footer";

const App = () => {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <RemoteWorkBlock/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
