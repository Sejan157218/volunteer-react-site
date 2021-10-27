import React from 'react';
import { useForm } from "react-hook-form";
const AddEvent = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:9000/events', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
            .then(result => {
                console.log(result);
                if (result.insertedId) {
                    console.log(result.insertedId);
                    alert('event added')
                    reset()
                }
            })
    }
    return (
        <div>
            <h1>Add Event </h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register("title")} placeholder="title" />
                <br />
                <input type="text" {...register("desc")} placeholder="description" />
                <br />
                <input type="date" {...register("date")} placeholder="date" />
                <br />
                <input type="text" {...register("img")} placeholder="img url" />
                <br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddEvent;