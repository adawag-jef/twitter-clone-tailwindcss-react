import React from "react";

const WhoToFollow = ({ friends }) => {
  return (
    <div className="w-full rounded-lg bg-lightest my-4 ">
      <div className="p-3">
        <p className="text-lg font-bold">Who to follow</p>
      </div>
      {friends.map((friend) => (
        <button
          key={friend.handle}
          className="w-full flex hover:bg-lighter transition-all ease-out duration-700 p-3 border-t border-lighter focus:outline-none"
        >
          <img
            src={friend.src}
            alt="friend pic"
            className="w-12 h-12 rounded-full border-lighter"
          />
          <div className="ml-4">
            <p className="text-sm font-bold leading-tight">{friends.name}</p>
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
      <button className="w-full p-3 hover:bg-lighter transition-all ease-out duration-700 text-left text-blue border-t border-lighter focus:outline-none">
        Show more
      </button>
    </div>
  );
};

export default WhoToFollow;
