import { NavLink } from "react-router-dom";
import { sideMenuConfig } from "../config";
import SearchSvg from "./svg-icon/SearchSvg";
import Input from "./Input";
import { useRef } from "react";

export default function DrawerSide() {
  const ref = useRef<any>(null);
  return (
    <div className="drawer-side z-40">
      <label
        ref={ref}
        htmlFor="my-drawer-2"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <aside className="bg-base-100 min-h-screen w-80">
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

        <div className="bg-base-100 sticky top-0 z-20 lg:hidden bg-opacity-90 px-4 py-2 backdrop-blur flex">
          <Input
            type="text"
            className="grow"
            placeholder="Search..."
            icon={<SearchSvg />}
          />
        </div>

        <ul className="menu px-4">
          {sideMenuConfig.sideSections.map((section) => (
            <li key={section.sectionName}>
              <h2 className="menu-title flex gap-2 items-center">
                {section.section_svg_icon}
                {section.sectionName}
              </h2>
              <ul>
                {section.sectionItems.map((item) => (
                  <li key={item.name} className="">
                    <NavLink
                      to={item.link}
                      onClick={() => {
                        ref?.current?.click();
                      }}
                      className={({ isActive }) =>
                        isActive ? "active !bg-primary dark:!text-white" : ""
                      }
                    >
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}
