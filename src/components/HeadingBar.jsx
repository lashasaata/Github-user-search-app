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
    <div className="w-[327px] md:w-[573px] flex flex-col justify-center mt-8 md:mt-10">
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
          <span className="text-sm text-[#f74646] font-[700] md:hidden">
            No results
          </span>
        ) : (
          ""
        )}
      </div>
      <section className="w-[327px] md:w-[573px] h-[60px] md:h-[69px] flex items-center justify-center md:justify-between bg-[#fefefe] shadow-light rounded-[15px] gap-[9px]  md:gap-0 md:pl-[32px] md:pr-[10px]">
        <div className="flex itens-center gap-[9px] md:gap-6">
          <img
            className="w-5 md:w-6 h-5 md:h-6"
            src="./public/assets/icon-search.svg"
            alt="search_icon"
          />
          <input
            value={inputValue}
            onChange={inputHandler}
            onKeyDown={enterHandler}
            className="outline-none w-[184px] md:w-[260px] text-base md:text-lg text-[#222731] font-[500] placeholder:text-[13px] md:placeholder:text-lg placeholder:text-[#4b6a9b] placeholder:font-[500] placeholder:leading-[1.92] mt-[-3px]"
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
            className="w-[84px] md:w-[106px] h-[46px] md:h-[50] bg-[#0079ff] rounded-[10px] text-sm md:text-base text-white font-[700] "
          >
            Search
          </button>
        </div>
      </section>
    </div>
  );
}

export default HeadingBar;
