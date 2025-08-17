import React from 'react'

export default function projects() {

     const projects = [
    {
      id: 1,
      title: "Project 1",
      img: "/stone.png", // public folder
      link: "https://project1-ax7j.vercel.app/",
     
    },
    {
      id: 2,
      title: "Project 2",
      img: "/cargarage.png",
      link: "https://fahimch-project-ry89.vercel.app/",
    
    },
    {
      id: 3,
      title: "Project 3",
      img: "/poster.png",
      link: "http://poster-jjrm.vercel.app",
     
    },
    {
      id: 4,
      title: "Project 4",
      img: "/profile.jpg",
      link: "https://example.com/project4",
      desc: "Personal profile showcase site.",
    },
  ];

  return (
     <section id="proj" className="projects py-16 px-6 bg-gray-800">
      <h3 className="text-3xl font-bold text-center text-white mb-10">
        Projects
      </h3>

      <div className="proj-grid grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="proj-card bg-gray-700 p-6 rounded-lg shadow-lg transform transition duration-200 hover:scale-105"
          >
            <img
              src={project.img}
              alt={project.title}
              className="proj-img w-full h-48 object-cover rounded-md" ></img>
            
            <h4 className="proj-title text-xl font-bold mt-4 text-white">
              {project.title}
            </h4>
            <p className="proj-desc text-gray-400 text-sm mb-3">
              {project.desc}
            </p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="proj-link text-blue-400 hover:underline"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
   
    
  )
}
