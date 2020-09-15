import React from "react";
import NavigationTabs from "./NavigationTabs";
import ProfileDropDownMenu from "./ProfileDropDownMenu";

const SideNav = () => {
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

  return (
    <div className="lg:w-1/5 border-r border-light lg:px-6 px-2 py-2 flex flex-col justify-between">
      <div>
        <button className="h-12 w-12 rounded-full hover:bg-lightblue text-3xl text-blue">
          <i className="fab fa-twitter"></i>
        </button>
        <NavigationTabs tabs={tabs} set />
        <button className="text-white bg-blue rounded-full font-semibold focus:outline-none w-12 h-12 lg:h-auto lg:w-full p-3 hover:bg-darkblue">
          <p className="hidden lg:block">Tweet</p>
          <i className="fas fa-plus lg:hidden"></i>
        </button>
      </div>
      <ProfileDropDownMenu />
    </div>
  );
};

export default SideNav;
