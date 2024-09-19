import React, { useState } from "react";
import defaultAvatar from "../assets/defaultAvatar.jpg";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

export default function DashboardUpdate() {
  const { currentUser, loading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    username: currentUser.username,
    email: currentUser.email,
    phoneNo: currentUser.phoneNo,
    city: currentUser.city,
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    dispatch(updateStart())
  };
  return (
    <div className="flex-1 p-3 flex flex-col justify-center rounded max-w-sm mx-auto mt-10 mb-7 border-4">
      <h1 className=" text-center text-2xl mb-3">Update Profile</h1>
      <img
        src={currentUser.profilePicture}
        className=" h-24 w-24 mx-auto rounded-full mb-3"
      />
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <label className="flex flex-col">
          <span className="font-medium">Username</span>
          <input
            type="text"
            name="username"
            className="p-2 border rounded text-gray-900"
            required
            id="username"
            defaultValue={currentUser.username}
            onChange={handleChange}
          />
        </label>
        <label className="flex flex-col">
          <span className="font-medium">Email</span>
          <input
            type="email"
            name="email"
            className="p-2 border rounded  text-gray-900"
            required
            id="email"
            defaultValue={currentUser.email}
            onChange={handleChange}
          />
        </label>
        <label className="flex flex-col">
          <span className="font-medium">Phone no.</span>
          <input
            type="tel"
            name="tel"
            className="p-2 border rounded  text-gray-900"
            id="phoneNo"
            defaultValue={currentUser.phoneNo || ""}
            onChange={handleChange}
          />
        </label>
        <label className="flex flex-col">
          <span className="font-medium">City</span>
          <input
            type="text"
            name="text"
            className="p-2 border rounded  text-gray-900"
            id="city"
            defaultValue={currentUser.city || ""}
            onChange={handleChange}
          />
        </label>
        <button
          className="mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          disabled={loading}
        >
          {loading ? <Spinner size="sm" /> : "Update"}
        </button>
      </form>
      {error && (
        <Alert className="mt-5" color="failure">
          {error}
        </Alert>
      )}
    </div>
  );
}
