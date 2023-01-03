import { useState } from "react";
import "./Tabs.scss";

export default function Tabs({ tabs, centeredLinks }) {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  function handleClick(e, tabIndex) {
    e.preventDefault();
    setCurrentTabIndex(tabIndex);
  }

  return (
    <div className="tabs">
      <div className={`tabs__links ${centeredLinks ? "tabs__links--centered" : ""}`}>
        {tabs.map((tab, i) => (
          <a
            href="#"
            key={i}
            className={i === currentTabIndex ? "tab-active" : null}
            onClick={(e) => handleClick(e, i)}
          >
            {tab.linkContent}
          </a>
        ))}
      </div>

      <div className="tab">{tabs[currentTabIndex].element}</div>
    </div>
  );
}
