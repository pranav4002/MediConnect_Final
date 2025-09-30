import React, { useContext, useState, useEffect, useRef } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Navbar = () => {
  const navigate = useNavigate()
  const { token, setToken, userData } = useContext(AppContext)
  const [showMenu, setShowMenu] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [imageError, setImageError] = useState(false)
  const dropdownRef = useRef(null)

  const logout = () => {
    localStorage.removeItem('token')
    setToken(false)
    navigate('/login')
    setDropdownOpen(false)
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // Reset image error when userData changes
  useEffect(() => {
    setImageError(false)
  }, [userData])

  // Create a fallback avatar with user's initial
  const getAvatarFallback = () => {
    if (userData?.name) {
      return userData.name.charAt(0).toUpperCase()
    }
    return 'U'
  }

  const handleImageError = () => {
    setImageError(true)
  }

  return (
    <div className="flex items-center justify-between py-4 mb-5 border-b border-gray-300 bg-white shadow-sm text-sm">
      <div
        onClick={() => navigate('/')}
        className="text-2xl font-extrabold cursor-pointer bg-gradient-to-r from-blue-600 via-teal-500 to-indigo-600 bg-clip-text text-transparent select-none"
      >
        Mediconnect
      </div>

      <ul className="hidden md:flex items-center gap-8 font-semibold text-gray-700 tracking-wide">
        <NavLink to="/">
          <li className="py-1 hover:text-indigo-600 transition">HOME</li>
        </NavLink>
        <NavLink to="/doctors">
          <li className="py-1 hover:text-indigo-600 transition">ALL DOCTORS</li>
        </NavLink>
        <NavLink to="/about">
          <li className="py-1 hover:text-indigo-600 transition">ABOUT</li>
        </NavLink>
        <NavLink to="/contact">
          <li className="py-1 hover:text-indigo-600 transition">CONTACT</li>
        </NavLink>
      </ul>

      <div className="flex items-center gap-4 relative">
        {token && userData ? (
          <div ref={dropdownRef} className="relative">
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => setDropdownOpen((prev) => !prev)}
            >
              {userData.image && !imageError ? (
                <img
                  className="w-8 h-8 rounded-full object-cover border border-gray-300"
                  src={userData.image}
                  alt="profile"
                  onError={handleImageError}
                />
              ) : (
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 border border-gray-300 flex items-center justify-center text-white font-semibold text-sm">
                  {getAvatarFallback()}
                </div>
              )}
              <svg className="w-2.5 h-2.5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 min-w-[160px] bg-white rounded shadow-lg flex flex-col gap-2 p-3 text-gray-600 z-50">
                <p
                  onClick={() => {
                    navigate('/my-profile')
                    setDropdownOpen(false)
                  }}
                  className="cursor-pointer px-2 py-1 transition-colors duration-200 hover:bg-indigo-100 hover:text-indigo-700 rounded"
                >
                  My Profile
                </p>
                <p
                  onClick={() => {
                    navigate('/my-appointments')
                    setDropdownOpen(false)
                  }}
                  className="cursor-pointer px-2 py-1 transition-colors duration-200 hover:bg-indigo-100 hover:text-indigo-700 rounded"
                >
                  My Appointments
                </p>
                <p
                  onClick={logout}
                  className="cursor-pointer px-2 py-1 transition-colors duration-200 hover:bg-indigo-100 hover:text-indigo-700 rounded"
                >
                  Logout
                </p>
              </div>
            )}
          </div>
        ) : (
          <button
            onClick={() => navigate('/login')}
            className="hidden md:block bg-gradient-to-r from-blue-600 via-teal-500 to-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:brightness-110 transition"
          >
            Create account
          </button>
        )}

        <img
          onClick={() => setShowMenu(true)}
          className="w-6 md:hidden cursor-pointer"
          src="/assets/menu_icon.svg"
          alt="menu"
        />

        <div
          className={`md:hidden fixed top-0 right-0 bottom-0 w-full max-w-xs bg-white shadow-lg z-40 transform transition-transform duration-300 ${
            showMenu ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between px-5 py-6 border-b border-gray-200">
            <div className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 via-teal-500 to-indigo-600 bg-clip-text text-transparent select-none">
              Mediconnect
            </div>
            <img onClick={() => setShowMenu(false)} src="/assets/cross_icon.svg" className="w-7 cursor-pointer" alt="close" />
          </div>
          <ul className="flex flex-col items-center gap-4 mt-6 px-5 text-lg font-semibold text-gray-700">
            <NavLink onClick={() => setShowMenu(false)} to="/">
              <li className="px-4 py-2 rounded hover:bg-indigo-100 transition cursor-pointer">HOME</li>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/doctors">
              <li className="px-4 py-2 rounded hover:bg-indigo-100 transition cursor-pointer">ALL DOCTORS</li>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/about">
              <li className="px-4 py-2 rounded hover:bg-indigo-100 transition cursor-pointer">ABOUT</li>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/contact">
              <li className="px-4 py-2 rounded hover:bg-indigo-100 transition cursor-pointer">CONTACT</li>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
