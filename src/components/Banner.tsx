import React from "react";

type Props = {};

const Banner = (props: Props) => {
  return (

    <div className="banner-container overflow-hidden bg-gradient-to-r from-[#feca98] to-[#d6dac1] via-[#e7d8ad] p-4">
    <div className="sliding-text flex space-x-4 lg:space-x-10 ">
      <span className="text-[#0E0E0E] font-bold text-xl">WE&apos;RE ON A MISSION</span>
      <span className="text-[#0E0E0E] hidden lg:flex font-bold text-xl">WE&apos;RE ON A MISSION</span>
      <span className="text-[#0E0E0E] hidden lg:flex font-bold text-xl">WE&apos;RE ON A MISSION</span>
      <span className="text-[#0E0E0E] hidden lg:flex font-bold text-xl">WE&apos;RE ON A MISSION</span>
      <span className="text-[#0E0E0E] hidden lg:flex font-bold text-xl">WE&apos;RE ON A MISSION</span>
    </div>
  </div>
  );
};

export default Banner;
