import axios from "axios";
import { useState } from "react";

function HeadingBar(props) {
  const [inputValue, setInputValue] = useState("");

  const inputHandler = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };
  const getData = async () => {
    const info = await axios.get(`https://api.github.com/users/${inputValue}`);
    props.setUserData(info.data);
    setInputValue("");
    console.log(info.data);
  };

  return (
    <div className="w-[327px] flex flex-col justify-center gap-9 mt-8">
      <div className="flex items-center justify-between">
        <h1 className="text-[26px] text-[#222731] font-[700] ">devfinder</h1>
        <div className="flex items-center gap-4">
          <span className="text-[13px] text-[#4b6a9b] font-[700] tracking-[2.5px]">
            DARK
          </span>
          <img src="./public/assets/icon-moon.svg" alt="moon_icon" />
        </div>
      </div>
      <section className="w-[327px] h-[60px] flex items-center justify-center bg-[#fefefe] shadow-light rounded-[15px] gap-[9px]">
        <img
          className="w-5 h-5"
          src="./public/assets/icon-search.svg"
          alt="search_icon"
        />
        <input
          value={inputValue}
          onChange={inputHandler}
          className="outline-none w-[184px] text-base text-[#222731] font-[500] placeholder:text-[13px] placeholder:text-[#4b6a9b] placeholder:font-[500] placeholder:leading-[1.92]"
          placeholder="Search GitHub username…"
          type="text"
        />
        <span className="text-[15px] text-[#f74646] font-[700] hidden">
          No results
        </span>
        <button
          onClick={getData}
          className="w-[84px] h-[46px] bg-[#0079ff] rounded-[10px] text-sm text-white font-[700] "
        >
          Search
        </button>
      </section>
    </div>
  );
}

export default HeadingBar;
