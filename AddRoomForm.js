import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import RoomData from "./RoomData";
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from "react-router-dom";

const AddRoomForm = () => {

    const[name, setName] = useState('');
    const[type, setType] = useState('');
    const[setRate, setSetRate] = useState('');


    let history = useNavigate();

    const handleSubmit= (e) => {
        e.preventDefault();

        const ids = uuid();
        // let uniqueId= ids.splice(0,8);
        let uniqueId=ids;

        let a = name,
        b= type,
        c=setRate;

        RoomData.push({id: uniqueId, Name:a, Type : b, SetRate:c});

        history("/rooms");
    }

  return <div>
<p className="new-form-p">Enter New Details</p>
    <Form className="d-grid gap-2" style={{margin:"15rem"}}>
        <Form.Group className="mb-3" controlId="formName">
            <Form.Control type="text" placeholder="Enter Name" required onChange={(e)=> setName(e.target.value)}></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formType">
            <Form.Control type="text" placeholder="Enter Type" required onChange={(e)=> setType(e.target.value)}></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formRate">
            <Form.Control type="number" placeholder="Enter Rate" required onChange={(e)=> setSetRate(e.target.value)}></Form.Control>
        </Form.Group>
        <Button onClick={(e) => handleSubmit(e)} type="submit">Submit</Button>
    </Form>
  </div>;
};

export default AddRoomForm;
