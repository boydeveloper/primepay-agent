import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { CardIcon, IdIcon, PersonIcon } from "../../../../utils/svgs";

function Sidebar() {
  const location = useLocation();
  const { pathname } = location;

  const isActive = (path) => pathname.includes(path);

  const navLinkClasses = (path) =>
    `flex items-center gap-2 px-2.5 py-2 rounded whitespace-nowrap ${
      isActive(path) ? "bg-[#003569] text-white" : ""
    }`;

  return (
    <div className="md:block px-3 py-6  min-h-[100vh]  border-solid w-[20%]  border-b md:border-b-0 md:border-r border-slate-200">
      <div>
        <div className="text-xs font-semibold text-slate-400 uppercase mb-3">
          Agent settings
        </div>
        <ul className="md:block flex flex-col items-start mr-3 md:mr-0">
          <li className="md:mr-0 md:mb-0.5">
            <NavLink
              end
              to="account"
              className={navLinkClasses("/settings/account")}
            >
              <PersonIcon fill={`${isActive("/settings/account") && "#fff"}`} />
              <span
                className={`text-sm font-medium ${
                  isActive("/settings/account")
                    ? "text-white"
                    : "text-slate-800"
                }`}
              >
                My Account
              </span>
            </NavLink>
          </li>
          <li className="md:mr-0 md:mb-0.5">
            <NavLink
              end
              to="compliance"
              className={navLinkClasses("/settings/compliance")}
            >
              <IdIcon fill={`${isActive("/settings/compliance") && "#fff"}`} />
              <span
                className={`text-sm font-medium ${
                  isActive("/settings/compliance")
                    ? "text-white"
                    : "hover:text-slate-700"
                }`}
              >
                Compliance
              </span>
            </NavLink>
          </li>
          <li className="md:mr-0 md:mb-0.5">
            <NavLink
              end
              to="payouts"
              className={navLinkClasses("/settings/payouts")}
            >
              <CardIcon fill={`${isActive("/settings/payouts") && "#fff"}`} />
              <span
                className={`text-sm font-medium ${
                  isActive("/settings/payouts")
                    ? "text-white"
                    : "hover:text-slate-700"
                }`}
              >
                Payout Accounts
              </span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
