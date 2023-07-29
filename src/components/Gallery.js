import React from "react";
import "../App.css";
import TopBar from "./TopBar/topbar";
import Sidebar from "./Sidebar/Sidebar";

function Gallery(){
    return(
        <>
    <TopBar name="Gallery" />
    <hr style={{width: "1380px",margin:"20px"}}/>

    <div className="homeContainer">
      <Sidebar />
      <h1 style={{
        width:"1400px", 
      alignItems:"center",
      justifyItems:"center",
      padding: "300px",
      color: "lightgray",
      fontSize: "95px"      }}>
        Coming Soon
      </h1>
    </div>
  </>
         
    )

}

export default Gallery;