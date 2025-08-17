import React from 'react'

export default function header() {
  return (

  
    <header className="flex justify-between items-center bg-gray-800 px-6 py-4">
      {/* Left: profile + logo */}
      <div className="flex items-center gap-3">
        <img
          src="/profile.jpg"
          alt="Profile"
          className="w-12 h-12 rounded-full object-cover border-2 border-blue-400"
        />
        <h1 className="text-2xl font-bold text-white">portfolio</h1>
      </div>

      {/* Right: navigation */}
      <nav>
        <ul className="flex gap-10 list-none">
          <li>
            <a href="#abt" className="text-white hover:text-blue-400 transition-colors">
              about
            </a>
          </li>
          <li>
            <a href="#proj" className="text-white hover:text-blue-400 transition-colors">
              projects
            </a>
          </li>
          <li>
            <a href="#cnt" className="text-white hover:text-blue-400 transition-colors">
              contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
