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

  return (
    <div className="w-[327px] flex flex-col justify-center mt-8">
      <div className="flex items-center justify-between">
        <h1 className="text-[26px] text-[#222731] font-[700] ">devfinder</h1>
        <div className="flex items-center gap-4">
          <span className="text-[13px] text-[#4b6a9b] font-[700] tracking-[2.5px]">
            DARK
          </span>
          <img src="./public/assets/icon-moon.svg" alt="moon_icon" />
        </div>
      </div>
      <div className="h-5 flex justify-end mt-4 mr-6">
        {userError ? (
          <span className="text-sm text-[#f74646] font-[700]">No results</span>
        ) : (
          ""
        )}
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
          onKeyDown={enterHandler}
          className="outline-none w-[184px] text-base text-[#222731] font-[500] placeholder:text-[13px] placeholder:text-[#4b6a9b] placeholder:font-[500] placeholder:leading-[1.92]"
          placeholder="Search GitHub username…"
          type="text"
        />
        {userError ? (
          <span className="text-sm text-[#f74646] font-[700] hidden">
            No results
          </span>
        ) : (
          ""
        )}
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
