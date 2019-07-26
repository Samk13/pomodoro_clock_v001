import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CornerGithub from "./Componants/CornerGithub";
import Pomodoro from "./Componants/Pomodoro";

const Header = () => <h1>Pomodoro Clock</h1>;

function App() {
  return (
    <div className="App">
      <CornerGithub />
      <img
        src={logo}
        className="App-logo"
        alt="logo"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      />
      <header className="App-header" />
      <div className="container1">
        <Header />
        <Pomodoro />
      </div>
    </div>
  );
}

export default App;
