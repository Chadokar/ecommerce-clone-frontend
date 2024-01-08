import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Signup from "./auth/Signup";
import { Home } from "./basic/Home";
import { UserHome } from "./userhome/UserHome";
import HomeAccount from "./account/HomeAccount";
import { Profile } from "./account/Profile";
import { Orders } from "./account/Orders";
import { Address } from "./account/Address";
import Items from "./userhome/Items";
import Product from "./userhome/Product";
import RequireAuth from "./auth/useAuth";
import BeSeller from "./auth/BeSeller";
import Cart from "./userhome/Cart";
import Addproduct from "./userhome/Addproduct";
import { fetchUserData } from "./auth/userData";
import { useDispatch } from "react-redux";
import Login from "./auth/Login";

export const Navigation = () => {
  const dispatch = useDispatch();

  const navItems = [
    {
      path: "/signup",
      element: (
        <Suspense fallback={<h1>Loading</h1>}>
          <Signup />
        </Suspense>
      ),
    },
    {
      path: "/login",
      element: (
        <Suspense fallback={<h1>Loading</h1>}>
          <Login />
        </Suspense>
      ),
    },
    {
      path: "/user",
      element: (
        <Suspense fallback={<h1>Loading</h1>}>
          <UserHome />
        </Suspense>
      ),
      protected: false,
    },
    {
      path: "/items",
      element: (
        <Suspense fallback={<h1>Loading</h1>}>
          <Items />
        </Suspense>
      ),
      protected: false,
    },
    {
      path: "/product/:productId",
      element: (
        <Suspense fallback={<h1>Loading</h1>}>
          <Product />
        </Suspense>
      ),
      protected: false,
    },
    {
      path: "/cart",
      element: (
        <Suspense fallback={<h1>Loading</h1>}>
          <Cart />
        </Suspense>
      ),
      protected: true,
    },
    {
      path: "/register-seller",
      element: (
        <Suspense fallback={<h1>Loading</h1>}>
          <BeSeller />
        </Suspense>
      ),
      protected: true,
    },
    {
      path: "/addproduct",
      element: (
        <Suspense fallback={<h1>Loading</h1>}>
          <Addproduct />
        </Suspense>
      ),
      protected: true,
    },
  ];

  const accounts = [
    {
      path: "order",
      element: (
        <Suspense fallback={<h1>Loading</h1>}>
          <Orders />
        </Suspense>
      ),
    },
    {
      path: "profile",
      element: (
        <Suspense fallback={<h1>Loading</h1>}>
          <Profile />
        </Suspense>
      ),
    },
    {
      path: "address",
      element: (
        <Suspense fallback={<h1>Loading</h1>}>
          <Address />
        </Suspense>
      ),
    },
  ];

  React.useEffect(() => {
    fetchUserData(dispatch);
  }, [localStorage.getItem("userToken")]);

  return (
    <Routes>
      <Route path="/" element={<Home />}>
        {navItems
          .filter((ele) => !ele.protected)
          .map((ele, i) => (
            <Route key={i} element={ele.element} path={ele.path} />
          ))}
        <Route element={<RequireAuth />}>
          {navItems
            .filter((ele) => ele.protected)
            .map((ele, i) => (
              <Route key={i} element={ele.element} path={ele.path} />
            ))}
          <Route element={<HomeAccount />} path="/account">
            {accounts.map((ele, i) => (
              <Route key={i} element={ele.element} path={ele.path} />
            ))}
          </Route>
        </Route>
      </Route>
    </Routes>
  );
};
