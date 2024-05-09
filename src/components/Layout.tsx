import DrawerSide from "./DrawerSide";
import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Layout() {
  return (
    <div className="drawer lg:drawer-open bg-base-200">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <Header />
        <div className="px-8 py-6 overflow-y-auto">
          <Outlet />
        </div>
      </div>
      {/* aside navbar */}
      <DrawerSide />
    </div>
  );
}
