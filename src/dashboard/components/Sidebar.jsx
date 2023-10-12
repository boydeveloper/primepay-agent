import React, { useState, useEffect, useRef, useContext } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Settings } from "..";
import {
  CardIcon,
  CashIcon,
  CubeIcon,
  HomeSVG,
  SettingsIcon,
} from "../../utils/svgs";

function Sidebar() {
  return (
    <div className={`fixed top-0 h-full  bg-gray-900 `}>
      <div className="flex-grow flex-col w-[280px] gap-y-6 overflow-y-auto border-r border-gray-200 px-6">
        <div className="flex h-16 shrink-0 items-center py-6 mt-9 mb-5">
          <div className="block mb-5">
            <img
              src="/assets/images/logo.png"
              alt="prirepay logo"
              width="110"
              height="110"
            />
          </div>
        </div>
        <nav className="flex flex-1 flex-col">
          <ul role="list" className="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" className="space-y-3 flex flex-col gap-1">
                <li>
                  <NavLink
                    activeClassName="active"
                    to={"overview"}
                    className="hover:bg-gray-800 text-white group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                  >
                    <HomeSVG />
                    Dashboard
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    activeClassName="active"
                    to={"payouts"}
                    className="text-white hover:bg-gray-800 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                  >
                    <CashIcon />
                    Payout
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    activeClassName="active"
                    to={"transactions"}
                    className="text-white hover:bg-gray-800 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                  >
                    <img
                      src="/assets/images/transaction-icon.png"
                      width={24}
                      alt=""
                      viewBox="0 0 24 24"
                    />
                    Transactions
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    activeClassName="active"
                    to={"customers"}
                    className="text-white hover:bg-gray-800  group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                  >
                    <img
                      src="/assets/images/customer.png"
                      width={24}
                      alt="customers icon"
                      viewBox="0 0 24 24"
                    />
                    Customers
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    activeClassName="active"
                    to={"settings/account"}
                    className="text-white hover:bg-gray-800  group flex gap-x-3 rounded-md items-center p-2 text-sm leading-6 font-semibold"
                  >
                    <SettingsIcon />
                    Settings
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;
