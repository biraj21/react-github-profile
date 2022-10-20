import { useState } from "react";
import "./Tabs.scss";

export default function Tabs({ tabs }) {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  function handleClick(e, tabIndex) {
    e.preventDefault();
    setCurrentTabIndex(tabIndex);
  }

  const activeClassName = "tab-active";

  return (
    <div className="tabs">
      <div className="tabs__links">
        {tabs.map((tab, i) => (
          <a
            href="#"
            key={i}
            className={i === currentTabIndex ? activeClassName : null}
            onClick={(e) => handleClick(e, i)}
          >
            {tab.text}
          </a>
        ))}
      </div>

      <div className="tab">{tabs[currentTabIndex].element}</div>
    </div>
  );
}
