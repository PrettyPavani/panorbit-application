import React,{useState} from "react";
import "./topbar.css";
import data from "../../helper/data";
import DropDownProfile from "./DropDownProfile";

const TopBar = (props) => {
  const [openProfile,setOpenProfile] = useState(false);
  const {name="Profile"} = props;
  return (
    <div className="topbar-container">
      <div className="topbarleft"></div>
      <div className="topbarecenter">
        <div className="menuname">{name}</div>
      </div>
      <div className="topbarright">
        {data.map((eachObj) => {
          const { name, profilepicture } = eachObj;
          return (
            <>
            {
              openProfile && (<DropDownProfile />
              )
            }
              <img src={profilepicture} alt={name} className="topbarImg" onClick={()=>setOpenProfile((prev)=>!prev)}/>
              <h3>{name}</h3>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default TopBar;
