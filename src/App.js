import React, { useState } from "react";
import SideNav from "./components/navigation/SideNav";
import TrendingSection from "./components/trending/TrendingSection";
import TweetSection from "./components/tweets/TweetSection";

import "./styles/main.css";

function App() {
  const following = [
    {
      src: "https://randomuser.me/api/portraits/men/37.jpg",
      name: "User 1",
      handle: "@teslaBoy",
      time: "20 min",
      tweet: "Should I just quarantine on mars??",
      comments: "1,000",
      retweets: "550",
      like: "1,000,003",
    },
    {
      src: "https://randomuser.me/api/portraits/men/40.jpg",
      name: "Another User",
      handle: "@miniRock",
      time: "55 min",
      tweet: "Should me and the rock do another sub-par movie together????",
      comments: "2,030",
      retweets: "50",
      like: "20,003",
    },
    {
      src: "https://randomuser.me/api/portraits/women/20.jpg",
      name: "User",
      handle: "@teslaBoy",
      time: "1.4 hr",
      tweet: "Haha just made a flame thrower. Shld I sell them?",
      comments: "100,000",
      retweets: "1,000,002",
      like: "5,000,003",
    },
    {
      src: "https://randomuser.me/api/portraits/women/20.jpg",
      name: "User 1",
      handle: "@teslaBoy",
      time: "1.4 hr",
      tweet: "Just did something crazyyyyyyy",
      comments: "100,500",
      retweets: "1,000,032",
      like: "5,000,103",
    },
  ];

  const [tweets, setTweets] = useState([
    {
      content: "It is so nice outside",
    },
  ]);
  const [tweet, setTweet] = useState({ content: "" });

  const handleChange = (e) => {
    setTweet({ [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTweets([tweet, ...tweets]);
    setTweet({ content: "" });
  };

  return (
    <div className="flex h-screen w-full">
      {/* side nav */}
      <SideNav />
      {/* tweets */}
      <TweetSection
        following={following}
        tweets={tweets}
        tweet={tweet}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />

      {/* trending */}
      <TrendingSection />
    </div>
  );
}

export default App;
