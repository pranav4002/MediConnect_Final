import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap bg-gradient-to-r from-blue-600 via-teal-500 to-indigo-600 rounded-xl px-6 md:px-12 lg:px-20 shadow-lg">
      {/* --------- Header Left --------- */}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-6 py-14 md:py-[8vw] md:mb-[-30px] max-w-xl mx-auto md:mx-0">
        <p className="text-3xl md:text-4xl lg:text-5xl text-white font-extrabold leading-tight tracking-tight">
          Book Appointment <br /> With Trusted Doctors
        </p>
        <div className="flex flex-col md:flex-row items-center gap-4 text-white text-base font-light max-w-md">
          <img className="w-28 rounded-lg shadow-md" src={assets.group_profiles} alt="" />
          <p>
            Simply browse through our extensive list of trusted doctors, <br className="hidden sm:block" />
            schedule your appointment hassle-free.
          </p>
        </div>
        <a
          href="#speciality"
          className="flex items-center gap-3 bg-white px-10 py-3 rounded-3xl text-[#595959] text-base font-semibold shadow-md hover:scale-105 transition-transform duration-300"
        >
          Book appointment <img className="w-4" src={assets.arrow_icon} alt="" />
        </a>
      </div>

      {/* --------- Header Right --------- */}
      <div className="md:w-1/2 relative">
        <img
          className="w-full md:absolute bottom-0 h-auto rounded-xl shadow-lg object-cover"
          src={assets.header_img}
          alt=""
        />
      </div>
    </div>
  )
}

export default Header
