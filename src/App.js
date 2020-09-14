import React, { useState } from "react";
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

  return (
    <div className="flex container h-screen w-full">
      {/* side nav */}
      <div className="w-1/5 border-r border-light px-8 py-2">
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
      </div>
    </div>
  );
}

export default App;
