import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './Notification.css'

const Notification = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [doctorData, setDoctorData] = useState(null);
  const [appointmentData, setAppointmentData] = useState(null);

  useEffect(() => {
    const storedUsername = sessionStorage.getItem('email');
    const storedName = sessionStorage.getItem('name');
    const storedDoctorData = JSON.parse(localStorage.getItem('doctorData'));

    if (storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    }

    if (storedDoctorData) {
      setDoctorData(storedDoctorData);
    }

    setName("Ruvindi")
    setPhone("0123456789")
    setDate("2024-05-25")
    setTimeSlot("10:00AM")

  }, []);
  return (
    <div>
      <Navbar ></Navbar>
      {children}
      {isLoggedIn && doctorData && (
        <>
          <div className="appointment-card">
            <div className="appointment-card__content">
              <h3 className="appointment-card__title">Appointment Details</h3>
              <p className="appointment-card__message">
                <strong>Doctor:</strong> {doctorData?.name}
              </p>
              <p className="appointment-card__message">
                <strong>Speciality:</strong> {doctorData?.speciality}
              </p>
              <p className="appointment-card__message">
                <strong>Name:</strong> {name}
              </p>
              <p className="appointment-card__message">
                <strong>Phone Number:</strong> {phone}
              </p>
              <p className="appointment-card__message">
                <strong>Date of Apppointment:</strong> {date}
              </p>
              <p className="appointment-card__message">
                <strong>Date of Apppointment:</strong> {timeSlot}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Notification;