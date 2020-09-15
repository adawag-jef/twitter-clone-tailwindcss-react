import React from "react";

const TweetSection = ({
  following,
  tweets,
  handleSubmit,
  handleChange,
  tweet,
}) => {
  return (
    <div className="lg:w-1/2 w-4/5 h-full overflow-y-scroll">
      <div className="px-5 py-3 border-b border-lighter flex items-center justify-between">
        <h1 className="text-xl font-bold">Home</h1>
        <i className="far fa-star text-xl text-blue"></i>
      </div>
      <div className="px-5 py-3 border-b-8 border-lighter flex">
        <div className="flex-none mr-4">
          <img
            src="https://randomuser.me/api/portraits/women/7.jpg"
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
          <div className="w-full p-4 border-b hover:bg-lighter transition-all ease-out duration-700 flex">
            <div className="flex-none mr-4">
              <img
                src="https://randomuser.me/api/portraits/women/7.jpg"
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
        <div className="w-full p-4 border-b hover:bg-lighter transition-all ease-out duration-700 flex">
          <div className="flex-none mr-4">
            <img
              src={follow.src}
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
  );
};

export default TweetSection;
