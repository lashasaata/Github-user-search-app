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
    <main className="w-[327px] flex flex-col items-start bg-[#fefefe] rounded-[15px] shadow-light mt-4 pt-5 pl-6">
      <div className="flex items-center gap-[19px]">
        <img
          className="w-[70px] h-[70px] rounded-full"
          src={
            props.userData.avatar_url
              ? `${props.userData.avatar_url}`
              : "https://avatars.githubusercontent.com/u/116306097?v=4"
          }
          alt=""
        />
        <div className="flex flex-col items-start">
          <h2 className="text-base text-[#2b3442] font-[700] ml-[2px]">
            {props.userData.name}
          </h2>
          <a className="text-sm text-[#0079ff] font-[500]" href="">
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
      <section>
        <div>
          <div>
            <img src="./assets/icon-location.svg" alt="location_icon" />
            <span>
              {props.userData.location
                ? `${props.userData.location}`
                : "Not Available"}
            </span>
          </div>
          <div>
            <img src="./assets/icon-website.svg" alt="website_icon" />
            <span>
              {props.userData.organizations_url
                ? `${props.userData.organizations_url}`
                : "Not Available"}
            </span>
          </div>
        </div>
        <div>
          <div>
            <img src="./assets/icon-twitter.svg" alt="twitter_icon" />
            <span>
              {props.userData.twitter_username
                ? `${props.userData.twitter_username}`
                : "Not Available"}
            </span>
          </div>
          <div>
            <img src="./assets/icon-company.svg" alt="company_icon" />
            <span>
              {props.userData.company
                ? `${props.userData.company}`
                : "Not Available"}
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}

export default UserProfile;
