import { useState } from "react";

function UserProfile(props) {
  //   const [useTime, setUseTime] = useState({});
  //   if (props.userData.created_at) {
  //     const time = props.userData.created_at;

  //     // Create a new Date object from the timestamp
  //     const dateObj = new Date(time);

  //     // Extract day, month, and year
  //     const day = dateObj.getUTCDate();
  //     const month = dateObj.getUTCMonth() + 1; // Month is zero-indexed, so we add 1
  //     const year = dateObj.getUTCFullYear();
  //     // setUseTime({
  //     //   day: day,
  //     //   month: month,
  //     //   year: year,
  //     // });
  // }
  return (
    <main className="w-[327px] flex flex-col items-start bg-[#fefefe] rounded-[15px] shadow-light mt-4 mb-[50px] pt-5 pl-6">
      <div className="flex items-center gap-[19px]">
        <img
          className="w-[70px] h-[70px] rounded-full"
          src={
            props.userData.avatar_url
              ? `${props.userData.avatar_url}`
              : "https://avatars.githubusercontent.com/u/116306097?v=4"
          }
          alt="avatar"
        />
        <div className="flex flex-col items-start">
          <h2 className="text-base text-[#2b3442] font-[700] ml-[2px]">
            {props.userData.name}
          </h2>
          <a
            className="text-sm text-[#0079ff] font-[500]"
            href={`${props.userData.html_url}`}
          >
            @{props.userData.login}
          </a>
          <span className="text-[13px] text-[#697c9a] font-[500] mt-[6px]">
            joined at
          </span>
        </div>
      </div>
      <p className="w-[279px] mt-[33px] text-[13px] text-[#4b6a9b] font-[500] leading-[1.92]">
        {props.userData.bio
          ? `${props.userData.bio}`
          : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros."}
      </p>
      <section className="w-[279px] h-[85px] bg-[#f6f8ff] rounded-[10px] flex items-center justify-center gap-10 mt-[23px]">
        <div className="flex flex-col gap-2 items-center">
          <span className="text-[11px] text-[#4b6a9b] font-[500]">Repos</span>
          <span className="text-base text-[#2b3442] font-[700]">
            {props.userData.public_repos}
          </span>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <span className="text-[11px] text-[#4b6a9b] font-[500]">
            Followers
          </span>
          <span className="text-base text-[#2b3442] font-[700]">
            {props.userData.followers}
          </span>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <span className="text-[11px] text-[#4b6a9b] font-[500]">
            Following
          </span>
          <span className="text-base text-[#2b3442] font-[700]">
            {props.userData.following}
          </span>
        </div>
      </section>
      <section className="flex flex-col gap-[17px] mt-6 mb-[50px]">
        <div className="flex flex-col gap-[17px]">
          <div className="flex gap-[19px] items-center">
            <img
              className={`${
                props.userData.location ? "opacity-100" : "opacity-50"
              }`}
              src="./assets/icon-location.svg"
              alt="location_icon"
            />
            <a
              className={`${
                props.userData.location ? "opacity-100" : "opacity-50"
              } text-[13px] text-[#4b6a9b] font-[500]`}
            >
              {props.userData.location
                ? `${props.userData.location}`
                : "Not Available"}
            </a>
          </div>
          <div className="flex gap-[13px] items-center">
            <img
              className={`${
                props.userData.blog ? "opacity-100" : "opacity-50"
              }`}
              src="./assets/icon-website.svg"
              alt="website_icon"
            />
            <a
              href={props.userData.blog}
              className={`${
                props.userData.blog ? "opacity-100" : "opacity-50"
              } text-[13px] text-[#4b6a9b] font-[500]`}
            >
              {props.userData.blog ? `${props.userData.blog}` : "Not Available"}
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex gap-[13px] items-center">
            <img
              className={`${
                props.userData.twitter_username ? "opacity-100" : "opacity-50"
              }`}
              src="./assets/icon-twitter.svg"
              alt="twitter_icon"
            />
            <a
              className={`${
                props.userData.twitter_username ? "opacity-100" : "opacity-50"
              } text-[13px] text-[#4b6a9b] font-[500]`}
            >
              {props.userData.twitter_username
                ? `${props.userData.twitter_username}`
                : "Not Available"}
            </a>
          </div>
          <div className="flex gap-[13px] items-center">
            <img
              className={`${
                props.userData.company ? "opacity-100" : "opacity-50"
              }`}
              src="./assets/icon-company.svg"
              alt="company_icon"
            />
            <a
              className={`${
                props.userData.company ? "opacity-100" : "opacity-50"
              } text-[13px] text-[#4b6a9b] font-[500]`}
            >
              {props.userData.company
                ? `${props.userData.company}`
                : "Not Available"}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default UserProfile;
