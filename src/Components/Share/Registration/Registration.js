import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';

const Registration = () => {
    const { register, handleSubmit, reset } = useForm();
    const [event, setEvent] = useState({});
    const { id } = useParams()
    const url = `http://localhost:9000/registration/${id}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setEvent(data))
    }, [])
    const onSubmit = data => {
        data.id = event._id;
        axios.post('http://localhost:9000/registeruser', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('success');
                    reset()
                }
            })

    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register("name")} placeholder="Full Name" />
                <br />
                <input type="email" {...register("useremail")} placeholder="Username or Email" />
                <br />
                <input type="date" {...register("date")} placeholder="date" />
                <br />
                <input type="text" {...register("description")} placeholder="Description" />
                <br />
                <input readOnly defaultValue={event?.title} />
                <br />
                <input type="submit" value="Registration" />
            </form>
        </div>
    );
};

export default Registration;