import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Admin = () => {
    const [user, setUser] = useState([])
    const [deleteCount, setDeleteCount] = useState(false)
    useEffect(() => {
        fetch('http://localhost:9000/registeruser')
            .then(res => res.json())
            .then(data => setUser(data))
    }, [deleteCount]);
    const handlerToDelete = id => {
        axios.delete(`http://localhost:9000/registeruser/${id}`)
            .then(res => {
                if (res.data.deletedCount) {
                    setDeleteCount(res.data.deletedCount);
                    alert('delete success')
                }
            })
    }
    return (
        <div>
            {user.map(usr => <ul>
                <li>
                    {usr?.user_name}
                </li>
                <li>
                    {usr?.user_email}
                </li>
                <li>
                    {usr?.user_date}
                </li>
                <li>
                    {usr?.title}
                </li>
                <button onClick={() => handlerToDelete(usr?._id)}>delete</button>
            </ul>)}
        </div>
    );
};

export default Admin;