import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Logo } from "@components/Logo";

import { useUserSelector, logout } from "@/store/slice/userSlice";

import css from "./header.module.css";

export const Header = () => {
  const user = useUserSelector();

  console.log(user);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };
  return (
    <header className="bg-white">
      <div className=" flex items-center max-w-screen-2xl m-auto px-2.5">
        <Logo />

        <div className="grow flex justify-between items-center border-r border-l ml-8">
          <nav className="flex items-center gap-4">
            <NavLink
              to="/app/incoming"
              className={({ isActive }) =>
                isActive
                  ? `${css.active} flex items-center gap-1 py-6 px-4`
                  : "flex items-center gap-1 py-6 px-4 border-b-4 border-transparent"
              }
            >
              <span className="icon-incoming text-2xl text-gray-500"></span>
              <span className="font-bold text-indigo-950">Вхідні</span>
            </NavLink>
            <NavLink
              to="/app/orders"
              className={({ isActive }) =>
                isActive
                  ? `${css.active} flex items-center gap-1 py-6 px-4`
                  : "flex items-center gap-1 py-6 px-4 border-b-4 border-transparent"
              }
            >
              <span className="icon-cart text-2xl text-gray-500"></span>
              <span className="font-bold text-indigo-950">Замовлення</span>
            </NavLink>
          </nav>
          <div className="flex items-center">
            <span className="font-bold text-indigo-950 text-base">
              {user.name}
            </span>
            <button className="p-5" onClick={() => alert("in development")}>
              <span className="icon-cached text-gray-500 text-3xl"></span>
            </button>
          </div>
        </div>
        <button onClick={onLogout} className="p-5">
          <span className="icon-exit text-gray-500 text-3xl"></span>
        </button>
      </div>
    </header>
  );
};
