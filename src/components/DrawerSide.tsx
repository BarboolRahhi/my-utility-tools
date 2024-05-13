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
          <svg
            viewBox="0 0 999.871 1000"
            className="w-6 h-6 text-red-500"
            fill="currentColor"
            height="1em"
            width="1em"
          >
            <path d="M154.54 344c-5.334 5.333-9 12.667-11 22s-3 17.667-3 25c0 7.333-.668 11-2 11-1.334 1.333-7 6.333-17 15s-16.334 14.333-19 17c-10.668 9.333-20 8-28-4l-70-76c-6.668-8-6-16 2-24 1.332-1.333 7.332-6 18-14 10.666-8 17.332-13.333 20-16 4-4 13-6 27-6s26.332-4.667 37-14c9.332-9.333 15.332-22 18-38 2.666-16 6-26 10-30 1.332 0 4.332-2.333 9-7 4.666-4.667 13.332-12 26-22 12.666-10 26.332-20.333 41-31 89.332-60 151.332-92 186-96 81.332 0 130.666.667 148 2 8 0 5.332 2.667-8 8-80 34.667-130.668 60-152 76-53.334 37.333-65.334 75.333-36 114 22.666 30.667 35.332 46.667 38 48 5.332 5.333 4.666 10-2 14-1.334 1.333-14 13-38 35s-36.668 33.667-38 35c-9.334 5.333-15.334 6.667-18 4-28-32-51.668-52-71-60-19.334-8-41.668-4-67 12m286 26l410 476c12 14.667 11.332 27.333-2 38l-48 42c-14.668 9.333-27.334 8-38-4l-414-472c-5.334-5.333-5.334-12 0-20l72-62c8-5.333 14.666-4.667 20 2m554-202c10.666 69.333 5.332 124.667-16 166-33.334 58.667-84.668 79.333-154 62-37.334-8-70.668 2.667-100 32l-82 78-68-78 68-70c16-16 26.332-33.667 31-53 4.666-19.333 6.666-41 6-65-.668-24 1-43.333 5-58 8-37.333 54.666-74.667 140-112 8-4 14-3 18 3s4.666 11 2 15c-8 8-23.334 34.667-46 80-9.334 6.667-13.334 18.333-12 35 1.332 16.667 14.666 34.333 40 53 38.666 26.667 70.666 19.333 96-22 4-8 12.666-21.667 26-41 13.332-19.333 20.666-30.333 22-33 2.666-6.667 7-9.667 13-9 6 .667 9.666 6.333 11 17m-858 684l254-248 76 86-246 242c-13.334 13.333-26 14.667-38 4l-46-46c-14.668-12-14.668-24.667 0-38" />
          </svg>
          <div className="font-title inline-flex text-lg md:text-2xl">
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
