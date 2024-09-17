import React from "react";
import {
  Avatar,
  Button,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
} from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { FaMoon } from "react-icons/fa";
import { useSelector } from "react-redux";

export default function Header() {
  const path = useLocation().pathname;
  const { currentUser } = useSelector((state) => state.user);

  return (
    <Navbar fluid rounded className=" border-b-4">
      <NavbarBrand as={"div"}>
        <Link
          to="/"
          className="self-center whitespace-nowrap text-3xl font-semibold dark:text-white"
        >
          Roomies
        </Link>
      </NavbarBrand>

      <div className="flex md:order-2">
        <Button className=" mr-3 w-12 h-10 border-4" color="grey" pill>
          <FaMoon />
        </Button>

        {currentUser ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={<Avatar alt="User settings" rounded />}
          >
            <DropdownHeader>
              <span className="block text-sm text-center">{currentUser.username}</span>
              <span className="block truncate text-sm font-medium text-center">
                {currentUser.email}
              </span>
            </DropdownHeader>
            <DropdownItem>
              <Link to="/dashboard">Dashboard</Link>
            </DropdownItem>
            <DropdownDivider />
            <DropdownItem>Sign out</DropdownItem>
          </Dropdown>
        ) : (
          <Button color="grey" className=" border-2">
            <Link to="/signin">Sign in</Link>
          </Button>
        )}
        <NavbarToggle />
      </div>

      <NavbarCollapse>
        <Link
          to="/"
          className={`text-xl ${
            path === "/"
              ? "text-white bg-cyan-700 lg:bg-transparent lg:text-cyan-700"
              : ""
          }`}
        >
          Home
        </Link>
        <Link
          to="/rooms"
          className={`text-xl ${
            path === "/rooms"
              ? "text-white bg-cyan-700 lg:bg-transparent lg:text-cyan-700"
              : ""
          }`}
        >
          Rooms
        </Link>
        <Link
          to="/contact"
          className={`text-xl ${
            path === "/contact"
              ? "text-white bg-cyan-700 lg:bg-transparent lg:text-cyan-700"
              : ""
          }`}
        >
          Contact
        </Link>
        <Link
          to="/about"
          className={`text-xl ${
            path === "/about"
              ? "text-white bg-cyan-700 lg:bg-transparent lg:text-cyan-700"
              : ""
          }`}
        >
          About
        </Link>
      </NavbarCollapse>
    </Navbar>
  );
}
