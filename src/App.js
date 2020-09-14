import React, { useState } from "react";
import profileImg from "./images/profile.png";
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

  const [id, setId] = useState("home");
  const [dropdown, setDropdown] = useState(false);

  return (
    <div className="flex container h-screen w-full">
      {/* side nav */}
      <div className="w-1/5 border-r border-light px-8 py-2 flex flex-col justify-between">
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
                <p className="text-lg font-semibold">{tab.title}</p>
              </button>
            ))}
          </div>
          <button className="text-white bg-blue rounded-full font-semibold focus:outline-none w-full p-3 hover:bg-darkblue">
            Tweet
          </button>
        </div>
        <div className="w-full relative">
          <button
            onClick={() => setDropdown(true)}
            className="flex items-center w-full hover:bg-lightblue rounded-full p-2 focus:outline-none"
          >
            <img
              src={profileImg}
              alt="profile image"
              className="w-10 h-10 rounded-full border-lighter"
            />
            <div className="ml-4">
              <p className="text-sm font-bold leading-tight">Jane Doe</p>
              <p className="text-sm leading-tight">@jDoe</p>
            </div>
            <i className="fas fa-angle-down ml-auto text-lg"></i>
          </button>
          {dropdown && (
            <div className="absolute left-0 bottom-0 w-64 rounded-lg shadow-md border-lightest bg-white mb-16">
              <button
                onClick={() => setDropdown(false)}
                className="flex items-center w-full hover:bg-lightest p-3 focus:outline-none"
              >
                <img
                  src={profileImg}
                  alt="profile image"
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
    </div>
  );
}

export default App;
