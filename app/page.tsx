"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });

    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy via-navy-dark to-navy min-h-screen flex items-center justify-center px-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.1),transparent_50%)]" />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-gold-light to-gold bg-clip-text text-transparent">
            The VA Group
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Elite virtual assistants empowering businesses to scale faster, work smarter, and achieve more.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-gold hover:bg-gold-light text-navy font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-gold/50"
            >
              Get Started
            </a>
            <a
              href="#testimonials"
              className="border-2 border-gold text-gold hover:bg-gold hover:text-navy font-semibold px-8 py-4 rounded-lg transition-all duration-300"
            >
              See Success Stories
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-6 bg-navy-dark">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4 text-white">
            Client Success Stories
          </h2>
          <p className="text-xl text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            See how we've helped businesses transform their operations with our expert virtual assistants.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="group relative overflow-hidden rounded-xl shadow-2xl hover:shadow-gold/20 transition-all duration-500">
              <Image
                src="/images/img_1.png"
                alt="Client testimonial"
                width={800}
                height={800}
                className="w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Testimonial 2 */}
            <div className="group relative overflow-hidden rounded-xl shadow-2xl hover:shadow-gold/20 transition-all duration-500">
              <Image
                src="/images/img_4.png"
                alt="Client testimonial"
                width={800}
                height={800}
                className="w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Testimonial 3 */}
            <div className="group relative overflow-hidden rounded-xl shadow-2xl hover:shadow-gold/20 transition-all duration-500 md:col-span-2 lg:col-span-1">
              <Image
                src="/images/img_6.png"
                alt="Client testimonial"
                width={1600}
                height={900}
                className="w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-br from-navy-dark via-navy to-navy-dark">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4 text-white">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-400 text-center mb-12">
            Ready to take your business to the next level? Get in touch with us today.
          </p>

          <form onSubmit={handleSubmit} className="bg-navy-dark/50 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-gold/20">
            <div className="mb-6">
              <label htmlFor="name" className="block text-gold font-semibold mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-navy border border-gold/30 rounded-lg focus:outline-none focus:border-gold text-white placeholder-gray-500"
                placeholder="John Doe"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-gold font-semibold mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-navy border border-gold/30 rounded-lg focus:outline-none focus:border-gold text-white placeholder-gray-500"
                placeholder="john@company.com"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-gold font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-navy border border-gold/30 rounded-lg focus:outline-none focus:border-gold text-white placeholder-gray-500 resize-none"
                placeholder="Tell us about your project..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gold hover:bg-gold-light text-navy font-bold py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-gold/50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {submitted && (
              <div className="mt-4 p-4 bg-gold/10 border border-gold rounded-lg text-center">
                <p className="text-gold font-semibold">✓ Message sent successfully! We'll be in touch soon.</p>
              </div>
            )}
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-dark py-8 px-6 border-t border-gold/20">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} The VA Group. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
