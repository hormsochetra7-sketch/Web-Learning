import React from 'react'

const Service = () => {
 
   const services = [
    {
      title: "Web Development",
      color: "bg-sky-500",
      items: ["Responsive Design", "SEO Optimized", "Fast Performance", "Secure & Scalable"],
    },
    {
      title: "Mobile App Development",
      color: "bg-purple-500",
      items: ["iOS & Android", "Cross Platform", "User Friendly UI", "Cloud Integration"],
    },
    {
      title: "UI/UX Design",
      color: "bg-orange-500",
      items: ["User Research", "Wireframing", "Prototyping", "Visual Design"],
    },
    {
      title: "Digital Marketing",
      color: "bg-green-500",
      items: ["SEO Strategy", "Content Marketing", "Social Media", "Analytics"],
    },
    {
      title: "Cybersecurity",
      color: "bg-blue-500",
      items: ["Security Audit", "Threat Detection", "Data Protection", "Compliance"],
    },
    {
      title: "Cloud Solutions",
      color: "bg-yellow-500",
      items: ["Cloud Migration", "Infrastructure Setup", "Auto Scaling", "24/7 Support"],
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* HERO */}
      <section
        className="relative h-64 bg-cover bg-center"
        style={{ backgroundImage: "url(https://media.istockphoto.com/id/1830042746/photo/document-management-system-dms-with-arrange-folder-and-files-icons-man-setup-storage-backup.jpg?s=2048x2048&w=is&k=20&c=oscUZupHxEU1vVmoELDak81yAPu9iaJKkx2v2V7Stho=)" }}
      >
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-4xl font-bold">Our Services</h1>
          <p className="mt-2 max-w-xl">
            Comprehensive solutions tailored to help your business thrive in the digital age
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-3 gap-8">
        {services.map((s) => (
          <div key={s.title} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className={`${s.color} text-white p-6 text-center font-semibold`}>
              {s.title}
            </div>

            <ul className="p-6 space-y-2 text-gray-600 text-sm">
              {s.items.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>

            <div className="p-6 pt-0">
              <button
                className={`${s.color} text-white w-full py-2 rounded-lg font-medium`}
              >
                Learn More
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="px-4 pb-16">
        <div className="max-w-6xl mx-auto bg-indigo-600 text-white text-center py-12 rounded-2xl">
          <h2 className="text-3xl font-bold mb-2">Ready to Get Started?</h2>
          <p className="mb-6">
            Let’s discuss how we can help transform your business
          </p>
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold">
            Contact Us Today
          </button>
        </div>
      </section>
    </div>
  )
}

export default Service