"use client";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useState } from "react";

export default function ContactSection() {
  // Basic form state handling (not connected to backend)
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  return (
    <section id="contact" className="min-h-screen bg-white py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <div className="text-center mb-10">
          <h5 className="text-teal-500 font-semibold text-lg">contact</h5>
          <h3 className="text-3xl md:text-4xl font-bold mb-2">Get in touch</h3>
          <ul className="flex gap-2 justify-center pb-2">
            <li className="w-16 h-1 rounded-full bg-teal-500"></li>
            <li className="w-3 h-1 rounded-full bg-teal-500"></li>
            <li className="w-2 h-1 rounded-full bg-teal-500"></li>
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <ContactInfo
            icon={<FaPhone size={24} />}
            label="Phone"
            value="03498309488"
          />
          <ContactInfo
            icon={<FaEnvelope size={24} />}
            label="Email"
            value="codercryptical@gmail.com"
          />
          <ContactInfo
            icon={<FaMapMarkerAlt size={24} />}
            label="Address"
            value="Rawalpindi"
          />
        </div>

        {/* Contact Form */}
        <div className="bg-gray-50 p-8 rounded-2xl shadow-md max-w-3xl mx-auto">
          <form onSubmit={e => { e.preventDefault(); alert("Message sent! (Demo)"); }}>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2 flex flex-col gap-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="w-full border border-teal-100 rounded-2xl px-4 py-3 outline-none focus:border-teal-500 bg-white"
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full border border-teal-100 rounded-2xl px-4 py-3 outline-none focus:border-teal-500 bg-white"
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    className="w-full border border-teal-100 rounded-2xl px-4 py-3 outline-none focus:border-teal-500 bg-white"
                    value={form.subject}
                    onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                  />
                </div>
              </div>
              <div className="md:w-1/2 flex flex-col gap-6">
                <div>
                  <textarea
                    name="message"
                    placeholder="Message"
                    className="w-full border border-teal-100 rounded-2xl px-4 py-3 outline-none focus:border-teal-500 bg-white min-h-[130px]"
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-end mt-6">
              <button
                type="submit"
                className="inline-block bg-teal-500 text-white px-8 py-3 rounded-md font-semibold shadow hover:bg-teal-600 transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

// Small card for contact info
function ContactInfo({ icon, label, value }) {
  return (
    <div className="bg-gray-50 rounded-xl shadow p-8 text-center flex flex-col items-center">
      <div className="mb-2 text-teal-500">{icon}</div>
      <span className="font-semibold text-gray-700 text-lg">{label}</span>
      <p className="text-gray-500">{value}</p>
    </div>
  );
}
