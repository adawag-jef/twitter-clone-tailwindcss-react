import React from "react";

const TrendsForYou = ({ trending }) => {
  return (
    <div className="w-full rounded-lg bg-lightest mt-4">
      <div className="flex items-center justify-between p-3">
        <p className="text-lg font-bold">Trends for You</p>
        <i className="fas fa-cog text-lg text-blue"></i>
      </div>
      {trending.map((trend) => (
        <button
          key={trend.top}
          className="w-full flex justify-between hover:bg-lighter transition-all ease-out duration-700 p-3 border-t border-lighter focus:outline-none"
        >
          <div>
            <p className="text-sm text-left leading-tight text-dark">
              {trend.top}
            </p>
            <p className="font-bold text-left leading-tight">{trend.title}</p>
            <p className="text-left leading-tight text-dark">{trend.bottom}</p>
          </div>
          <i className="fas fa-angle-down text-lg text-dark"></i>
        </button>
      ))}
      <button className="w-full p-3 hover:bg-lighter transition-all ease-out duration-700 text-left text-blue border-t border-lighter focus:outline-none">
        Show more
      </button>
    </div>
  );
};

export default TrendsForYou;
