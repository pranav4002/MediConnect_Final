import React, { useContext } from 'react'
import { DoctorContext } from '../context/DoctorContext'
import { AdminContext } from '../context/AdminContext'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const { dToken, setDToken } = useContext(DoctorContext)
  const { aToken, setAToken } = useContext(AdminContext)

  const navigate = useNavigate()

  const logout = () => {
    navigate('/')
    dToken && setDToken('')
    dToken && localStorage.removeItem('dToken')
    aToken && setAToken('')
    aToken && localStorage.removeItem('aToken')
  }

  return (
    <div className="flex justify-between items-center px-4 sm:px-10 py-3 border-b bg-white">
      <div className="flex items-center gap-2 text-xs cursor-pointer" onClick={() => navigate('/')}>
        <div className="inline-flex h-10 items-center justify-start rounded-lg bg-gradient-to-r from-blue-600 via-teal-500 to-indigo-600 shadow-md px-5">
          <span className="text-lg sm:text-xl font-extrabold text-white tracking-tight select-none">
            Mediconnect
          </span>
        </div>
        <p className="border px-2.5 py-0.5 rounded-full border-gray-500 text-gray-600">
          {aToken ? 'Admin' : 'Doctor'}
        </p>
      </div>
      <button onClick={logout} className="bg-gradient-to-r from-blue-600 via-teal-500 to-indigo-600 text-white text-sm px-10 py-2 rounded-full transition hover:brightness-110">
        Logout
      </button>
    </div>
  )
}

export default Navbar
