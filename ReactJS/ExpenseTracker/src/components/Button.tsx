import React from 'react'

interface Props{
    title: string, 
    color: string, 
    type: "button" | "submit" | "reset"

}

const Button = ({title, type, color}: Props) => {
    return (
        <button className={`btn btn-${color}`} type={type}>{title}</button>
    )
}

export default Button