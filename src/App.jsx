import { useState, useEffect } from "react";
import HeadingBar from "./components/HeadingBar";
import "./App.css";
import UserProfile from "./components/UserProfile";

function App() {
  const [userData, setUserData] = useState({
    name: "The Octocat",
    login: "octocat",
    bio: " Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.",
    public_repos: 8,
    followers: 3938,
    following: 9,
    lovation: "San Francisco",
    blog: "https://github.blog",
    twitter_username: null,
    company: "@github",
  });
  const storedData = localStorage.getItem("userData");
  const storedDarkMode = localStorage.getItem("darkMode");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (storedData) {
      setUserData(JSON.parse(storedData));
    }
    if (storedDarkMode) {
      setDarkMode(JSON.parse(storedDarkMode));
    }
  }, []); // This useEffect runs only once when the component mounts

  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(userData));
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [userData, darkMode]);

  return (
    <div
      className={`${
        darkMode ? "bg-[#141d2f]" : "bg-[#f6f8ff]"
      } h-scroll flex flex-col items-center `}
    >
      <HeadingBar
        setUserData={setUserData}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <UserProfile userData={userData} darkMode={darkMode} />
    </div>
  );
}

export default App;
