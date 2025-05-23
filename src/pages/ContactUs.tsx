import React, { useState } from "react";
import { toast } from 'react-hot-toast';
import contactService from '../services/ContactService.ts';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log('Contact Form Submission Initiated', formData);

    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      toast.error('Please fill in all required fields');
      console.error('Validation Failed: Missing Required Fields');
      return;
    }

    try {
      console.log('Attempting to submit contact form...');
      
      // Submit form data using contact service
      const response = await contactService.submitContactForm(formData);
      
      console.log('Contact Form Submission Response:', response);

      // Show success toast
      toast.success('Message sent successfully! We will get back to you soon.');
      
      // Reset form
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (error) {
      // Show error toast
      console.error('Contact Form Submission Error:', error);
      toast.error('Failed to send message. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-50 via-white to-indigo-50 flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold mb-6 text-indigo-900">Contact Us</h1>

      <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg p-8 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left info section */}
        <div className="space-y-4 text-indigo-900">
          <h2 className="text-2xl font-semibold mb-2">BHARAT INFOTECH SOLUTIONS</h2>

          <p className="font-semibold">Reg.Office:</p>
          <address className="not-italic mb-4">
            104/209, Kamdhenu Complex,<br />
            Opp. SBI, Near Gay Circle,<br />
            Productivity Road, Vadodara, India-390020
          </address>

          <p className="font-semibold">Corp. Office:</p>
          <address className="not-italic mb-4">
            306-307, World Trade Centre,<br />
            3rd Floor, Sayajigunj, Vadodara. India-390005
          </address>

          <p><span className="font-semibold">Mobile:</span> +91-7567148677</p>
          <p><span className="font-semibold">Email:</span> <a href="mailto:info@bharatinfotechsolutions.com" className="text-indigo-600 underline">info@bharatinfotechsolutions.com</a></p>
        </div>

        {/* Right form section */}
        <form onSubmit={handleSubmit} className="space-y-4 text-indigo-900">
          <div>
            <label htmlFor="name" className="block mb-1 font-medium">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-md border border-indigo-300 p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 font-medium">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-md border border-indigo-300 p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block mb-1 font-medium">Phone*</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full rounded-md border border-indigo-300 p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              pattern="[0-9]{10,15}"
              title="Please enter a valid phone number"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block mb-1 font-medium">Subject</label>
            <input
              id="subject"
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleChange}
              className="w-full rounded-md border border-indigo-300 p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-1 font-medium">Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full rounded-md border border-indigo-300 p-2 resize-y focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-md hover:bg-indigo-700 transition"
          >
            Send Message ⟶
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
