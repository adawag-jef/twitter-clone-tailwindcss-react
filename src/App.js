import React, { useState } from "react";
// import profileImg from "./images/profile.png";

import "./styles/main.css";

function App() {
  const tabs = [
    { icon: "fas fa-home", title: "Home", id: "home" },
    { icon: "fas fa-hashtag", title: "Explore", id: "explore" },
    { icon: "far fa-bell", title: "Notifications", id: "notifications" },
    { icon: "far fa-envelope", title: "Messages", id: "messages" },
    { icon: "far fa-bookmark", title: "Bookmarks", id: "bookmarks" },
    { icon: "fas fa-clipboard-list", title: "Lists", id: "lists" },
    { icon: "far fa-user", title: "Profile", id: "profile" },
    { icon: "fas fa-ellipsis-h", title: "More", id: "more" },
  ];

  const trending = [
    { top: "Trending in TX", title: "Gigi", bottom: "Trending with: Rip Gigi" },
    { top: "Music", title: "We Won", bottom: "135K Tweets" },
    { top: "Pop", title: "Blue Ivy", bottom: "40k tweets" },
    { top: "Trending in US", title: "Denim Day", bottom: "40k tweets" },
    { top: "Trending", title: "When Beyonce", bottom: "25.4k tweets" },
  ];

  const friends = [
    { src: "elon.jpg", name: "Elon Musk", handle: "@teslaBoy" },
    { src: "monk.jpg", name: "Adrian Monk", handle: "@detective:)" },
    { src: "kevin.jpg", name: "Kevin Hart", handle: "@miniRock" },
  ];

  const following = [
    {
      src: "elon.jpg",
      name: "Elon Musk",
      handle: "@teslaBoy",
      time: "20 min",
      tweet: "Should I just quarantine on mars??",
      comments: "1,000",
      retweets: "550",
      like: "1,000,003",
    },
    {
      src: "kevin.jpg",
      name: "Kevin Hart",
      handle: "@miniRock",
      time: "55 min",
      tweet: "Should me and the rock do another sub-par movie together????",
      comments: "2,030",
      retweets: "50",
      like: "20,003",
    },
    {
      src: "elon.jpg",
      name: "Elon Musk",
      handle: "@teslaBoy",
      time: "1.4 hr",
      tweet: "Haha just made a flame thrower. Shld I sell them?",
      comments: "100,000",
      retweets: "1,000,002",
      like: "5,000,003",
    },
    {
      src: "elon.jpg",
      name: "Elon Musk",
      handle: "@teslaBoy",
      time: "1.4 hr",
      tweet: "Just did something crazyyyyyyy",
      comments: "100,500",
      retweets: "1,000,032",
      like: "5,000,103",
    },
  ];

  const [id, setId] = useState("home");
  const [dropdown, setDropdown] = useState(false);
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
      <div className="lg:w-1/5 border-r border-light lg:px-6 px-2 py-2 flex flex-col justify-between">
        <div>
          <button className="h-12 w-12 rounded-full hover:bg-lightblue text-3xl text-blue">
            <i className="fab fa-twitter"></i>
          </button>
          <div>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setId(tab.id)}
                className={`${
                  id === tab.id ? "text-blue" : ""
                } flex items-center py-2 px-4 mb-3 focus:outline-none hover:bg-lightblue hover:text-blue rounded-full mr-auto`}
              >
                <i className={`${tab.icon} text-2xl mr-4 text-left`}></i>
                <p className="hidden lg:block text-lg font-semibold">
                  {tab.title}
                </p>
              </button>
            ))}
          </div>
          <button className="text-white bg-blue rounded-full font-semibold focus:outline-none w-12 h-12 lg:h-auto lg:w-full p-3 hover:bg-darkblue">
            <p className="hidden lg:block">Tweet</p>
            <i className="fas fa-plus lg:hidden"></i>
          </button>
        </div>
        <div className="lg:w-full relative">
          <button
            onClick={() => setDropdown(true)}
            className="flex items-center w-full hover:bg-lightblue rounded-full p-2 focus:outline-none"
          >
            <img
              src="./images/profile.png"
              alt="profile of user"
              className="w-10 h-10 rounded-full border-lighter"
            />
            <div className="hidden lg:block ml-4">
              <p className="text-sm font-bold leading-tight">Jane Doe</p>
              <p className="text-sm leading-tight">@jDoe</p>
            </div>
            <i className="hidden lg:block fas fa-angle-down ml-auto text-lg"></i>
          </button>
          {dropdown && (
            <div className="absolute left-0 bottom-0 w-64 rounded-lg shadow-md border-lightest bg-white mb-16">
              <button
                onClick={() => setDropdown(false)}
                className="flex items-center w-full hover:bg-lightest p-3 focus:outline-none"
              >
                <img
                  src="./images/profile.png"
                  alt="profile pic"
                  className="w-10 h-10 rounded-full border-lighter"
                />
                <div className="ml-4">
                  <p className="text-sm font-bold leading-tight">Jane Doe</p>
                  <p className="text-sm leading-tight">@jDoe</p>
                </div>
                <i className="fas fa-check ml-auto text-blue"></i>
              </button>
              <button
                onClick={() => setDropdown(false)}
                className="w-full text-left hover:bg-lightest border-t border-lighter p-3 text-sm focus:outline-none"
              >
                Add existing account
              </button>
              <button
                onClick={() => setDropdown(false)}
                className="w-full text-left hover:bg-lightest border-t border-lighter p-3 text-sm focus:outline-none"
              >
                Log out @jDoe
              </button>
            </div>
          )}
        </div>
      </div>

      {/* tweets */}
      <div className="lg:w-1/2 w-4/5 h-full overflow-y-scroll">
        <div className="px-5 py-3 border-b border-lighter flex items-center justify-between">
          <h1 className="text-xl font-bold">Home</h1>
          <i className="far fa-star text-xl text-blue"></i>
        </div>
        <div className="px-5 py-3 border-b-8 border-lighter flex">
          <div className="flex-none mr-4">
            <img
              src="./images/profile.png"
              alt="profile pic"
              className="h-12 w-12 rounded-full flex-none"
            />
          </div>
          <form className="w-full px-4 relative" onSubmit={handleSubmit}>
            <textarea
              name="content"
              onChange={handleChange}
              value={tweet.content}
              placeholder="What's up?"
              className="w-full mt-3 pb-3 focus:outline-none"
            ></textarea>
            <div className="flex items-center">
              <i className="text-lg text-blue mr-4 far fa-image"></i>
              <i className="text-lg text-blue mr-4 fas fa-film"></i>
              <i className="text-lg text-blue mr-4 far fa-chart-bar"></i>
              <i className="text-lg text-blue mr-4 far fa-smile"></i>
            </div>
            <button
              type="submit"
              disabled={!tweet.content.length}
              className={`${
                !tweet.content.length ? "opacity-50 cursor-not-allowed" : ""
              } absolute bottom-0 right-0 h-10 px-4 text-white font-semibold bg-blue hover:bg-darkblue rounded-full focus:outline-none`}
            >
              Tweet
            </button>
          </form>
        </div>
        {tweets.map((tweet) => (
          <div className="flex flex-col-reverse">
            <div className="w-full p-4 border-b hover:bg-lighter flex">
              <div className="flex-none mr-4">
                <img
                  src="./images/profile.png"
                  alt="profile pic"
                  className="h-12 w-12 rounded-full flex-none"
                />
              </div>
              <div className="w-full">
                <div className="flex items-center w-full">
                  <p className="font-semibold"> Jane Doe </p>
                  <p className="text-sm text-dark ml-2"> @jDoe </p>
                  <p className="text-sm text-dark ml-2"> 1 sec </p>
                  <i className="fas fa-angle-down text-dark ml-auto"></i>
                </div>
                <p className="py-2">{tweet.content}</p>
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center text-sm text-dark">
                    <i className="far fa-comment mr-3"></i>
                    <p> 0 </p>
                  </div>
                  <div className="flex items-center text-sm text-dark">
                    <i className="fas fa-retweet mr-3"></i>
                    <p> 0 </p>
                  </div>
                  <div className="flex items-center text-sm text-dark">
                    <i className="fas fa-heart mr-3"></i>
                    <p> 1 </p>
                  </div>
                  <div className="flex items-center text-sm text-dark">
                    <i className="fas fa-share-square mr-3"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {following.map((follow) => (
          <div className="w-full p-4 border-b hover:bg-lighter flex">
            <div className="flex-none mr-4">
              <img
                src={`./images/${follow.src}`}
                alt="profile pic"
                className="w-12 h-12 rounded-full flex-none"
              />
            </div>
            <div className="w-full">
              <div className="flex items-center w-full">
                <p className="font-semibold">{follow.name}</p>
                <p className="text-sm text-dark ml-2">{follow.handle}</p>
                <p className="text-sm text-dark ml-2">{follow.time}</p>
                <i className="fas fa-angle-down text-dark ml-auto"></i>
              </div>
              <p className="py-2">{follow.tweet}</p>
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center text-sm text-dark">
                  <i className="mr-3 far fa-comment"></i>
                  <p>{follow.comments}</p>
                </div>
                <div className="flex items-center text-sm text-dark">
                  <i className="mr-3 fas fa-retweet"></i>
                  <p>{follow.retweet}</p>
                </div>
                <div className="flex items-center text-sm text-dark">
                  <i className="mr-3 far fa-heart"></i>
                  <p>{follow.like}</p>
                </div>
                <div className="flex items-center text-sm text-dark">
                  <i className="mr-3 far fa-share-square"></i>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* trending */}
      <div className="hidden md:block w-1/3 h-full border-l border-lighter py-2 px-6 overflow-y-scroll relative">
        <input
          type="text"
          className="pl-12 rounded-full w-full p-2 bg-lighter text-sm focus:outline-none"
          placeholder="Search Twitter"
        />
        <i className="fas fa-search absolute left-0 top-0 mt-5 ml-12 text-sm text-light"></i>
        <div className="w-full rounded-lg bg-lightest mt-4">
          <div className="flex items-center justify-between p-3">
            <p className="text-lg font-bold">Trends for You</p>
            <i className="fas fa-cog text-lg text-blue"></i>
          </div>
          {trending.map((trend) => (
            <button
              key={trend.top}
              className="w-full flex justify-between hover:bg-lighter p-3 border-t border-lighter focus:outline-none"
            >
              <div>
                <p className="text-sm text-left leading-tight text-dark">
                  {trend.top}
                </p>
                <p className="font-bold text-left leading-tight">
                  {trend.title}
                </p>
                <p className="text-left leading-tight text-dark">
                  {trend.bottom}
                </p>
              </div>
              <i className="fas fa-angle-down text-lg text-dark"></i>
            </button>
          ))}
          <button className="w-full p-3 hover:bg-lighter text-left text-blue border-t border-lighter focus:outline-none">
            Show more
          </button>
        </div>

        <div className="w-full rounded-lg bg-lightest my-4 ">
          <div className="p-3">
            <p className="text-lg font-bold">Who to follow</p>
          </div>
          {friends.map((friend) => (
            <button
              key={friend.handle}
              className="w-full flex hover:bg-lighter p-3 border-t border-lighter focus:outline-none"
            >
              <img
                src={`./images/${friend.src}`}
                alt="friend pic"
                className="w-12 h-12 rounded-full border-lighter"
              />
              <div className="ml-4">
                <p className="text-sm font-bold leading-tight">
                  {friends.name}
                </p>
                <p className="text-sm leading-tight">{friend.handle}</p>
              </div>
              <a
                href="/"
                className="ml-auto text-sm text-blue py-2 px-4 rounded-full border-2 border-blue"
              >
                Follow
              </a>
            </button>
          ))}
          <button className="w-full p-3 hover:bg-lighter text-left text-blue border-t border-lighter focus:outline-none">
            Show more
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
