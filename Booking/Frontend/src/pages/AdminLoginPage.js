import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import './admin.css'
import { useNavigate } from 'react-router-dom';

const AdminPage = () => {

    const navigate = useNavigate();
    const [adminEmail, setAdminEmail] = useState('')
    const [adminPass, setAdminPass] = useState('')

    const loginAdmin = () => {
        if(adminEmail === 'admin@gmail.com' && adminPass === 'admin@123'){
            toast('🦄 Login Addmin', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
                navigate('/adminHome')
        } else {
            toast('🦄 Email and Password is Worng', {
                position: "top-right",
                autoClose: 1000,
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
            <div className='divWid'>
            <header className="top-header">
            </header>

            <div id="mainCoantiner">
                <div>
                    <div className="starsec"></div>
                    <div className="starthird"></div>
                    <div className="starfourth"></div>
                    <div className="starfifth"></div>
                </div>


                <div className="container text-center text-dark mt-5">
                    <div className="row">
                        <div className="col-lg-4 d-block mx-auto mt-5">
                            <div className="row">
                                <div className="col-xl-12 col-md-12 col-md-12">
                                    <div className="cards">
                                        <div className="card-body wow-bg" id="formBg">
                                            <h3 className="colorboard">Login</h3>

                                            <p className="text-muted">Sign In to your account</p>

                                            <div className="input-group mb-3"> <input type="text" className="form-control textbox-dg" placeholder="Username" onChange={(e)=>setAdminEmail(e.target.value)} /> </div>
                                            <div className="input-group mb-4"> <input type="password" className="form-control textbox-dg" placeholder="Password" onChange={(e)=>setAdminPass(e.target.value)} /> </div>

                                            <div className="row">
                                                <div className="col-12"> <button type="button" className="btn btn-primary btn-block logn-btn" onClick={loginAdmin}>Login</button> </div>
                                                <div className="col-12"> <a href="forgot-password.html" className="btn btn-link box-shadow-0 px-0">Forgot password?</a> </div>
                                            </div>

                                            <div className="mt-6 btn-list">
                                                <button type="button" className="socila-btn btn btn-icon btn-facebook fb-color"><i className="fab fa-facebook-f faa-ring animated"></i></button> <button type="button" className="socila-btn btn btn-icon btn-google incolor"><i className="fab fa-linkedin-in faa-flash animated"></i></button> <button type="button" className="socila-btn btn btn-icon btn-twitter tweetcolor"><i className="fab fa-twitter faa-shake animated"></i></button> <button type="button" className="socila-btn btn btn-icon btn-dribbble driblecolor"><i className="fab fa-dribbble faa-pulse animated"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            </div>
            <ToastContainer />
        </>
    )
}

export default AdminPage