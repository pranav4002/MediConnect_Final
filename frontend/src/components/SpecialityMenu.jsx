import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
  return (
    <div id="speciality" className="flex flex-col items-center gap-6 py-16 text-gray-900">
      <h1 className="text-3xl font-semibold">Find by Speciality</h1>
      <p className="sm:w-1/3 text-center text-gray-600 text-sm">
        Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.
      </p>
      <div className="flex sm:justify-center gap-6 pt-6 w-full overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
        {specialityData.map((item, index) => (
          <Link
            to={`/doctors/${item.speciality}`}
            onClick={() => scrollTo(0, 0)}
            className="flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:-translate-y-2 transition-transform duration-300"
            key={index}
          >
            <img className="w-16 sm:w-24 mb-2 rounded-lg shadow-md" src={item.image} alt={item.speciality} />
            <p className="text-gray-700 font-medium">{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default SpecialityMenu
