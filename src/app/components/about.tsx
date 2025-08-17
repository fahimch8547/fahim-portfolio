import React from 'react'
import Header from './header'


export default function about() {
  return (
<section
      id="abt"
      className="py-16 px-2 max-w-4xl mx-auto text-center"
    >
      {/* Section title */}
      <h3 className="text-3xl font-bold mb-6">about me</h3>

      {/* Profile details box */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-sm mx-auto border border-black/10 mb-10">
        <img
          src="/profile.jpg"
          alt="Profile"
          className="w-24 h-24 rounded-full mx-auto mb-10 border-4 border-blue-400"
        />

        <p className="flex items-center text-white text-sm mb-2">
          <strong className="text-blue-600 min-w-[120px] mr-2">Name:</strong> 
          Fahim CH
        </p>
        <p className="flex items-center text-white text-sm mb-2">
          <strong className="text-blue-600 min-w-[120px] mr-2">D.O.B:</strong> 
          14 July 2005
        </p>
        <p className="flex items-center text-white text-sm mb-2">
          <strong className="text-blue-600 min-w-[120px] mr-2">Address:</strong> 
          Cholakkal(H), Kandamangalam
        </p>
        <p className="flex items-center text-white text-sm mb-2">
          <strong className="text-blue-600 min-w-[120px] mr-2">Pincode:</strong> 
          679328
        </p>
        <p className="flex items-center text-white text-sm mb-2">
          <strong className="text-blue-600 min-w-[120px] mr-2">Email:</strong> 
          fahimch8547@gmail.com
        </p>
        <p className="flex items-center text-white text-sm">
          <strong className="text-blue-600 min-w-[120px] mr-2">Phone:</strong> 
          8547282919
        </p>
      </div>

      {/* About text */}
      <p className="text-gray-300 mt-10 mb-4">
        I’m Fahim CH, a Computer Science student with a strong passion for web development and problem-solving.
        I enjoy creating clean, efficient, and visually appealing websites that provide a smooth user experience.
        My skills include HTML, CSS, JavaScript, Tailwind CSS, and Django, and I’m always learning new frameworks
        and tools to stay updated with modern development trends. I believe in writing code that is not only
        functional but also maintainable and scalable.
      </p>

      <p className="text-gray-300 ">
        Beyond coding, I love exploring new technologies, working on personal projects, and finding creative
        solutions to challenges. My ambition is to grow into a well-rounded full-stack developer and contribute
        to meaningful, impactful projects.
      </p>
    </section>
  )
}
