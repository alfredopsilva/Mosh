import React, { FormEvent, useState } from 'react'
import { z } from 'zod';
import { FieldValues, useForm } from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod"



const schema = z.object({
    name: z.string().min(3), 
    age: z.number({invalid_type_error: 'Age Field is Required'}).min(1)
})

type FormData = z.infer<typeof schema>;

const Form = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({resolver: zodResolver(schema)});
    console.log(register("name"))

    const onSubmit = (data: FieldValues) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3"></div>
                <label htmlFor="name" className="form-label">Name</label>
                <input {...register('name')} id="name" type="text" className="form-control" />
                {errors.name && <p className='text-danger'>{errors.name.message}</p>}
            </div>
            <div className="mb-3">
                <label htmlFor="age" className="form-label">Age</label>
                <input {...register('age',{valueAsNumber: true})} id='age' type="number" className="form-control" />
                {errors.age && <p className='text-danger'>{errors.age.message}</p>}
            </div>
            <button className="btn btn-primary" value="submit">Submit</button>
        </form>
    )


}

export default Form