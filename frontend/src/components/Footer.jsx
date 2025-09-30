import React from 'react'

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm text-gray-700">
        {/* Logo replaced with text */}
        <div>
          <div className="mb-5 inline-flex h-14 items-center justify-start rounded-lg bg-gradient-to-r from-blue-500 via-teal-500 to-indigo-500 shadow-md px-6">
            <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Mediconnect
            </span>
          </div>
          <p className="w-full md:w-2/3 text-gray-700 leading-7 font-normal text-base drop-shadow-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
        </div>

        <div>
          <p className="text-xl font-semibold mb-5 text-gray-900 tracking-wide">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600 font-medium">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-semibold mb-5 text-gray-900 tracking-wide">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600 font-medium">
            <li>+1-212-456-7890</li>
            <li>pranvupatil@gmail.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr className="border-gray-300" />
        <p className="py-5 text-sm text-center text-gray-500">
          Copyright 2024 @ mediconnct.com - All Right Reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer
