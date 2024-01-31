import { useState, useEffect } from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";

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

import { useUserSelector, loadUser } from "@/store/slice/userSlice";

import { getUser } from "@/api";

const ProtectedRoute = () => {
  let token = localStorage.getItem("token");
  const [isLoading, setIsLoading] = useState(Boolean(token));
  const dispatch = useDispatch();

  const user = useUserSelector();
  console.log("user", user);
  useEffect(() => {
    const userLoading = async () => {
      if (isLoading) {
        const user = await getUser();
        dispatch(loadUser(user));
        setIsLoading(false);
      }
    };
    userLoading();
  }, []);

  if (isLoading) {
    return <span className="loader"></span>;
  }

  if (!user.data) {
    return <Navigate to="/account/authorisation" replace />;
  }
  if (!user.data.confirmed) {
    return <Navigate to="/account/confirm  " replace />;
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
