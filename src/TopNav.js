import React from "react";

import "./TopNav.css";

 const TopNav = () => {
  return (
    <div className="top-nav">
      <div className="top-nav-container">
        <div className="top-nav-title">
          <p>Brand Waali Quality.Bazaar Waali Deal!</p>
        </div>
        <div className="top-nav-navbar">
          <nav>
            <ul className="top-nav-list">
              <li>
                <a href="/#">Impact@Snapdeal</a>
              </li>
              <li>
                <a href="/#">GiftCards</a>
              </li>
              <li>
                <a href="/#">HelpCenter</a>
              </li>
              <li>
                <a href="/#">Sell On Snapdeal</a>
              </li>

                <p className="downloadApp">
                Download App
                </p>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};
export default TopNav;