import React from 'react'
import InputForm from '../Element/Input'
import ButtonKomponen from '../Element/Button/Index'

const FormRegister = () => {
    return (
        <form>
            <InputForm
                judulLabel="Username"
                tipeInput="text"
                placeholderInput="Insert Your Name Here"
                name="username"
            />
            <InputForm
                judulLabel="Email"
                tipeInput="email"
                placeholderInput="Insert Your Email Here"
                name = "email"
            />
            <InputForm
                judulLabel="Password"
                tipeInput="password"
                placeholderInput="****"
                name="pass"
            />
            <InputForm
                judulLabel="Confirm Password"
                tipeInput="password"
                placeholderInput="****"
                name="pass2"
            />

            <ButtonKomponen classname="bg-[#6495ED] w-full">Register</ButtonKomponen>

        </form>
    )
}

export default FormRegister
