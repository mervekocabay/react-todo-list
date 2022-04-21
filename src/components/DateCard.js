import React from 'react'
import todoImage from '../assets/images/todo.png'
import '../assets/css/DateCard.css';

const DateCard = () => {
    var currentdate = new Date();

    return (
        <div className='outDiv'>
            <div style={{ height: '60%' }}>
                <span style={{ fontSize: 80, fontWeight: '300' }} >
                    {currentdate.getDate()}
                </span>
                <br />
                <span style={{ fontWeight: '500', fontSize: 25 }}>
                    {currentdate.toLocaleString('tr', { month: 'long' }) + " " + currentdate.getFullYear()}
                </span>
                <br />
                <span style={{ fontWeight: '500', fontSize: 25 }}>
                    {currentdate.toLocaleString('tr', { weekday: 'long' })}
                </span>
            </div>
            <div className='imageDiv' >
                <img style={{ width: '100%', height: '100%' }} src={todoImage} alt="todo" />
            </div>
        </div>
    )
}

export default DateCard