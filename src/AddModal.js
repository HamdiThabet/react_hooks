import React, { Component, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import StarRatingComponent from "react-star-rating-component";
function Add({ handleAdd }) {
    const [show, setShow] = useState(false);
    const [disableSave, setDisableSave] = useState(true)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [newMovie, setNewMovie] = useState({
        name:'',
        Description:'',
        Image:'',
        rating:0,
});

const handleChange = (e) =>{
    setNewMovie({...newMovie, [e.target.name]:e.target.value}) 
    if(newMovie.name !=='' && newMovie.Description !=='' && newMovie.Image !=='')
    setDisableSave(false)
    else
    setDisableSave(true)
}

const handleSave = () =>{
    handleAdd(newMovie);
    handleClose();
}
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Add movie
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Movie name</Form.Label>
                            <Form.Control  name="name" type="text" placeholder="Movie name" onChange={handleChange}/>
                            
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>PostUrl</Form.Label>
                            <Form.Control name="Image"type="text" placeholder="PostUrl" onChange={handleChange}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Description</Form.Label>
                            <Form.Control name = "Description"type="text" placeholder="Description" onChange={handleChange}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Label>Movie </Form.Label><br/>
                                <StarRatingComponent  name={"star"} onStarClick={(nextValue, prevValue, name)=>setNewMovie({...newMovie, rating:nextValue})}/>
                            </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                <Modal.Footer>
                <Button variant="primary" className="btn s" onClick={handleSave} >Save</Button>
                <Button variant="secondary"  className="btn c" onClick={handleClose}>Close</Button>
            </Modal.Footer>
                </Modal.Footer>

            </Modal>
        </>
    );
}

export default Add