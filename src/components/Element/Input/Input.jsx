import React from 'react'

const Input = (props) => {
    const {type, placeholder, name, id} = props;
    return (
        <div>
            <input
                type={type}
                className='text-sm border rounded w-full py-2 px-2 text-slate-700 placeholder: opacity-50'
                placeholder={placeholder}
                name={name}
                id={id}
            />
        </div>
    )
}

export default Input
