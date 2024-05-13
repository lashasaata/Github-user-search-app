import { useState, useEffect } from "react";
import HeadingBar from "./components/HeadingBar";
import "./App.css";
import UserProfile from "./components/UserProfile";

function App() {
  const [userData, setUserData] = useState({});
  const storedData = localStorage.getItem("userData");

  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(userData));
  }, [userData]);

  useEffect(() => {
    // Parse storedData back to an object when component mounts
    if (storedData) {
      setUserData(JSON.parse(storedData));
    }
  }, []); // This useEffect runs only once when the component mounts

  return (
    <div className="h-screen flex flex-col items-center bg-[#f6f8ff]">
      <HeadingBar setUserData={setUserData} />
      <UserProfile userData={userData} />
    </div>
  );
}

export default App;
