import React from "react";
import "./content.css";
import data from "../../helper/data";
import Collapsible from "../Collapsaible/Collapsible";

function Content() {
  return (
    <div className="content">
      <div className="content-wrapper">
        {data.map((eachObj) => {
          const {
            id,
            name,
            username,
            email,
            profilepicture,
            phone,
            website,
            company,
          } = eachObj;
          return (
            <>
              <img
                src={profilepicture}
                alt={name}
                className="image-container"
              />

              <h3>{name}</h3>
              <div className="data-div">
                <div>Username : {username}</div>
                <div>email : {email}</div>
                <div>phone : {phone}</div>
                <div>website : {website}</div>
              </div>
              <hr style={{ width: "390px" }} />
              <div className="company-div">
                <h4>Company</h4>
                <div>Name : {company.name}</div>
                <div>catchphrase : {company.catchPhrase}</div>
                <div>bs : {company.bs}</div>
              </div>
              <div>
                <Collapsible />
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Content;
