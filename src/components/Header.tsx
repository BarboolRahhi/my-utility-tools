import { useNavigate } from "react-router-dom";
import { searchDataList } from "../config";
import CurrentTimeAndDate from "./CurrentTimeAndDate";
import { Search } from "./ui/Search";

export default function Header() {
  const navigate = useNavigate();

  return (
    <div className="navbar sticky top-0 z-30 bg-base-100 justify-between lg:justify-between lg:px-6">
      <span
        className="tooltip tooltip-bottom before:text-xs before:content-[attr(data-tip)] lg:hidden"
        data-tip="Menu"
      >
        <label
          aria-label="Open menu"
          htmlFor="my-drawer-2"
          className="btn btn-square btn-ghost drawer-button lg:hidden "
        >
          <svg
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-5 w-5 stroke-current md:h-6 md:w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </span>
      <div className="lg:hidden">
        <a
          href="/"
          aria-current="page"
          aria-label="Homepage"
          className="flex-0 btn btn-ghost px-2"
        >
          <img src="/service.png" alt="logo" className="w-8 h-8 logo" />
          <div className="font-title inline-flex text-lg md:text-2xl logo">
            Utility Tools
          </div>
        </a>
      </div>

      <Search
        className="lg:flex hidden"
        placeholder="Search..."
        resetOnSelect
        data={searchDataList}
        valueField="name"
        onItemClick={(item) => {
          navigate(item.path);
        }}
        itemKey={(item) => item.path}
        itemFn={(item) => <div>{item.name}</div>}
        filterFn={(item, query) =>
          item.name.toLowerCase().includes(query.toLowerCase()) ||
          item.path.toLowerCase().includes(query.toLowerCase())
        }
      />

      <div className="">
        <CurrentTimeAndDate className="hidden lg:flex" />

        <label className="swap swap-rotate ml-auto mr-4 lg:mr-0 lg:ml-4">
          {/* this hidden checkbox controls the state */}
          <input
            type="checkbox"
            className="theme-controller"
            value="dark"
            onChange={(e) => {
              console.log(e.target.checked);
              if (e.target.checked) {
                document.documentElement.dataset.theme = "dark";
              } else {
                document.documentElement.dataset.theme = "light";
              }
            }}
          />

          {/* sun icon */}
          <svg
            className="swap-off fill-current w-7 h-7"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          {/* moon icon */}
          <svg
            className="swap-on fill-current w-7 h-7"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
      </div>
    </div>
  );
}
