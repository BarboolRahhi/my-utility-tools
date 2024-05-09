import { Link, NavLink } from "react-router-dom";

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
          <li>
            <details open>
              <summary>
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                  fill="currentColor"
                >
                  <path d="M12 .037C5.373.037 0 5.394 0 12c0 6.606 5.373 11.963 12 11.963 6.628 0 12-5.357 12-11.963C24 5.394 18.627.037 12 .037zm-.541 4.8c1.91-.13 3.876.395 5.432 1.934 1.426 1.437 2.51 3.44 2.488 5.317h2.133l-4.444 4.963-4.445-4.963h2.313c-.001-1.724-.427-2.742-1.78-4.076-1.325-1.336-2.667-2.11-4.978-2.303a9.245 9.245 0 013.281-.871zM6.934 6.95l4.445 4.963H9.066c0 1.724.426 2.742 1.778 4.076 1.326 1.336 2.667 2.112 4.978 2.305-2.684 1.268-6.22 1.398-8.71-1.064-1.427-1.437-2.512-3.44-2.489-5.317H2.488L6.934 6.95z" />
                </svg>
                Conveter
              </summary>
              <ul>
                <li>
                  {/* <a href="/add-quote-to-text">Add Quote to text</a> */}
                  <NavLink
                    to="/add-quote-to-text"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Add Quote to text
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/text-to-array"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Text to Array
                  </NavLink>
                </li>
                <li>
                  <a>Text to Json</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details open>
              <summary>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m16 10 3-3m0 0-3-3m3 3H5v3m3 4-3 3m0 0 3 3m-3-3h14v-3"
                  />
                </svg>
                Compare
              </summary>
              <ul>
                <li>
                  <NavLink
                    to="/text-compare"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Text
                  </NavLink>
                </li>
                <li>
                  <a>Json</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details open>
              <summary>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m16 10 3-3m0 0-3-3m3 3H5v3m3 4-3 3m0 0 3 3m-3-3h14v-3"
                  />
                </svg>
                Formatter
              </summary>
              <ul>
                <li>
                  <NavLink
                    to="/json-format"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Json
                  </NavLink>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </aside>
  );
}
