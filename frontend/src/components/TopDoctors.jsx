import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const TopDoctors = () => {
  const navigate = useNavigate()
  const { doctors } = useContext(AppContext)

  return (
    <div className="flex flex-col items-center gap-6 my-16 text-gray-900 md:mx-10">
      <h1 className="text-3xl font-semibold">Top Doctors to Book</h1>
      <p className="sm:w-1/3 text-center text-gray-600 text-sm">
        Simply browse through our extensive list of trusted doctors.
      </p>
      <div className="w-full grid grid-cols-auto gap-6 pt-6 px-3 sm:px-0">
        {doctors.slice(0, 10).map((item, index) => (
          <div
            key={index}
            onClick={() => {
              navigate(`/appointment/${item._id}`)
              scrollTo(0, 0)
            }}
            className="bg-white border border-blue-200 rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:translate-y-[-8px] transform transition-all duration-300"
          >
            <img className="bg-blue-50 w-full object-cover h-44 rounded-t-xl" src={item.image} alt="" />
            <div className="p-5">
              <div
                className={`flex items-center gap-2 text-sm justify-center ${
                  item.available ? 'text-green-600' : 'text-gray-400'
                }`}
              >
                <span
                  className={`w-3 h-3 rounded-full ${
                    item.available ? 'bg-green-600' : 'bg-gray-400'
                  }`}
                ></span>
                <p>{item.available ? 'Available' : 'Not Available'}</p>
              </div>
              <p className="text-gray-900 text-lg font-semibold mt-2 text-center">{item.name}</p>
              <p className="text-gray-600 text-sm text-center">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          navigate('/doctors')
          scrollTo(0, 0)
        }}
        className="bg-blue-50 text-gray-700 px-12 py-3 rounded-full mt-10 hover:bg-blue-100 transition"
      >
        more
      </button>
    </div>
  )
}

export default TopDoctors
