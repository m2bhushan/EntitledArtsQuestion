import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import RoomData from "./RoomData";
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from "react-router-dom";

const EditRoomForm = () => {

    const[name, setName] = useState('');
    const[type, setType] = useState('');
    const[setRate, setSetRate] = useState('');
    const[id, setId] = useState()
let history = useNavigate();

var index = RoomData.map(function (e) {
    return e.id;
  }).indexOf(id);

  const handleSubmit= (e) => {
    e.preventDefault();

    let a = RoomData[index];
    a.Name=name;
    a.Type=type;
    a.SetRate=setRate;

    history("/rooms");
}

useEffect(() => {
    setName(localStorage.getItem('Name'))
    setType(localStorage.getItem('Type'))
    setSetRate(localStorage.getItem('SetRate'))
    setId(localStorage.getItem('id'))

},[])


  return (
    <div>
        <p className="new-form-p">Edit Details</p>
    <Form className="d-grid gap-2" style={{margin:"15rem"}}>
        <Form.Group className="mb-3" controlId="formName">
            <Form.Control type="text" placeholder="Enter Name" value={name} required onChange={(e)=> setName(e.target.value)}></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formType">
            <Form.Control type="text" placeholder="Enter Type" value={type} required onChange={(e)=> setType(e.target.value)}></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formRate">
            <Form.Control type="number" placeholder="Enter Rate" value={setRate} required onChange={(e)=> setSetRate(e.target.value)}></Form.Control>
        </Form.Group>
        <Button onClick={(e) => handleSubmit(e)} type="submit">Update</Button>
    </Form>
    </div>
  )
}

export default EditRoomForm