import React from 'react'

export default function contact() {
  return (
       <section id="cnt" className="contact py-16 text-center">
        <div className="text-3xl font-bold text-center text-white mb-10">
        Contact</div>
      <h3 className="sec-title text-2xl font-bold mb-6">Contact</h3>

      <div className="contact-links flex justify-center gap-8">
        {/* Email */}
        <a
          href="mailto:fahimch8547@gmail.com"
          className="btn inline-flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-md text-sm hover:bg-gray-600 transition"
        >
          <img
                src="/mail.webp"
                alt="Instagram Icon"
                className="w-5 h-5"></img>
          Email Me
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/fahim__cholakkal?igsh=MTR2aWowMDZkNzkzYw==&utm_source=ig_contact_invite"
          target="_blank"
          rel="noopener noreferrer"
          className="btn inline-flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-md text-sm hover:bg-gray-600 transition"
        >
            <img
                src="/ins.webp"
                alt="Instagram Icon"
                className="w-5 h-5"></img>
          Instagram
        </a>
      </div>
    </section>
  )
}
