import { useState } from "react";

function UserProfile(props) {
  // getting date to display user joined time
  const date = new Date(props.userData.created_at);
  const month = date.toLocaleString("default", { month: "long" });
  const day = date.getDate();
  const year = date.getFullYear();

  return (
    <main className="w-[327px] md:w-[573px] lg:w-[730px] flex flex-col items-start lg:items-end bg-[#fefefe] rounded-[15px] shadow-light mt-4 md:mt-6 mb-[50px] md:mb-[60px] pt-5 pl-6 md:p-10 lg:p-12">
      <div className="flex items-center lg:items-start gap-[19px] md:gap-[41px] lg:gap-[37px]">
        <img
          className="w-[70px] md:w-[117px] h-[70px] md:h-[117px] rounded-full"
          src={
            props.userData.avatar_url
              ? `${props.userData.avatar_url}`
              : "/public/assets/octocat.png"
          }
          alt="avatar"
        />
        <div className="flex flex-col items-start">
          <div className="lg:w-[480px] flex justify-between">
            <div className="flex flex-col items-start">
              <h2 className="text-base md:text-[26px] text-[#2b3442] font-[700] ml-[2px] md:ml-0">
                {props.userData.name ? props.userData.name : ""}
              </h2>
              <a
                className="text-sm md:text-base text-[#0079ff] font-[500] lg:mt-[2px]"
                href={props.userData.html_url ? props.userData.html_url : "#"}
              >
                @{props.userData.login ? props.userData.login : ""}
              </a>
              <span className="text-[13px] md:text-[15px] text-[#697c9a] font-[500] mt-[6px] md:mt-1 lg:hidden">
                {day
                  ? `joined at ${day} ${month} ${year}`
                  : "Joined 25 Jan 2011"}
              </span>
            </div>
            <span className="text-[13px] md:text-[15px] text-[#697c9a] font-[500] mt-[6px] md:mt-1 hidden lg:flex">
              {day ? `joined at ${day} ${month} ${year}` : "Joined 25 Jan 2011"}
            </span>
          </div>
          <p className="w-[279px] md:w-auto mt-[33px] md:mt-6 lg:mt-5 text-[13px] md:text-[15px] text-[#4b6a9b] font-[500] leading-[1.92] md:leading-[1.67] hidden lg:flex">
            {props.userData.bio
              ? `${props.userData.bio}`
              : "This profile has no bio."}
          </p>
        </div>
      </div>
      <p className="w-[279px] md:w-auto mt-[33px] md:mt-6 text-[13px] md:text-[15px] text-[#4b6a9b] font-[500] leading-[1.92] md:leading-[1.67] lg:hidden">
        {props.userData.bio
          ? `${props.userData.bio}`
          : "This profile has no bio."}
      </p>
      <div>
        <section className="w-[279px] md:w-[493px] h-[85px] bg-[#f6f8ff] rounded-[10px] flex items-center md:items-start justify-center md:justify-start gap-10 md:gap-[82px] mt-[23px] md:mt-8 lg:mt-[21px] md:pt-[15px] md:pl-8">
          <div className="flex flex-col gap-2 md:gap-[2px] items-center md:items-start md:mr-[17px]">
            <span className="text-[11px] md:text-[13px] text-[#4b6a9b] font-[500]">
              Repos
            </span>
            <span className="text-base md:text-[22px] text-[#2b3442] font-[700]">
              {props.userData.public_repos || props.userData.public_repos == 0
                ? props.userData.public_repos
                : "0"}
            </span>
          </div>
          <div className="flex flex-col gap-2 md:gap-[2px] items-center md:items-start">
            <span className="text-[11px] md:text-[13px] text-[#4b6a9b] font-[500]">
              Followers
            </span>
            <span className="text-base md:text-[22px] text-[#2b3442] font-[700]">
              {props.userData.followers || props.userData.followers == 0
                ? props.userData.followers
                : "0"}
            </span>
          </div>
          <div className="flex flex-col gap-2 md:gap[2px] items-center md:items-start">
            <span className="text-[11px] md:text-[13px] text-[#4b6a9b] font-[500]">
              Following
            </span>
            <span className="text-base md:text-[22px] text-[#2b3442] font-[700]">
              {props.userData.following || props.userData.following == 0
                ? props.userData.following
                : "0"}
            </span>
          </div>
        </section>
        <section className="flex flex-col md:flex-row gap-[17px] md:gap-[85px] lg:gap-[100px] mt-6 md:mt-[34px] lg:mt-[37px] mb-[50px] md:mb-0 lg:ml-1">
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
                } text-[13px] md:text-[15px] text-[#4b6a9b] font-[500]`}
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
                href={`${
                  props.userData.blog && props.userData.blog !== ""
                    ? props.userData.blog
                    : "#"
                }`}
                className={`${
                  props.userData.blog ? "opacity-100" : "opacity-50"
                } text-[13px] md:text-[15px] text-[#4b6a9b] font-[500]`}
              >
                {props.userData.blog
                  ? `${props.userData.blog}`
                  : "Not Available"}
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex gap-[13px] md:gap-[16px] items-center">
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
                } text-[13px] md:text-[15px] text-[#4b6a9b] font-[500]`}
              >
                {props.userData.twitter_username
                  ? `${props.userData.twitter_username}`
                  : "Not Available"}
              </a>
            </div>
            <div className="flex gap-[13px] md:gap-4 items-center">
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
                } text-[13px] md:text-[15px] text-[#4b6a9b] font-[500]`}
              >
                {props.userData.company
                  ? `${props.userData.company}`
                  : "Not Available"}
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default UserProfile;
