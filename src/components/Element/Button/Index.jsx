import React from 'react'

const ButtonKomponen = (props) => {
    const {classname, children ="Button", onClick = () => {}, type="button"} = props;
    return (
        <div>
            <button
                className={`h-10 px-6 font-semibold rounded-md text-white ${classname}`}
                type={type}
                onClick={onClick}>{children}</button>
        </div>
    )
}

export default ButtonKomponen
