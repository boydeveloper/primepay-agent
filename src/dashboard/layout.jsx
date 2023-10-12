import { Outlet } from "react-router-dom";
import { Header, Sidebar } from "./components/index";

function Layout() {
  return (
    <div className="h-full">
      <Header />
      <Sidebar />
      <div className="ml-[280px] mt-[40px] px-[40px]">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
