import React from "react";
import TrendsForYou from "./TrendsForYou";
import WhoToFollow from "./WhoToFollow";

const TrendingSection = () => {
  const trending = [
    { top: "Trending in TX", title: "Gigi", bottom: "Trending with: Gigi" },
    { top: "Music", title: "We Won", bottom: "135K Tweets" },
    { top: "Pop", title: "Blue Ivy", bottom: "40k tweets" },
    { top: "Trending in US", title: "Denim Day", bottom: "40k tweets" },
    { top: "Trending", title: "When Beyonce", bottom: "25.4k tweets" },
  ];

  const friends = [
    {
      src: "https://randomuser.me/api/portraits/women/37.jpg",
      name: "Woman 1",
      handle: "@teslaBoy",
    },
    {
      src: "https://randomuser.me/api/portraits/men/37.jpg",
      name: "Man 1",
      handle: "@detective:)",
    },
    {
      src: "https://randomuser.me/api/portraits/men/20.jpg",
      name: "Man 2",
      handle: "@miniRock",
    },
  ];
  return (
    <div className="hidden md:block w-1/3 h-full border-l border-lighter py-2 px-6 overflow-y-scroll relative">
      <input
        type="text"
        className="pl-12 rounded-full w-full p-2 bg-lighter text-sm focus:shadow-outline focus:outline-none transition-all ease-out duration-700 "
        placeholder="Search Twitter"
      />
      <i className="fas fa-search absolute left-0 top-0 mt-5 ml-12 text-sm text-light"></i>

      <TrendsForYou trending={trending} />

      <WhoToFollow friends={friends} />
    </div>
  );
};

export default TrendingSection;
