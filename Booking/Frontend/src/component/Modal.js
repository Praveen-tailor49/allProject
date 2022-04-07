import React, { useState } from 'react'
import { Button, Modal, Card, Form } from 'react-bootstrap';
import { MdFastfood, MdSchool } from 'react-icons/md';
import { ToastContainer, toast } from 'react-toastify';

const Modals = (props) => {

    const [valueHelp, setValueHelp] = useState('')

    const [userData, setUserData] = useState({
        userName: '',
        userEmail: '',
        userNumber: ''
    })

    const handlShow = (e) => {
        const { name, value } = e.target

        setUserData((prastate) => ({
            ...prastate,
            [name]: value,
        }))
    }

    const getValue = (val) => {
        setValueHelp(val)

        document.getElementById('showButtonNext').style.display = 'block'
    }

    const showRegister = () => {

        document.getElementById('showDivRegister').style.display = 'block'
        document.getElementById('showDiv1').style.display = 'none'

    }

    const registerData = () => {
        const { userName, userEmail, userNumber } = userData


        if (!userName === '' && !userEmail === '' && !userNumber === '') {

            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify({
                "name": userName,
                "email": userEmail,
                "number": userNumber,
                "service": valueHelp
            });

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };

            fetch("http://localhost:5000/book", requestOptions)
                .then(response => response.json())
                .then(result => {
                    toast('🦄 Register Information', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    props.closeModal()
                })
                .catch(error => console.log('error', error));
        } else {
            toast('🦄 Empty Fild', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }


    return (
        <>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered

            >
                <div style={{ display: 'flex', margin: '30px' }}>
                    <div style={{ borderRight: '2px solid black', width: '30%' }}>

                        <Modal.Body style={{ textAlign: 'center' }}>
                            <i className="fa fa-id-card-o" aria-hidden="true" style={{ color: 'blue', fontSize: '60px' }} ></i>
                            <h6 style={{ color: 'blue', marginTop: '50px' }}>Select Service</h6>
                            <p>Please select a service you want to schedule appointment for</p>

                            <h6 style={{ color: 'blue', marginTop: '80px' }}>Questions?</h6>
                            <p>Call (858) 939-3746 for help</p>
                        </Modal.Body>

                    </div>

                    <div style={{ width: '70%', display: 'block' }} id='showDiv1'>

                        <Modal.Header closeButton>
                            <Modal.Title id="contained-modal-title-vcenter">
                                Select Service
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Card style={{ margin: '10px', cursor: 'pointer' }} onClick={() => getValue('General Dentistry')}>
                                <Card.Body>
                                    <MdFastfood /> Food
                                </Card.Body>
                            </Card>
                            <Card style={{ margin: '10px', cursor: 'pointer' }} onClick={() => getValue('Weight Management')}>
                                <Card.Body>
                                    <MdSchool /> Education
                                </Card.Body>
                            </Card>
                            {/* <Card style={{ margin: '10px', cursor: 'pointer' }} onClick={() => getValue('Psychology Services')}>
                                <Card.Body>


                                    <i className="fas fa-head-side-brain"></i> Psychology Services
                                </Card.Body>
                            </Card>
                            <Card style={{ margin: '10px', cursor: 'pointer' }} onClick={() => getValue('Massage and Recovery')}   >
                                <Card.Body>
                                    <i className="fas fa-envelope-open-text"></i> Massage and Recovery
                                </Card.Body>
                            </Card> */}

                        </Modal.Body>
                        <Modal.Footer>
                            <Button id='showButtonNext' variant="primary" style={{ display: 'none'}} onClick={() => showRegister()} > Register <i className="fa fa-arrow-right" aria-hidden="true"></i></Button>
                        </Modal.Footer>
                    </div>

                    <div style={{ width: '70%', display: 'none' }} id='showDivRegister'>

                        <Modal.Header closeButton>
                            <Modal.Title id="contained-modal-title-vcenter">
                                Select Service
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Name" name='userName' value={userData.userName} onChange={handlShow} required />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter Address" name='userEmail' value={userData.userEmail} onChange={handlShow} required />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Mobile Number</Form.Label>
                                    <Form.Control type="number" placeholder="Enter Number" name='userNumber' value={userData.userNumber} onChange={handlShow} required />
                                </Form.Group>

                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="primary" type="submit" onClick={() => registerData()}>
                                Submit
                                <i className="fa fa-arrow-right" aria-hidden="true"></i></Button>
                        </Modal.Footer>
                    </div>
                </div>
            </Modal>
            <ToastContainer />
        </>
    )
}

export default Modals
