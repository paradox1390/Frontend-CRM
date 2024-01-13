import { Outlet, NavLink } from "react-router-dom";

import MainCss from "./main.module.css";

export const Main = () => {
  return (
    <main className="grow bg-aliceBlue flex items-center justify-center">
      <div className="flex basis-1/2 gap-6">
        <div className="w-[200px] flex flex-col gap-6">
          <NavLink
            to="/account/registration"
            className={({ isActive }) => (isActive ? `${MainCss.active}` : "")}
          >
            <div className={`${MainCss.formTab} transition-all duration-1000`}>
              <span className="icon-registration text-6xl text-gray-500 transition-all duration-300"></span>
              <span className="text-sm font-bold uppercase text-indigo-950 transition-all duration-300">
                Регістрація
              </span>
            </div>
          </NavLink>
          <NavLink
            to="/account/authorisation"
            className={({ isActive }) => (isActive ? `${MainCss.active}` : "")}
          >
            <div className={`${MainCss.formTab} transition-all duration-1000`}>
              <span className="icon-authorisation text-6xl text-gray-500 transition-all duration-300"></span>
              <span className="text-sm font-bold uppercase text-indigo-950 transition-all duration-300">
                Авторизація
              </span>
            </div>
          </NavLink>
          <NavLink
            to="/account/forgot"
            className={({ isActive }) => (isActive ? `${MainCss.active}` : "")}
          >
            <div className={`${MainCss.formTab} transition-all duration-1000`}>
              <span className="icon-forgot-pass text-6xl text-gray-500 transition-all duration-300"></span>
              <span className="text-sm font-bold uppercase text-indigo-950 transition-all duration-300">
                Забули пароль?
              </span>
            </div>
          </NavLink>
        </div>
        <div className={`w-[550px] p-8 bg-white`}>
          <Outlet />
        </div>
      </div>
    </main>
  );
};
