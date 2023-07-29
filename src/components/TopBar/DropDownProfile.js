import React from "react";
import "./topbar.css";
import Profiledata from "../../helper/profiledata";
import './dropdown.css'
const DropDownProfile = () => {
  return (
    <div className="flex flex-col dropdownprofile">
      <ul className="flex flex-col gap-4">
        {/* {
                    Profiledata.map((eachUser)=>{
                        const {name,profilepicture} = eachUser;
                        return (
                            <div>
                            <li>
                                <img src={Profiledata} alt={name}/>
                            </li>
                            <button>Sign Out</button>

                            </div>
                        )
                    })
                } */}

        <li>
            Ervin Howell
        </li>
        <hr />
        <li>Clementine Bauch</li>
        <hr />
        <button className="button">Sign Out</button>
      </ul>
    </div>
  );
};

export default DropDownProfile;
