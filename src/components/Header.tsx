export default function Header() {
  return (
    <div className="navbar sticky top-0 z-30 bg-base-100 lg:justify-end lg:px-9">
      <span
        className="tooltip tooltip-bottom before:text-xs before:content-[attr(data-tip)]"
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
      <label className="input input-bordered input-sm lg:flex items-center gap-2 hidden">
        <input type="text" className="grow" placeholder="Search..." />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="w-4 h-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>

      <label className="flex cursor-pointer gap-2 ml-auto mr-4 lg:mr-0 lg:ml-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
        </svg>
        <input
          type="checkbox"
          value="light"
          className="toggle theme-controller"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      </label>
    </div>
  );
}
