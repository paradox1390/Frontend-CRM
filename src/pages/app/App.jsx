import { Outlet } from "react-router-dom";
import { Header } from "@sections/app/Header";

export const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Outlet />
    </div>
  );
};
