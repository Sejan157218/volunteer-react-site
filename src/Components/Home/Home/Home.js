import React, { useEffect, useState } from 'react';
import Event from '../Event/Event';
import './Home.css'

const Home = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch('http://localhost:9000/events')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, []);
    return (
        <div >
            <div className="home-container">
                {
                    events.map(event => <Event key={event._id} event={event}></Event>)
                }
            </div>
        </div>
    );
};

export default Home;