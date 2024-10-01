import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar () {

    const [click, setClick] = useState(false);

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");
    const [email,setEmail] = useState(sessionStorage.getItem("email"));
    const [showDropdown, setShowDropdown] = useState(false);
    const handleClick = () => setClick(!click);

    
    const handleLogout = () => {
        sessionStorage.removeItem("auth-token");
        sessionStorage.removeItem("name");
        sessionStorage.removeItem("email");
        sessionStorage.removeItem("phone");
        // remove email phone
        localStorage.removeItem("doctorData");
        setIsLoggedIn(false);
        // setUsername("");
       
        // Remove the reviewFormData from local storage
        for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i);
          if (key.startsWith("reviewFormData_")) {
            localStorage.removeItem(key);
          }
        }
        setEmail('');
        window.location.reload();
    }

    const handleDropdown = () => {
      setShowDropdown(!showDropdown);
    }

    useEffect(() => { 
      const storedemail = sessionStorage.getItem("email");

      if (storedemail) {
            setIsLoggedIn(true);
            setUsername(storedemail);
          }
    }, []);

    return (
        <nav>
            <div className="nav__logo">
                <a href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 420.704 420.704"><g fill="#80362d"><path d="M269.575 12.724l-46.062 250.052 32.902 6.58c69.641-50.997 99.526-256.632 13.16-256.632z"/><path d="M269.575 12.724c-11.516-6.992-72.293-24.749-118.446 0-56.755 30.434-106.382 139.283-26.321 250.052.114.157 59.223-6.58 59.223-6.58l85.544-243.472z"/></g><path d="M256.772 232.084h-.358v-15.37H164.29v15.354c0 15.042-.063 31.392-13.161 41.282v147.354h59.223 59.223V273.12c-12.763-9.915-12.803-26.123-12.803-41.036z" fill="#ffd7a3"/><path d="M210.352 354.9c-14.15 0-27.502-1.876-39.482-5.134v70.937h92.124v-75.279c-14.928 5.957-33.053 9.476-52.642 9.476z" fill="#545465"/><path d="M262.994 302.258a36.3 36.3 0 0 0 6.58 1.174V273.12c-12.762-9.915-12.803-26.124-12.803-41.037l-.009-.382v-15.37l-72.732.382-19.741 6.58c13.161 14.807 53.466 66.627 98.705 78.965z" fill="#fdc88e"/><path d="M302.476 131.169c0 52.696-52.408 118.446-92.124 118.446s-92.124-65.75-92.124-118.446 41.246-72.384 92.124-72.384 92.124 19.688 92.124 72.384z" fill="#ffe1b2"/><g fill="#80362d"><path d="M223.512 25.884c-3.697 0-15.701 4.154-25.512 7.794l-.809-1.214-3.698 2.908-9.462 3.672 1.539 2.566-87.084 69.818c-6.58 6.58 39.482 174.464 39.482 78.964 0-79.786 44.327-95.587 85.544-105.285 18.644-4.387 24.128-15.354 26.321-26.321s-19.74-32.902-26.321-32.902z"/><path d="M243.253 65.366c12.064 43.32 36.192 62.924 58.812 68.682 12.395 3.155 6.992-35.78 6.992-35.78s-17.548-44.966-19.741-46.062-19.741-39.482-19.741-39.482l-39.482 32.902 13.16 19.74z"/></g><path d="M158.355 265.465c-6.163 10.013-18.728 17.052-44.514 17.052h-2.193c-39.976 0-72.384 32.407-72.384 72.384v46.062c0 10.902 8.838 19.741 19.741 19.741h135.028l-35.678-155.239zm103.994 0c6.163 10.013 18.728 17.052 44.514 17.052h2.193c39.976 0 72.384 32.407 72.384 72.384v46.062c0 10.902-8.838 19.741-19.741 19.741H226.671l35.678-155.239z" fill="#e4ebf0"/><g fill="#d0d7dc"><circle cx="111.647" cy="387.802" r="19.741"/><path d="M333.783 410.338l-8.135-5.591c7.229-10.518 11.376-26.288 11.376-43.267 0-29.427-12.807-54.288-27.966-54.288s-27.966 24.861-27.966 54.288c0 16.979 4.146 32.749 11.376 43.267l-8.135 5.591c-8.331-12.123-13.111-29.931-13.111-48.858 0-35.977 16.619-64.158 37.837-64.158s37.837 28.182 37.837 64.158c-.003 18.927-4.782 36.735-13.113 48.858z"/></g><g fill="#545465"><circle cx="289.316" cy="407.543" r="6.58"/><circle cx="328.798" cy="407.543" r="6.58"/></g><path d="M111.647 379.577c-2.726 0-4.935-2.209-4.935-4.935 0-85.274 40.304-108.646 42.02-109.599a4.93 4.93 0 0 1 6.71 1.917c1.321 2.374.472 5.367-1.892 6.698-.484.28-36.968 22.172-36.968 100.984 0 2.726-2.209 4.935-4.935 4.935z" fill="#d0d7dc"/><circle cx="111.647" cy="387.802" r="10.419" fill="#b2b9bf"/><path d="M309.057 307.195a4.94 4.94 0 0 1-4.654-3.295c-4.288-12.15-11.268-17.291-11.337-17.339-2.233-1.563-2.776-4.641-1.213-6.874a4.94 4.94 0 0 1 6.874-1.213c.389.273 9.585 6.842 14.984 22.143.908 2.569-.442 5.388-3.012 6.296-.544.19-1.098.282-1.642.282z" fill="#d0d7dc"/><path d="M292.676 131.771c10.767-2.468 17.821 2.805 17.821 13.161 0 13.709-14.479 47.296-29.701 26.321s11.88-39.482 11.88-39.482z" fill="#ffe1b2"/></svg>
                    StayHealthy
                </a>
            </div>
            <div className="nav__icon" onClick={handleClick}>
                <i className="fa fa-times fa fa-bars"></i>
            </div>
            <ul className="nav__links active">
                <li className="link">
                    <a href="../Landing_Page/LandingPage.html">Home</a>
                </li>
                <li className="link">
                    <a href="/booking-consultation">Appointments</a>
                </li>
                <li class="link">
                    <a href="/instant-consultation">Instant Booking</a>
                </li>
                <li className="link">
                    <a href="#">Health Blog</a>
                </li>
                <li className="link">
                    <a href="/reviews">Reviews</a>
                </li>
                {isLoggedIn?(
                    <>
                        <Dropdown>
                            <Dropdown.Toggle variant="default" id="dropdown-basic">
                                Welcome {email.split("@")[0]}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="/profile">Your Profile</Dropdown.Item>
                                <Dropdown.Item href="/reports">Your Reports</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <li className="link">
                        <button className="btn2" onClick={handleLogout}>
                            Logout
                        </button>
                        </li>
                        
                    </>
                    ) : (
                    <>
                        <li className="link">
                        <Link to="/sign-up">
                            <button className="btn1">Sign Up</button>
                        </Link>
                        </li>
                        <li className="link">
                        <Link to="/login">
                            <button className="btn1">Login</button>
                        </Link>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    )
}

export default Navbar;