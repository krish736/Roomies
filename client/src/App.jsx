import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Rooms from "./pages/Rooms.jsx";
import Signin from "./pages/Signin.jsx";
import Signup from "./pages/Signup.jsx";
import Header from "./components/Header.jsx";
import Error from "./pages/Error.jsx";
import Contact from "./pages/Contact.jsx";

function Layout({ children, showHeader }) {
  return (
    <>
      {showHeader && <Header />}
      <main>{children}</main>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout showHeader={true}>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout showHeader={true}>
              <About />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout showHeader={true}>
              <Contact />
            </Layout>
          }
        />
        <Route
          path="/dashboard"
          element={
            <Layout showHeader={true}>
              <Dashboard />
            </Layout>
          }
        />
        <Route
          path="/rooms"
          element={
            <Layout showHeader={true}>
              <Rooms/>
            </Layout>
          }
        />
        <Route
          path="/signin"
          element={
            <Layout showHeader={true}>
              <Signin />
            </Layout>
          }
        />
        <Route
          path="/signup"
          element={
            <Layout showHeader={true}>
              <Signup />
            </Layout>
          }
        />
        <Route
          path="*"
          element={
            <Layout showHeader={false}>
              <Error />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
