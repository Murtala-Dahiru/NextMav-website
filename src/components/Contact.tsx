import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    division: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [isVisible, setIsVisible] = useState(true);

  // Auto-dismiss success message after 6 seconds with fade-out
  useEffect(() => {
    if (status?.type === 'success') {
      setIsVisible(true);
      
      const fadeOutTimer = setTimeout(() => {
        setIsVisible(false);
      }, 5000); // Start fade-out at 5 seconds

      const removeTimer = setTimeout(() => {
        setStatus(null);
      }, 6000); // Remove message completely after 6 seconds

      return () => {
        clearTimeout(fadeOutTimer);
        clearTimeout(removeTimer);
      };
    }
  }, [status]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus(null);

    try {
      const { error } = await supabase.from('contacts').insert([
        {
          name: formData.name,
          email: formData.email,
          company: formData.company || null,
          division: formData.division || null,
          message: formData.message,
        },
      ]);

      if (error) throw error;

      setStatus({ type: 'success', message: 'Thank you! Your message has been sent successfully.' });
      setFormData({ name: '', email: '', company: '', division: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus({ type: 'error', message: 'Something went wrong. Please try again later.' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Start Your Transformation</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Ready to scale smarter and innovate faster? Let's discuss how NextMav can transform your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>Email: hello@nextmav.com</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Address: 123 Innovation Drive, Tech City, TC 12345</p>
            </div>

            <div className="mt-8">
              <h4 className="text-xl font-bold mb-4">Office Hours</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Monday - Friday: 9:00 AM - 6:00 PM EST
              </p>
            </div>

            <div className="mt-8">
              <h4 className="text-xl font-bold mb-4">What to Expect</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>� Strategic consultation within 24 hours</li>
                <li>� Custom solution proposal</li>
                <li>� Clear project roadmap and timeline</li>
                <li>� Transparent pricing and deliverables</li>
              </ul>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
                         focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
                         focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
                required
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
                         focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
              />
            </div>

            <div>
              <label htmlFor="division" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Interested Division
              </label>
              <select
                id="division"
                name="division"
                value={formData.division}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
                         focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
              >
                <option value="">Select a division</option>
                <option value="tech">NextMav Tech</option>
                <option value="media">NextMav Media</option>
                <option value="both">Both Divisions</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Project Details *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Tell us about your project, goals, and how we can help..."
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
                         focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
                required
              ></textarea>
            </div>

            <button type="submit" className="btn-primary w-full" disabled={isLoading}>
              {isLoading ? 'Sending...' : 'Start Your Project'}
            </button>

            {status && (
              <div 
                className={`p-4 rounded-lg border transition-all duration-1000 ease-out ${
                  !isVisible ? 'opacity-0 translate-y-1' : 'opacity-100 translate-y-0'
                } ${
                  status.type === 'success'
                    ? 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border-gray-200 dark:border-gray-700 shadow-md'
                    : 'bg-white dark:bg-gray-800 text-red-700 dark:text-red-300 border-red-200 dark:border-red-800 shadow-md'
                }`}
              >
                <p className="font-medium">{status.message}</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
