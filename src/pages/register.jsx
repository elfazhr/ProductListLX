import React from 'react'
import AuthLayouts from '../components/Layouts/AuthLayouts'
import FormRegister from '../components/Fragments/FormRegister'
import { Link } from 'react-router-dom'

const RegisterPage = () => {
    return (
        <AuthLayouts judul="Register" description="Sign up and start with us" image="/img/Register.png" type="register">
            <FormRegister />
        </AuthLayouts>
    )
}

export default RegisterPage
