import React, { useState } from "react";

const NavigationTabs = ({ tabs }) => {
  const [id, setId] = useState("home");
  return (
    <div>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setId(tab.id)}
          className={`${
            id === tab.id ? "text-blue" : ""
          } flex items-center py-2 px-4 mb-3 focus:outline-none hover:bg-lightblue hover:text-blue  transition-all ease-out duration-700 rounded-full mr-auto`}
        >
          <i className={`${tab.icon} text-2xl mr-4 text-left`}></i>
          <p className="hidden lg:block text-lg font-semibold">{tab.title}</p>
        </button>
      ))}
    </div>
  );
};

export default NavigationTabs;
