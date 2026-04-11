import React, { useState } from 'react';
import { ArrowRight, Mail, MapPin, Users, Briefcase } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    division: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const faqs = [
    {
      question: 'What types of clients do you work with?',
      answer: 'We partner with ambitious startups, scale-ups, and enterprises. If your goal is to scale, innovate, or transform   we\'re a fit.'
    },
    {
      question: 'Do you work with clients outside Africa?',
      answer: 'Yes. While our roots are African, our work is borderless. We\'ve partnered with companies expanding across multiple continents.'
    },
    {
      question: 'What is your typical project timeline?',
      answer: 'Most engagements range from 3–12 weeks, depending on scope. Long-term retainers are also available.'
    },
    {
      question: 'What investment level do you work at?',
      answer: 'Our projects are built for growth-stage and enterprise-level budgets. If you\'re seeking lowest-cost solutions, we\'re probably not the right fit.'
    },
    {
      question: 'How do we start working together?',
      answer: 'It begins with a project discovery call. From there, we map your goals, design a proposal, and align on timelines before kickoff.'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 via-blue-50/30 to-cyan-50/30 dark:from-gray-900 dark:via-blue-900/20 dark:to-cyan-900/20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            Let's Build the Future,
            <span className="gradient-text block mt-2">Together</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We don't take on every project   only the ones where we can deliver transformative impact. 
            If you're ready to build, scale, or modernize your business, start the conversation below.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-8">Start a Conversation</h2>
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
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 
                             focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 
                             transition-all duration-200 hover:border-gray-400 dark:hover:border-gray-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Company *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 
                             focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 
                             transition-all duration-200 hover:border-gray-400 dark:hover:border-gray-500"
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
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 
                             focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 
                             transition-all duration-200 hover:border-gray-400 dark:hover:border-gray-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="division" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    How can we help you?
                  </label>
                  <select
                    id="division"
                    name="division"
                    value={formData.division}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-600
                             focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800
                             transition-all duration-200 hover:border-gray-400 dark:hover:border-gray-500"
                  >
                    <option value="">Select an option</option>
                    <optgroup label="Cloud & Infrastructure Excellence">
                      <option value="cloud-strategy">Cloud Strategy, Architecture & Foundation Setup</option>
                      <option value="platform-engineering">Platform Engineering & Delivery Automation (DevOps)</option>
                      <option value="cloud-reliability">Cloud Reliability, SRE & Managed Operations</option>
                      <option value="cloud-security">Cloud Security, Risk & Compliance</option>
                      <option value="cloud-financial">Cloud Financial Management & Optimization (FinOps)</option>
                    </optgroup>
                    <optgroup label="AI, Data & Intelligent Operations">
                      <option value="ai-strategy">Generative AI Strategy & Enterprise AI Pilots</option>
                      <option value="data-strategy">Data Strategy, Governance & Modernization</option>
                      <option value="decision-intelligence">Decision Intelligence & Advanced Analytics</option>
                      <option value="intelligent-automation">Intelligent Process & Workflow Automation (IPA)</option>
                    </optgroup>
                    <optgroup label="Digital Product & Experience Transformation">
                      <option value="digital-transformation">Digital Transformation & Product Strategy</option>
                      <option value="product-engineering">Digital Product Engineering & Platforms</option>
                      <option value="experience-design">Product Experience & Service Design</option>
                      <option value="low-code">Low-Code, No-Code & Citizen Developer Enablement</option>
                    </optgroup>
                    <optgroup label="Other Inquiries">
                      <option value="general-inquiry">General Inquiry</option>
                      <option value="consultation">Consultation Request</option>
                      <option value="partnership">Partnership / Collaboration</option>
                      <option value="managed-support">Managed IT Support</option>
                      <option value="ongoing-support">Ongoing Support / Maintenance</option>
                      <option value="project-discussion">Project Discussion</option>
                      <option value="technical-advisory">Technical Advisory</option>
                      <option value="other">Other</option>
                    </optgroup>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message / Project Brief *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell us about your project, goals, and how we can help transform your business..."
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 
                             focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 
                             transition-all duration-200 hover:border-gray-400 dark:hover:border-gray-500"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary w-full text-lg py-4">
                  Start a Conversation
                  <ArrowRight className="ml-2" size={20} />
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8 order-1 md:order-2">
              <div>
                <h3 className="text-2xl font-bold mb-6">Direct Contact</h3>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <a href="mailto:partners@nextmav.com" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                        partners@nextmav.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">Headquarters</p>
                      <p className="text-gray-600 dark:text-gray-300">Abuja, Nigeria</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-2 border-blue-100 dark:border-blue-800">
                <h4 className="text-xl font-bold mb-4">Streamlined Communication</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  We prefer streamlined communication. Please reach us via email or the contact form 
                  our team responds fast.
                </p>
              </div>

              <div className="card border border-gray-100 dark:border-gray-700">
                <h4 className="text-xl font-bold mb-4">Global Confidence</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  We partner with ambitious teams across Africa and beyond. Whether you're a fintech in Lagos, 
                  a retail brand in Nairobi, or a global SaaS entering new markets   NextMav is your advantage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">Join NextMav   Build What Matters</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              We're building a remote-first team of Africa's sharpest creative minds, strategists, and technologists. 
              At NextMav, talent isn't limited by geography   work with us from anywhere in the world.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold mb-8">Why Join Us</h3>
              <div className="space-y-6">
                {[
                  { icon: Users, title: 'Remote-first culture', desc: 'collaborate from anywhere.' },
                  { icon: Briefcase, title: 'Work on projects with real market impact', desc: 'build solutions that matter.' },
                  { icon: Users, title: 'Collaborate with top-tier thinkers & doers', desc: 'learn from the best.' },
                  { icon: Briefcase, title: 'Build skills at the intersection', desc: 'of brand, growth & tech.' },
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <benefit.icon className="w-6 h-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">{benefit.title}</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-2 border-blue-100 dark:border-blue-800">
              <div className="text-center">
                <h4 className="text-2xl font-bold mb-4">Ready to Join Our Team?</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Send us your portfolio, tell us what excites you about NextMav, and let's explore how you can contribute to our mission.
                </p>
                <a href="mailto:careers@nextmav.com" className="btn-primary inline-flex items-center">
                  Send Your Application
                  <ArrowRight className="ml-2" size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">Questions We Often Hear</h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="card">
                <h4 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{faq.question}</h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="mailto:partners@nextmav.com" className="btn-primary inline-flex items-center text-lg px-8 py-4">
              Request a Discovery Call
              <ArrowRight className="ml-2" size={24} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;