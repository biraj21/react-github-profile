import { BrowserRouter, NavLink, Routes, Route, useSearchParams } from "react-router-dom";
import "./Tabs.scss";

export default function Tabs({ tabs }) {
  const activeClassName = "tab-active";

  return (
    <BrowserRouter>
      <div className="tabs">
        <div className="tabs__links">
          {tabs.map((link) => (
            <NavLink
              to={link.path}
              key={link.path}
              className={({ isActive }) => (isActive ? activeClassName : null)}
              end
            >
              {link.text}
            </NavLink>
          ))}
        </div>

        <div className="tab">
          <Routes>
            {tabs.map((tab) => (
              <Route path={tab.path} key={tab.path} element={tab.element} />
            ))}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
