import { useState } from "react";
import HeadingBar from "./components/HeadingBar";
import "./App.css";
import UserProfile from "./components/UserProfile";

function App() {
  const [userData, setUserData] = useState({});
  return (
    <div className="h-screen flex flex-col items-center bg-[#f6f8ff]">
      <HeadingBar setUserData={setUserData} />
      <UserProfile userData={userData} />
    </div>
  );
}

export default App;
