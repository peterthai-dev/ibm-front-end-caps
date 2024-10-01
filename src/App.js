import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from './Components/LandingPage/LandingPage'
import Login from './Components/Login/Login'
import Sign_Up from './Components/Sign_Up/Sign_Up'
import InstantConsultation from './Components/InstantConsultation/InstantConsultation'
import BookingConsultation from './Components/BookingConsultation'
import Notification from './Components/Notification/Notification';
import ReviewForm from './Components/ReviewForm/ReviewForm';
import ProfileCard from './Components/ProfileCard/ProfileCard';
import ReportsLayout from './Components/ReportsLayout/ReportsLayout';

function App() {

  return (
    <div className="App">
        <BrowserRouter>
            <Notification>
                <Routes>
                    <Route path="/" element={<Layout/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/sign-up" element={<Sign_Up/>}/>
                    <Route path="/instant-consultation" element={<InstantConsultation />} />
                    <Route path="/booking-consultation" element={<BookingConsultation />} />
                    <Route path="/reviews" element={<ReviewForm />} />
                    <Route path="/profile" element={<ProfileCard />} />
                    <Route path="/reports" element={<ReportsLayout />} />
                </Routes>
            </Notification>
            
        </BrowserRouter>
       
    </div>
  );
}

export default App;