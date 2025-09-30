import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Banner = () => {
    const navigate = useNavigate()

    return (
        <div
            className="flex bg-gradient-to-r from-blue-600 via-teal-500 to-indigo-500 rounded-xl px-6 sm:px-10 md:px-16 lg:px-20 my-20 md:mx-10 shadow-lg transition-all duration-300"
            style={{ minHeight: '320px', alignItems: 'center' }}
        >
            {/* ------- Left Side ------- */}
            <div className="flex-1 py-10 sm:py-14 md:py-20 lg:py-28 lg:pl-5 flex flex-col justify-center">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-2">
                    <p>Book Appointment</p>
                    <p className="mt-4 text-gray-100 font-light">With 100+ Trusted Doctors</p>
                </div>
                <button
                    onClick={() => { navigate('/login'); scrollTo(0, 0); }}
                    className="bg-white text-base sm:text-lg text-blue-600 px-8 py-3 rounded-2xl mt-6 shadow-md hover:bg-blue-100 hover:shadow-lg hover:-translate-y-0.5 transition-all font-semibold"
                >
                    Create account
                </button>
            </div>
            {/* ------- Right Side ------- */}
            <div className="hidden md:flex md:w-1/2 lg:w-[370px] relative justify-end items-end">
                <img
                    className="w-full max-w-md object-contain drop-shadow-lg rounded-xl"
                    src={assets.appointment_img}
                    alt=""
                />
            </div>
        </div>
    )
}

export default Banner
