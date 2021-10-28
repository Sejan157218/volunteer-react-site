import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';

const Myevent = () => {
    const [myevent, setMyevent] = useState([]);
    const [deleteCount, setDeleteCount] = useState(false)
    const email = 'sejan7090@gmail.com'
    useEffect(() => {
        fetch(`http://localhost:9000/myevent/${email}`)
            .then(res => res.json())
            .then(data => setMyevent(data))
    }, [deleteCount])
    const handlerToDelete = id => {
        axios.delete(`http://localhost:9000/myevent/${email}/${id}`)
            .then(res => {
                if (res.data.deletedCount) {
                    setDeleteCount(res.data.deletedCount);
                    alert('delete success')
                }
            })
    }

    return (
        <div>
            {myevent.map(event => <ul>
                <li>
                    {event?.user_name}
                </li>
                <li>
                    {event?.user_email}
                </li>
                <li>
                    {event?.user_date}
                </li>
                <li>
                    {event?.title}
                </li>
                <button onClick={() => handlerToDelete(event?._id)}>delete</button>
            </ul>)}
        </div>
    );
};

export default Myevent;