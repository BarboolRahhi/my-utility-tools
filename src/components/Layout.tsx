import DrawerSide from "./DrawerSide";
import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Layout() {
  return (
    <div className="drawer lg:drawer-open bg-base-200 h-dvh overflow-hidden">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content overflow-auto">
        <Header />
        <div className="p-6 overflow-y-auto">
          <Outlet />
        </div>
      </div>
      {/* aside navbar */}
      <DrawerSide />
    </div>
  );
}
