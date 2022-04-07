import React from 'react'
import { Button } from 'react-bootstrap';
import HomeImage from '../image/demo3.jpg'
import Modals from './Modal';
const Home = () => {
    const [modalShow, setModalShow] = React.useState(false);

    const closeModal = () => {
        setModalShow(false)
    }

    return (
        <>
            <div style={{ display: 'flex', margin: '100px' }}>
                <div style={{ textAlign: 'center', marginTop: '70px' }} >
                    <h1>Appointment Booking and Scheduling for Small Businesses</h1>
                    <p>Incredibly powerful software, yet simple in everyday use for customers and administrators.</p>
                    <Button variant="primary" onClick={() => setModalShow(true)}>Book Appointment</Button>
                </div>

                <div style={{boxShadow: '1px 1px 15px 1px gray', borderRadius:'20px'}}>
                    <img src={HomeImage} alt='img' style={{ height: '60vh', borderRadius:'20px' }} />
                </div>

                <div>
                    <Modals
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                        closeModal={closeModal}
                    />
                </div>
            </div>
        </>
    )
}

export default Home
