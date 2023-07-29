import React from "react";
import "./rightbar.css";
import data from '../../helper/data'
function RightBar() {
  return (
    <div className="RightBar">
        <div className="RightBar-wrapper">
        {
           data.map((eachObj)=>{
            const {address,geo} = eachObj;
            return (
              <>
              <div className="address-div">
                <h4>Address</h4>
                <p>Street:{address.street}</p>
                <p>City:{address.city}</p>
                <p>Suite:{address.suite}</p>
                <p>zipcode:{address.zipcode}</p>
              </div>
             
              <div>
                <iframe></iframe>
              </div>
              <div className="geo">
                Lat: {address.geo.lat}
                Lat: {address.geo.lng}

              </div>
              </>
            )
           })
           
        }

        </div>

    </div>
  );
}

export default RightBar;
