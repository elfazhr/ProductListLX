import React, { useEffect, useRef, useState } from 'react'

const State = () => {
    const [count, setCount] = useState(0)
    const handleHitung = () => {
        setCount(count + 1)
    }
    const [nama, setNama] = useState("LearningX")
    const inputRef = useRef(null)

    useEffect(() => {
        document.title = `Anda klik sebanyak ${count} kali`
        inputRef.current.focus()
    })

    const handleChange = (e) => {
        setNama(e.target.value)
    }
    return (
        <div className='flex flex-col justify-center items-center min-h-screen space-y-2 bg-gray-100'>
            {/* <div className='text-2xl font-bold'>Nilai : {count}</div>
            <button className='py-2 px-6 bg-blue-600 rounded-md font-bold text-lg text-white hover:bg-blue-400' onClick={() => setCount(count+1)}>Hitung</button> */}

            <div className='w-full max-w-sm flex-col'>
                <h1 className='text-3xl text-blue-500 font-bold my-5'>Selamat Datang, {nama} </h1>
                <input type="text" className='text-xm border rounded-md w-full py-2 px-2 text-slate-700 placeholder: opacity-50'
                    placeholder='Masukkan Nama'
                    name="nama"
                    ref={inputRef}
                    onChange={(e) => handleChange(e)} />
            </div>
        </div>
    )
}

export default State
