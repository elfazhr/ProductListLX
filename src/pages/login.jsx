import React from 'react'
import AuthLayouts from '../components/Layouts/AuthLayouts'
import FormLogin from '../components/Fragments/FormLogin'

const LoginPage = () => {
    return (
        <AuthLayouts image="/img/Login.png"
            description="Sign in to continue your journey"
            judul="Login"
            type="login">
            <FormLogin />
        </AuthLayouts>
    )
}

export default LoginPage
