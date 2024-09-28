import React from "react";
import i18n from "../i18n";
import eng from "../images/eng-icon.png";
import ind from "../images/icon-indonesia.png";

const HeaderTwo = () => {
  return (
    <div className="w-full h-10 bg-gradient-to-r from-blue-400 to-sky-400">
      <div className="lang flex text-[15px] font-mono font-semibold text-white float-right mr-10 mt-2">
        <button
          className="hover:underline hover:text-black"
          onClick={() => i18n.changeLanguage("en")}
        >
          <img src={eng} className="h-7 mr-3" alt="FlowBite Logo" />
        </button>
        |&nbsp;
        <button
          className="hover:underline hover:text-black"
          onClick={() => i18n.changeLanguage("ar")}
        >
          <img src={ind} className="h-7 mr-3" alt="FlowBite Logo" />
        </button>
      </div>
    </div>
  );
};

export default HeaderTwo;
