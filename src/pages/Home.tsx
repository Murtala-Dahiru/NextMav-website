import React from 'react';
import { ArrowRight, Zap, Shield, TrendingUp, Users, CheckCircle, Target, Eye, Lightbulb, Star, Award, BarChart, Cloud, Bot, Code, Palette } from 'lucide-react';
import { useRouter } from '../utils/router';

const Home = () => {
  const { navigate } = useRouter();

  const partners = [
    {
      name: 'Microsoft',
      logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&w=200&h=100&q=80',
      tier: 'Strategic'
    },
    {
      name: 'Google Cloud',
      logo: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=200&h=100&q=80',
      tier: 'Strategic'
    },
    {
      name: 'Amazon AWS',
      logo: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=200&h=100&q=80',
      tier: 'Strategic'
    },
    {
      name: 'Salesforce',
      logo: 'https://images.unsplash.com/photo-1496096265110-f83ad7f96608?auto=format&fit=crop&w=200&h=100&q=80',
      tier: 'Technology'
    },
    {
      name: 'Adobe',
      logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&w=200&h=100&q=80',
      tier: 'Technology'
    },
    {
      name: 'Adobe',
      logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&w=200&h=100&q=80',
      tier: 'Technology'
    },
    {
      name: 'IBM',
      logo: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=200&h=100&q=80',
      tier: 'Technology'
    },
  ];

  const achievements = [
    {
      icon: Award,
      title: 'Certified Excellence',
      description: 'Gold-tier partnerships with leading technology providers'
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'SOC 2 Type II compliant with industry-leading security standards'
    },
    {
      icon: Star,
      title: 'Innovation Leader',
      description: 'Recognized as a top innovation partner by major tech companies'
    }
  ];

  const articles = [
    {
      title: 'The Future of AI in Business: Opportunities & Risks',
      excerpt: 'Explore how artificial intelligence is reshaping business landscapes and what it means for your organization.',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80',
      date: 'March 15, 2024',
    },
    {
      title: 'Cloud Cost Optimization: How Companies Save Millions',
      excerpt: 'Learn the strategies and best practices for optimizing your cloud infrastructure costs.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
      date: 'March 10, 2024',
    },
    {
      title: 'Cybersecurity in 2025: Key Trends & Challenges',
      excerpt: 'Stay ahead of emerging cybersecurity threats and prepare your organization for the future.',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
      date: 'March 5, 2024',
    },
  ];

  const workProcess = [
    {
      step: '01',
      title: 'Diagnose',
      description: '30-minute audit → quick wins and a clear roadmap.',
      icon: Target
    },
    {
      step: '02',
      title: 'Execute',
      description: 'High-quality delivery led by a dedicated Delivery Lead.',
      icon: Zap
    },
    {
      step: '03',
      title: 'Scale',
      description: 'Automation and retainers that turn wins into sustained growth.',
      icon: TrendingUp
    }
  ];

  const values = [
    {
      icon: CheckCircle,
      title: 'Innovation',
      description: 'We push the boundaries of technology to provide groundbreaking solutions.',
    },
    {
      icon: CheckCircle,
      title: 'Excellence',
      description: 'We deliver premium, high-impact solutions tailored for success.',
    },
    {
      icon: CheckCircle,
      title: 'Strategic Partnership',
      description: 'We collaborate with our clients to ensure sustained growth and success.',
    },
    {
      icon: CheckCircle,
      title: 'Future-Ready',
      description: 'We build solutions that adapt and scale with your business needs.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 bg-gradient-to-br from-gray-50 via-blue-50/30 to-cyan-50/30 dark:from-gray-900 dark:via-blue-900/20 dark:to-cyan-900/20 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[600px]">
            {/* Left Side - Content */}
            <div className="space-y-8 animate-fade-in-up">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                We are the last technology partner
                <span className="gradient-text block mt-2">your business will ever need.</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
                NextMav engineers scalable, high-performance systems, deploys intelligent automation, and powers businesses to operate continuously, handle increasing demand, and expand globally with confidence.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  onClick={() => navigate('/contact')}
                  className="btn-primary inline-flex items-center justify-center group"
                >
                  Book a Growth Audit
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={20} />
                </button>
                <button
                  onClick={() => navigate('/services')}
                  className="btn-ghost inline-flex items-center justify-center group"
                >
                  Explore Our Services
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={16} />
                </button>
              </div>

              {/* Feature highlights - Desktop only */}
              <div className="hidden lg:grid grid-cols-2 gap-4 pt-8">
                {[
                  { icon: Cloud, title: 'Cloud Excellence', desc: 'Scalable architecture' },
                  { icon: Bot, title: 'AI & Data Intelligence', desc: 'Intelligent operations' },
                  { icon: Code, title: 'Digital Infrastructure & Technology Solutions', desc: 'Systems integration' },
                  { icon: Shield, title: 'Security & Compliance', desc: 'Industry standards' },
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-white/50 dark:hover:bg-gray-800/50 transition-all duration-300">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white text-sm">{feature.title}</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-300">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Premium Tech Visual */}
            <div className="relative lg:h-[600px] h-[400px] animate-fade-in-up delay-200">
              {/* Main visual container */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900/90 to-gray-900 border border-blue-500/20 shadow-2xl">
                {/* Animated glow orbs - Simplified */}
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>

                {/* Tech imagery */}
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <img
                    src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80"
                    alt="Cloud Infrastructure"
                    className="w-full h-full object-cover rounded-xl opacity-60 mix-blend-luminosity"
                  />
                </div>



                {/* Bottom accent bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
              </div>

              {/* Floating tech badges */}
              <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 p-4 backdrop-blur-sm hidden lg:block">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">99.9% Uptime</span>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 p-4 backdrop-blur-sm hidden lg:block">
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-blue-500" />
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">Security & Compliance</span>
                </div>
              </div>
            </div>

            {/* Mobile feature highlights */}
            <div className="grid grid-cols-2 gap-4 lg:hidden">
              {[
                { icon: Cloud, title: 'Cloud Excellence', desc: 'Scalable architecture' },
                { icon: Bot, title: 'AI & Data Intelligence', desc: 'Intelligent operations' },
                { icon: Code, title: 'Digital Infrastructure & Technology Solutions', desc: 'Systems integration' },
                { icon: Shield, title: 'Security & Compliance', desc: 'Industry standards' },
              ].map((feature, index) => (
                <div key={index} className="card text-center group hover:shadow-lg transition-all duration-300">
                  <feature.icon className="w-8 h-8 text-blue-600 mx-auto mb-3 transition-transform duration-300" />
                  <h4 className="font-bold text-gray-900 dark:text-white mb-1 text-sm">{feature.title}</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-300">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Three Core Divisions */}
      <section className="py-16 px-4 bg-white dark:bg-gray-900 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-100/10 to-cyan-100/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-purple-100/10 to-blue-100/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title animate-fade-in-up">Core Divisions</h2>
            <p className="text-lg text-gray-500 dark:text-gray-400 mb-4 animate-fade-in-up delay-200">
              One Intelligent Ecosystem
            </p>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto animate-fade-in-up delay-300">
              We partner with ambitious organizations at every growth stage from startups launching their first product to established companies scaling globally. Our three divisions combine cloud infrastructure, intelligent automation, and digital systems integration to help any organization move faster, operate smarter, and achieve technical excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: Cloud, 
                title: 'Cloud & Infrastructure Excellence',
                tagline: 'Cloud strategy, architecture, and operations.',
                description: 'Comprehensive cloud transformation from strategy and architecture to security, reliability, and financial optimization.',
                services: [
                  'Cloud Strategy, Architecture & Foundation Setup',
                  'Platform Engineering & Delivery Automation (DevOps)',
                  'Cloud Reliability, SRE & Managed Operations',
                  'Cloud Security, Risk & Compliance',
                  'Cloud Financial Management & Optimization (FinOps)'
                ],
                link: '/divisions/cloud-infrastructure-excellence',
                gradient: 'from-blue-500 to-cyan-500'
              },
              {
                icon: Bot,
                title: 'AI, Data & Intelligent Operations',
                tagline: 'AI strategy and intelligent automation.',
                description: 'Strategic AI implementation, data modernization, advanced analytics, and intelligent process automation for operational excellence.',
                services: [
                  'Generative AI Strategy & AI Pilots',
                  'Data Strategy, Governance & Modernization',
                  'Decision Intelligence & Advanced Analytics',
                  'Intelligent Process & Workflow Automation (IPA)'
                ],
                link: '/divisions/ai-data-intelligent-operations',
                gradient: 'from-purple-500 to-indigo-500'
              },
              {
                icon: Code,
                title: 'Digital Infrastructure & Technology Solutions',
                tagline: 'Systems Integration & Enterprise Platform Engineering',
                description: 'We build and integrate mission-critical digital systems, financial infrastructure, and managed technology operations for enterprise organizations.',
                services: [
                  'Platform Engineering',
                  'Financial Systems & Fintech Integration',
                  'Managed Technology Operations & CTO Services',
                  'Accelerated Delivery & Digital Enablement'
                ],
                link: '/divisions/digital-infrastructure-technology-solutions',
                gradient: 'from-slate-500 to-stone-500'
              }
            ].map((pillar, index) => (
              <div key={index} className="card hover:scale-105 transition-all duration-300 hover:shadow-2xl animate-fade-in-up border border-gray-100 dark:border-gray-700" 
                   style={{animationDelay: `${index * 0.1}s`}}>
                <div className={`w-16 h-16 bg-gradient-to-br ${pillar.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <pillar.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{pillar.title}</h3>
                <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-3">{pillar.tagline}</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 leading-relaxed">{pillar.description}</p>
                <div className="space-y-1 mb-6">
                  {pillar.services.map((service, sIndex) => (
                    <div key={sIndex} className="text-xs text-gray-500 dark:text-gray-400 flex items-start">
                      <span className="w-1 h-1 bg-gray-400 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                      {service}
                    </div>
                  ))}
                </div>
                <a
                  href={`#${pillar.link}`}
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/40 active:scale-95 transition-all duration-200"
                >
                  Learn More <ArrowRight className="w-4 h-4 transition-transform duration-200" />
                </a>
              </div>
            ))}
          </div>

          <div className="text-center animate-fade-in-up delay-500">
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              From cloud excellence to intelligent operations and digital infrastructure integration   we deliver enterprise-grade solutions that drive measurable business outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">Driven by Systems Engineering, Trusted at Scale</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              NextMav is a technology systems partner focused on transformation. From high-growth startups to established organizations, we engineer scalable infrastructure, deploy intelligent automation, and enable organizations to operate at their full potential.
            </p>
          </div>

          <div className="grid md:grid-cols-[55%_45%] gap-16 items-start mb-16">
            <div>
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <Target className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-3xl font-bold">Our Mission</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-lg">
                  To enable organizations at any growth stage to build reliable, scalable systems that drive competitive advantage.
                </p>
              </div>

              <div>
                <div className="flex items-center mb-4">
                  <Eye className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-3xl font-bold">Our Vision</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-lg">
                  To be the technology partner that enables organizations to build scalable systems, automate operations, and compete at their highest potential from ambitious startups to global organizations.
                </p>
              </div>
            </div>

            <div className="card hover:shadow-lg transition-all duration-300">
              <Lightbulb className="w-12 h-12 text-slate-600 dark:text-slate-400 mb-6" />
              <h4 className="text-2xl font-bold mb-4">Our Vision in Action</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We build systems that operate reliably. We architect infrastructure that enables growth. We deploy automation that transforms how teams work.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We're designed for ambitious organizations: high-growth startups, scaling mid-market companies, and organizations optimizing operations.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                We operate at the intersection of cloud systems, data intelligence, and systems integration, helping companies move from manual processes to autonomous, data-driven operations at any scale.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card text-center group hover:shadow-lg transition-all duration-300">
                <value.icon className="w-8 h-8 text-blue-600 mx-auto mb-4 transition-transform duration-300" />
                <h4 className="text-xl font-bold mb-3">{value.title}</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-24 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">How We Work</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our proven methodology delivers transformative results through strategic execution
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {workProcess.map((process, index) => {
              const isFirstCard = index === 0;
              return (
              <div key={index} className={`card text-center group ${isFirstCard ? 'hover:scale-105' : 'hover:shadow-lg'} transition-all duration-300`}>
                <div className={`w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 transition-transform duration-300 ${isFirstCard ? 'group-hover:scale-110' : ''}`}>
                  <process.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-blue-600 mb-2">{process.step}</div>
                <h3 className="text-2xl font-bold mb-4">{process.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{process.description}</p>
              </div>
            );
            })}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900 relative overflow-hidden">
        {/* Premium background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-100/20 to-cyan-100/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-purple-100/20 to-blue-100/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-full text-blue-700 dark:text-blue-300 text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              Elite Partnership Network
            </div>
            <h2 className="section-title">Trusted by Global Leaders</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              We maintain exclusive partnerships with the world's most innovative technology companies, 
              ensuring our clients receive cutting-edge solutions and unparalleled support.
            </p>
          </div>

          {/* Professional partner logo stripe */}
          <div className="mb-20">
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 lg:gap-12">
              {[
                { name: 'Microsoft', logo: 'https://images.unsplash.com/photo-1633356122544-f134324ef6e6?auto=format&fit=crop&w=300&q=80' },
                { name: 'Google Cloud', logo: 'https://images.unsplash.com/photo-1625948515291-69613efd103f?auto=format&fit=crop&w=300&q=80' },
                { name: 'Amazon AWS', logo: 'https://images.unsplash.com/photo-1634942537034-9c89d0d5b1d9?auto=format&fit=crop&w=300&q=80' },
                { name: 'Salesforce', logo: 'https://images.unsplash.com/photo-1633356122544-f134324ef6e6?auto=format&fit=crop&w=300&q=80' },
                { name: 'Adobe', logo: 'https://images.unsplash.com/photo-1625948515291-69613efd103f?auto=format&fit=crop&w=300&q=80' },
                { name: 'IBM', logo: 'https://images.unsplash.com/photo-1634942537034-9c89d0d5b1d9?auto=format&fit=crop&w=300&q=80' }
              ].map((partner, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center group transition-all duration-300 hover:scale-110"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    title={partner.name}
                    className="max-h-12 lg:max-h-14 max-w-full w-auto object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Premium CTA section */}
          <div className="card text-center bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-2 border-blue-100 dark:border-blue-800">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-3xl font-bold mb-4">Join Our Exclusive Partner Network</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Partner with NextMav and gain access to our elite network of technology leaders, 
                exclusive resources, and collaborative opportunities that drive mutual growth.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button 
                  onClick={() => navigate('/contact')}
                  className="btn-primary inline-flex items-center group"
                >
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Apply for Partnership
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={16} />
                </button>
                <button className="px-6 py-3 text-blue-600 dark:text-blue-400 border-2 border-blue-600 dark:border-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors duration-200 font-semibold">
                  Partnership Benefits
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <div className="card bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-2 border-blue-100 dark:border-blue-800">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h3>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Join the companies that chose NextMav to scale smarter, operate faster, and secure their future.
            </p>
            <button 
              onClick={() => navigate('/contact')}
              className="btn-primary inline-flex items-center text-lg px-8 py-4 group"
            >
              Book a Growth Audit
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={24} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;