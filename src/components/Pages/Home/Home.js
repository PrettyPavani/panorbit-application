import React from "react";
import "./Home.css";
import data from '../../../helper/apidata'
import { useNavigate } from "react-router-dom";

const Home = () => {

  const Navigate = useNavigate();

  const handleClick = () =>{
    Navigate('/profile');
  }
  return (
    <>
     <div className="user-container">
      <ul >
      {
        data.map((eachUser)=>{
          const {name,profilepicture} = eachUser;
          return (
           <div onClick={handleClick}>
             <li className="users-list">
              <img src={profilepicture} alt={name} />
              <h3>{name}</h3>
            </li>
            <hr />
           </div>

          )
        })
      }
      </ul>
     </div>
    </>
  );
};

export default Home;
