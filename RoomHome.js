// import { Fragment } from 'react';
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import RoomData from "./RoomData";
import { Link, useNavigate } from "react-router-dom";
import { TbEdit } from "react-icons/tb";
import { RiDeleteBinFill } from "react-icons/ri";

function RoomHome() {

let handleEdit = (id,name, type, setRate) =>{
    localStorage.setItem('Name',name);
    localStorage.setItem('Type',type);
    localStorage.setItem('SetRate',setRate);
    localStorage.setItem('id',id);


}

  let history = useNavigate();
  const handleDelete = (id) => {
    var index = RoomData.map(function (e) {
      return e.id;
    }).indexOf(id);

    RoomData.splice(index, 1);

    history("/rooms");
  };

  return (
    <div className="form-main-container">
      <div className="New-room-details">
        <h2 className="Room-font">Rooms</h2>
        <Link class to="/create">
          <Button size="md">Add Room Type</Button>
        </Link>
      </div>
     <hr></hr>
      <br></br>
      <div className="table-Container" style={{ margin: "10rem", backgroundColor:"rgb(232, 252, 246)" }}>
      <hr></hr>
        <Table hover size="m">
          <thead className="table-head">
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Set Rate</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {RoomData && RoomData.length > 0
              ? RoomData.map((item) => {
                  return (
                    <tr>
                      <td>{item.Name}</td>
                      <td>{item.Type}</td>
                      <td>
                        <Button
                          className="set-rate"
                          onClick={() => alert(item.id)}
                        >
                          {item.SetRate}
                        </Button>
                      </td>
                      <td>
                        <Link to={`/edit`}>
                          <Button className="edit-button" onClick={() => handleEdit(item.id, item.Name,item.Type,item.SetRate)}><TbEdit size={25}/></Button>{" "}
                        </Link>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <Button className="delete-button" onClick={() => handleDelete(item.id)}>
                        <RiDeleteBinFill size={25}/>
                        </Button>
                      </td>
                    </tr>
                  );
                })
              : "No Data"}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default RoomHome;
