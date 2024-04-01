import { useState } from "react";
import HeadingBar from "./components/HeadingBar";
import "./App.css";

function App() {
  return (
    <div className="h-screen flex flex-col items-center">
      <HeadingBar />
    </div>
  );
}

export default App;
