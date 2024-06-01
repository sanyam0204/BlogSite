import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Footer, Header } from "./components";
import { Outlet } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-pink-100">
      <div className="w-full block min-h-screen">
        <Header />
        <main className="text-white bg-[#1D1D1D]">
          <div className="font-semibold text-4xl pt-10 font-serif hover:font-sans hover:font-extrabold">
            Blog Site
          </div>
          <Outlet />
        </main>
        <Footer className="align-bottom overflow-x-hidden" />
      </div>
    </div>
  ) : null;
}

export default App;
