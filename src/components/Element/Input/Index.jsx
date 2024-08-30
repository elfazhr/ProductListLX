import React from 'react'
import Label from './Label'
import Input from './Input'

const InputForm = (props) => {
    const { name, judulLabel, tipeInput, placeholderInput } = props;
    return (
        <div className='mb-6'>
            <Label htmlFor={name}>{judulLabel}</Label>
            <Input
                type={tipeInput}
                placeholder={placeholderInput}
                name={name}
                id={name} />
        </div>
    )
}

export default InputForm
