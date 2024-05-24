import { NavLink } from "react-router-dom";
import { sideMenuConfig } from "../config";

export default function DrawerSide() {
  return (
    <aside className="drawer-side">
      <label
        htmlFor="my-drawer-2"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <div className="bg-base-100 sticky top-0 z-20 hidden items-center gap-2 bg-opacity-90 px-4 py-2 backdrop-blur lg:flex">
        <a
          href="/"
          aria-current="page"
          aria-label="Homepage"
          className="flex-0 btn btn-ghost px-2"
        >
          <img src="/service.png" alt="logo" className="w-8 h-8" />
          <div className="font-title inline-flex text-lg md:text-2xl logo">
            Utility Tools
          </div>
        </a>
      </div>

      <div className="menu p-4 w-80 min-h-full bg-base-100 text-base-content">
        <div className="form-control lg:hidden">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-full"
          />
        </div>

        <ul className="menu bg-base-100 rounded-box mt-4 lg:mt-0">
          {sideMenuConfig.sideSections.map((section) => (
            <li key={section.sectionName}>
              <details open>
                <summary>
                  {section.section_svg_icon}
                  {section.sectionName}
                </summary>
                <ul>
                  {section.sectionItems.map((item) => (
                    <li key={item.name}>
                      <NavLink
                        to={item.link}
                        className={({ isActive }) => (isActive ? "active" : "")}
                      >
                        {item.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
