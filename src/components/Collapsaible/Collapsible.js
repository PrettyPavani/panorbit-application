import React, { useState } from "react";
import data from "../../helper/apidata";
import "./collapsible.css";
import ExpandLessSharpIcon from "@mui/icons-material/ExpandLessSharp";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

const Collapsible = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div className="main-conatiner">
      <button onClick={handleClick} className="chat-button">
        <div className="collapsible">
          <ChatBubbleOutlineIcon />
          Chats
          <ExpandLessSharpIcon />
        </div>
      </button>
      {open && (
        <div className="container">
          <ul>
            {data.map((eachObje) => {
              const { username, profilepicture } = eachObje;
              return (
                <div>
                    <li>
                  <div className="image-container">
                    <img src={profilepicture} alt={username} />
                  </div>
                  <div>{username}</div>
                </li>
                <hr style={{width:'350px'}}/>
                </div>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Collapsible;
