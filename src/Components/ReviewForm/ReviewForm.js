import React, { useState } from 'react';

import './ReviewForm.css'

function ReviewForm() {

    const [showForm, setShowForm] = useState(false);
    const [showWarning, setShowWarning] = useState(false);

    const handleClick = () => {
        setShowForm(!showForm)
    }

    return (
        <div className="container">
            {showForm ?
                (<div className='review-form-container'>
                    <form className='review-form'>
                        <h2>Give Your Review</h2>
                        {showWarning && <p className="warning">Please fill out all fields.</p>}
                        <div>
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" />
                        </div>
                        <br/>
                        <div>
                            <label htmlFor="review">Review:</label>
                            <textarea id="review" name="review" />
                        </div>
                        <br/>
                        <div>
                            <label htmlFor="review">Rating:</label>
                            <img src={process.env.PUBLIC_URL + '/images/stars.png'} className='rating-stars'/>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>)
            : (
                <div className="reviews-container">
                <div>
                    <h1>Reviews</h1>
                </div>
                <div>
                    <table cellspacing="0" cellpadding="0">
                        <thead>
                            <th>Serial Number</th>
                            <th>Doctor Name</th>
                            <th>Doctor Speciality</th>
                            <th>Provide Feedback</th>
                            <th>Review Given</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='serial'>1</td>
                                <td>Dr. Jiang Yang</td>
                                <td>Neurologist</td>
                                <td>
                                    <button className="review-btn" onClick={handleClick}>
                                        Click Here
                                    </button>
                                </td>
                                <td>
                                    Excellent consultation
                                </td>
                            </tr>
                            <tr>
                                <td className='serial'>2</td>
                                <td>Dr. Erlich Bachman</td>
                                <td>Cardiologisy</td>
                                <td>
                                    <button className="review-btn">
                                        Click Here
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                 </div>
            )}
        </div>
    )
}

export default ReviewForm