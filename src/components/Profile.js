import React from "react";
import "../components/Pages/Home/Home";
import TopBar from "./TopBar/topbar";
import Sidebar from "./Sidebar/Sidebar";
import Content from "./Content/content";
import RightBar from "./Rightbar/Rightbar";

const Profile = () => {
  return (
    <>
      <TopBar />
      <div className="homeContainer">
        <Sidebar />
        <Content />
        <RightBar />
      </div>
    </>
  );
};

export default Profile;
