import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import { Home } from "@pages/home";
import { Account } from "@pages/account";
import { Registration } from "@pages/account/registration";
import { Authorisation } from "@pages/account/authorisation";
import { ForgotPass } from "@pages/account/forgotPass";
import { Confirm } from "@pages/account/confirm";
import { App } from "@pages/app";
import { Incoming } from "@pages/app/incoming";
import { Orders } from "@pages/app/orders";
import { Page404 } from "@pages/404/";

import { useUserSelector } from "@/store/slice/userSlice";

const ProtectedRoute = () => {
  const user = useUserSelector();
  if (!user) {
    return <Navigate to="/account/authorisation" replace />;
  }
  return <Outlet />;
};

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/account" element={<Account />}>
        <Route index element={<Registration />} />
        <Route path="registration" element={<Registration />} />
        <Route path="confirm" element={<Confirm />} />
        <Route path="authorisation" element={<Authorisation />} />
        <Route path="forgot" element={<ForgotPass />} />
      </Route>
      <Route element={<ProtectedRoute />}>
        <Route path="/app" element={<App />}>
          <Route index element={<Incoming />} />
          <Route path="incoming" element={<Incoming />} />
          <Route path="orders" element={<Orders />} />
        </Route>
      </Route>
      <Route />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};
