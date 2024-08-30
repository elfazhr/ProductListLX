import React from 'react'
import InputForm from '../Element/Input'
import ButtonKomponen from '../Element/Button/Index'

const FormLogin = (e) => {
    function handleClick(e) {
        console.log("Button Clicked!")
        e.preventDefault()
    }
    const handleLogin = (e) => {
        e.preventDefault()
        localStorage.setItem('email', e.target.email.value)
        localStorage.setItem('password', e.target.password.value)
        window.location.href = "/product"
    }
    return (
        <form onSubmit={handleLogin}>
            <InputForm
                judulLabel="Email"
                tipeInput="email"
                placeholderInput="example@gmail.com"
                name="email"
            />

            <InputForm
                judulLabel="Password"
                tipeInput="password"
                placeholderInput="****"
                name="password"
            />
            <ButtonKomponen classname="bg-blue-800 w-full" type="submit">Login</ButtonKomponen>
        </form>
    )
}

export default FormLogin
