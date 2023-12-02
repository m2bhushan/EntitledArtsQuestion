import React from "react";
import { FaRegBell } from "react-icons/fa6";
import { BsPersonCircle } from "react-icons/bs";

const RoomNavBar = () => {
  return (
    <div className="roomnav-container">
      {/* <div className='bootstrap-bar'> */}
      <nav classNameName="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a href className="navbar-brand"></a>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search for rooms, guests..."
              aria-label="Search"
            />
            {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
          </form>
          
        </div>
      </nav>
      <div className="notication-bell" onClick={() => alert("No Notification")}>
            <FaRegBell size={27} />
            
          </div>
          <div className="person-id">
            <BsPersonCircle size={50} />
          </div>
    </div>
  );
};

export default RoomNavBar;
