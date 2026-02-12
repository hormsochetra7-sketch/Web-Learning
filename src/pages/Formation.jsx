import React from 'react'

const Formation = () => {
  return (
     <div className="bg-gray-50 min-h-screen font-sans mb-5">
      {/* HERO */}
      <section className="text-center py-16 px-4">
        <p className="text-sm text-gray-500 mb-2">Established 2017</p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Empowering the next generation <br />
          of <span className="text-indigo-600">IT Professionals</span>
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          ETEC Center provides industry-standard training to help students
          master practical technology skills and build successful careers.
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium">
            Browse Courses
          </button>
          <button className="border border-gray-300 px-6 py-3 rounded-lg">
            Our Story
          </button>
        </div>
      </section>

      {/* STATS */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto px-4">
        {[
          ["50K+", "Active Students"],
          ["100+", "Courses"],
          ["7+ Years", "Experience"],
          ["4.9/5", "Student Rating"],
        ].map(([value, label]) => (
          <div
            key={label}
            className="bg-white p-6 rounded-xl text-center shadow-sm"
          >
            <h2 className="text-2xl font-bold text-gray-900">{value}</h2>
            <p className="text-gray-500 text-sm mt-1">{label}</p>
          </div>
        ))}
      </section>

      {/* MISSION */}
      <section className="max-w-5xl mx-auto px-4 mt-12">
        <div className="bg-white rounded-xl p-8 shadow-sm">
          <h3 className="text-lg font-semibold text-red-500 mb-2">Our Mission</h3>
          <p className="text-gray-600 mb-2">
            To democratize education by providing accessible, affordable,
            and high-quality learning experiences that empower individuals
            to achieve their personal and professional goals.
          </p>
          <h3 className="text-lg font-semibold text-red-500 mb-2">Our Vision</h3>
          <p className="text-gray-600 mb-2">
We aim to become the most trusted hub for digital talent, where anyone—regardless of background—can start from zero and become a world-class professional. Our vision is a future where quality technical education is a right, not a privilege.
          </p>
          <h3 className="text-lg font-semibold text-red-500 mb-2">Our Story</h3>
          <p className="text-gray-600 mb-2">

            Founded in 2017, ETEC Center emerged from a simple observation: the gap between university theory and industry practice was widening. We set out to bridge that gap by creating a center focused on practical, hands-on IT training.

Today, we stand as a premier institution for developers and tech enthusiasts in the region, led by industry veterans and powered by a community of thousands.
          </p>

        </div>
      </section>

      {/* SUCCESS STORIES */}
      <section className="max-w-5xl mx-auto px-4 mt-16">
        <h2 className="text-center text-2xl font-bold mb-8">
          Success Stories
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-sm">
              <p className="text-gray-600 italic mb-4">
                “The curriculum at ETEC is perfectly aligned with real
                industry needs and helped me grow as a developer.”
              </p>
              <p className="font-semibold">Graduate Student</p>
              <p className="text-sm text-gray-500">Software Engineer</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-20 px-4">
        <div className="max-w-5xl mx-auto bg-indigo-700 rounded-2xl text-white text-center py-12">
          <h2 className="text-3xl font-bold mb-3">
            Ready to start your journey?
          </h2>
          <p className="mb-6 text-indigo-100">
            Join over 50,000 students already learning and building the future of technology.
          </p>
          <button className="bg-white text-indigo-700 px-8 py-3 rounded-lg font-semibold">
            Enroll Now →
          </button>
        </div>
      </section>
    </div>
  )
}

export default Formation