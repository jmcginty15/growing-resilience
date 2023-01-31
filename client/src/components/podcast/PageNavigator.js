import { useState } from "react";
import "./PageNavigator.css";

const PageNavigator = ({ currentPage, handleNavClick, maxPage }) => {
  const enabledButtons = {
    first: currentPage !== 0,
    prev: currentPage !== 0,
    next: currentPage !== maxPage,
    last: currentPage !== maxPage,
  };

  const handleClick = (buttonId) => {
    if (enabledButtons[buttonId]) handleNavClick(buttonId);
  };

  return (
    <div className="PageNavigator">
      <div className="PageNavigator-container PageNavigator-first">
        <span
          className={`PageNavigator-link${
            enabledButtons.first ? "" : " PageNavigator-disabled"
          }`}
          onClick={() => handleClick("first")}
        >
          First
        </span>
      </div>
      <div className="PageNavigator-container PageNavigator-prev">
        <span
          className={`PageNavigator-link${
            enabledButtons.first ? "" : " PageNavigator-disabled"
          }`}
          onClick={() => handleClick("prev")}
        >
          Previous
        </span>
      </div>
      <div className="PageNavigator-container PageNavigator-middle">
        Page {currentPage + 1} of {maxPage + 1}
      </div>
      <div className="PageNavigator-container PageNavigator-next">
        <span
          className={`PageNavigator-link${
            enabledButtons.last ? "" : " PageNavigator-disabled"
          }`}
          onClick={() => handleClick("next")}
        >
          Next
        </span>
      </div>
      <div className="PageNavigator-container PageNavigator-last">
        <span
          className={`PageNavigator-link${
            enabledButtons.last ? "" : " PageNavigator-disabled"
          }`}
          onClick={() => handleClick("last")}
        >
          Last
        </span>
      </div>
    </div>
  );
};

export default PageNavigator;
