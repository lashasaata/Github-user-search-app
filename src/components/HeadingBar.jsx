import axios from "axios";
import { useState } from "react";

function HeadingBar(props) {
  const [inputValue, setInputValue] = useState("");
  const [userError, setUserError] = useState(false);

  const getData = async () => {
    try {
      const info = await axios.get(
        `https://api.github.com/users/${inputValue}`
      );
      props.setUserData(info.data);
      setInputValue("");
      setUserError(false);
      console.log(info.data);
    } catch (error) {
      if (error.response.status == 404) {
        setUserError(true);
      }
    }
  };

  const inputHandler = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };
  const enterHandler = (e) => {
    if (e.key === "Enter") {
      getData();
    }
  };

  const darkModeHandler = () => {
    props.setDarkMode(!props.darkMode);
  };

  return (
    <div className="w-[327px] md:w-[573px] lg:w-[730px] flex flex-col justify-center mt-8 md:mt-10">
      <div className="flex items-center justify-between">
        <h1
          className={`${
            props.darkMode ? "text-white" : "text-[#222731]"
          } text-[26px] font-[700]`}
        >
          devfinder
        </h1>
        <div
          onClick={darkModeHandler}
          className="flex items-center gap-4 hover:cursor-pointer"
        >
          <span
            className={`${
              props.darkMode
                ? "text-white hover:text-[#90a4d4]"
                : "text-[#4b6a9b] hover:text-[#222731]"
            } text-[13px] font-[700] tracking-[2.5px]`}
          >
            DARK
          </span>
          {props.darkMode ? (
            <img src="/assets/icon-sun.svg" alt="moon_icon" className="" />
          ) : (
            <img src="/assets/icon-moon.svg" alt="sun_icon" className="" />
          )}
        </div>
      </div>
      <div className="h-5 flex justify-end mt-4 mr-6">
        {userError ? (
          <span className="text-sm text-[#f74646] font-[700] md:hidden">
            No results
          </span>
        ) : (
          ""
        )}
      </div>
      <section
        className={`${
          props.darkMode ? "bg-[#1e2a47]" : "bg-[#fefefe]"
        } w-[327px] md:w-[573px] lg:w-[730px] h-[60px] md:h-[69px] flex items-center justify-center md:justify-between  shadow-light rounded-[15px] gap-[9px]  md:gap-0 md:pl-[32px] md:pr-[10px]`}
      >
        <div className="flex itens-center gap-[9px] md:gap-6">
          <img
            className="w-5 md:w-6 h-5 md:h-6"
            src="/assets/icon-search.svg"
            alt="search_icon"
          />
          <input
            value={inputValue}
            onChange={inputHandler}
            onKeyDown={enterHandler}
            className={`${
              props.darkMode
                ? "bg-[#1e2a47] text-white placeholder:text-white"
                : "text-[#222731] placeholder:text-[#4b6a9b] "
            } outline-none w-[184px] md:w-[260px] lg:w-[300px] text-base md:text-lg font-[500] placeholder:text-[13px] md:placeholder:text-lg placeholder:font-[500] placeholder:leading-[1.92] mt-[-3px] lg:mt-[-1px] caret-blue-500`}
            placeholder="Search GitHub username…"
            type="text"
          />
        </div>
        <div className="flex items-center gap-6">
          {userError ? (
            <span className="text-sm md:text-[15px] text-[#f74646] font-[700] hidden md:flex">
              No results
            </span>
          ) : (
            ""
          )}
          <button
            onClick={getData}
            className="w-[84px] md:w-[106px] h-[46px] md:h-[50] bg-[#0079ff] rounded-[10px] text-sm md:text-base text-white font-[700] hover:bg-[#60abff]"
          >
            Search
          </button>
        </div>
      </section>
    </div>
  );
}

export default HeadingBar;
