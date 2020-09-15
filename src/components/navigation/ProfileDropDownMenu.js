import React, { useState } from "react";

const ProfileDropDownMenu = () => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <div className="lg:w-full relative">
      <button
        onClick={() => setDropdown(true)}
        className="flex items-center w-full hover:bg-lightblue transition-all ease-out duration-700 rounded-full p-2 focus:outline-none"
      >
        <img
          src="https://randomuser.me/api/portraits/women/7.jpg"
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
            className="flex items-center w-full hover:bg-lightest transition-all ease-out duration-700 p-3 focus:outline-none"
          >
            <img
              src="https://randomuser.me/api/portraits/women/7.jpg"
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
  );
};

export default ProfileDropDownMenu;
