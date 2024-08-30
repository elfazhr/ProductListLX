import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const error = useRouteError();
  return (
    <div className='flex flex-col justify-center items-center min-h-screen'>
        <img src="/img/not_found.jpg" alt="" className='w-1/4'/>
        <h1 className='text-3xl font-bold'>Oops!</h1>
        <p className='my-5 text-xl'>Sorry, Unexpected error has occured</p>
        <p className='text-lg border border-red-500 rounded p-2'>{error.statusText}</p>
    </div>
  )
}

export default ErrorPage
