import React from 'react';
import { Link } from 'react-router-dom';

const Event = ({ event }) => {

    return (
        <Link to={`/registration/${event?._id}`}>
            <div >
                <img src={event?.img} alt="" />
                <h1>{event?.date}</h1>
                <h1>{event?.title}</h1>
            </div>
        </Link>
    );
};

export default Event;