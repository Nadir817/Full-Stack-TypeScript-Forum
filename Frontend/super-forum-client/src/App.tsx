import React from "react";
import Nav from "./components/Nav";
import "./App.css";
import SideBar from "./components/sidebar/SideBar";
import LeftMenu from "./components/LeftMenu";
import Main from "./components/Main";
import RightMenu from "./components/RightMenu";

function App() {
  return (
    <div className="App">
      <Nav />
      <SideBar />
      <LeftMenu />
      <Main />
      <RightMenu />
    </div>
  )
}

export default App;