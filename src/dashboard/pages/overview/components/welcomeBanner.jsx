import React from "react";

function WelcomeBanner() {
  return (
    <div className="relative  overflow-hidden mb-1">
      <div className="relative text-[#000]">
        <h1 className="text-2xl md:text-4xl font-bold mb-2">
          Welcome, Green! 👋🏾
        </h1>
        <p className="text-sm sm:text-lg">
          Stay ahead with real-time data and actionable metrics.
        </p>
      </div>
    </div>
  );
}

export default WelcomeBanner;
