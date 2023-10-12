import React from "react";
import { DefaultProfileIcon } from "../../utils/svgs";

function Header() {
  return (
    <header className="sticky top-0 bg-white w-full shadow-sm border-slate-200 ">
      <div className=" sm:px-6 lg:px-8 ">
        <div className="flex items-center justify-between h-16 mb-px">
          <div className="flex items-center space-x-3 justify-end w-full">
            <div className="ml-auto flex items-center gap-1">
              <DefaultProfileIcon />
              <div className="font-[500]">Tyler Green</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
