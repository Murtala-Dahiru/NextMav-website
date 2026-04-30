import React from 'react';
import { Target, Eye, CheckCircle, Users, Award, Lightbulb, Zap, Globe, TrendingUp, BarChart } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: CheckCircle,
      title: 'Ownership',
      description: 'We act like partners, not vendors.',
    },
    {
      icon: Award,
      title: 'Craft',
      description: 'Excellence is our baseline, not our goal.',
    },
    {
      icon: Target,
      title: 'Clarity',
      description: 'Strategy before execution, always.',
    },
    {
      icon: Lightbulb,
      title: 'Results',
      description: 'Because growth without impact is noise.',
    },
  ];

  const differentiators = [
    'We combine cloud infrastructure, intelligent automation, and product engineering in one firm.',
    'We engineer systems that scale, not short-term fixes.',
    'We operate with the speed of startups and the rigor of global technology consultancies.',
  ];

  const teamExpertise = [
    {
      icon: Target,
      title: 'Strategic Leadership',
      description: 'Former executives from top-tier consulting firms and Fortune 500 companies bring strategic thinking and deep industry expertise to every project.',
      stats: '5+ Years Average Experience'
    },
    {
      icon: Lightbulb,
      title: 'Product Engineering',
      description: 'Architects and engineers who have designed and shipped scalable products and platforms for global organizations and high-growth companies.',
      stats: '50+ Deployments'
    },
    {
      icon: Zap,
      title: 'Technical Innovation',
      description: 'Engineers and data scientists from leading tech companies, specializing in AI, automation, and scalable systems.',
      stats: '40+ Automation Projects'
    }
  ];

  const globalCapabilities = [
    'Multi-currency and multi-language infrastructure support',
    'Global compliance and security standards',
    'Scalable deployment and integration expertise',
    'Operational scaling across distributed markets'
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 via-blue-50/30 to-cyan-50/30 dark:from-gray-900 dark:via-blue-900/20 dark:to-cyan-900/20 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 animate-fade-in-up">
            We engineer systems
            <span className="gradient-text block mt-2">that power company growth.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-200">
            NextMav is a technology systems firm focused on transformation. We specialize in cloud infrastructure, intelligent automation, and digital product engineering for high-growth companies and established organizations. Our focus: building scalable systems that drive measurable business outcomes.
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl font-bold mb-6">Our Philosophy</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                We believe powerful technology should be purposeful. Every system we architect, every automation we deploy, and every platform we engineer is designed for measurable impact: reduced operational costs, faster deployments, improved reliability, and competitive advantage.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Operating across emerging and established markets, our team combines deep technical expertise with practical understanding of companies at every growth stage. We deliver technology solutions that work globally, for startups scaling rapidly and organizations optimizing operations.
              </p>
            </div>
            <div className="card bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-2 border-blue-100 dark:border-blue-800 animate-fade-in-up delay-200 hover-lift">
              <div className="text-center">
                <Lightbulb className="w-16 h-16 text-blue-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">Innovation at Our Core</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We operate at the intersection of technology, automation, and brand intelligence, 
                  helping companies transition from outdated systems to future-ready infrastructures and identities.
                </p>
              </div>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div className="card text-center hover-lift animate-fade-in-up">
              <Eye className="w-12 h-12 text-blue-600 mx-auto mb-6" />
              <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                To be the agency that redefines what companies can achieve on the world stage 
                building brands, growth engines, and systems that compete with the best globally.
              </p>
            </div>
            <div className="card text-center hover-lift animate-fade-in-up delay-200">
              <Target className="w-12 h-12 text-blue-600 mx-auto mb-6" />
              <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Empowering ambitious companies with world-class creativity, technology, and intelligence 
                to scale faster, smarter, and further.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Expertise */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title animate-fade-in-up">Global Expertise, Local Insight</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto animate-fade-in-up delay-200">
              Our team combines world-class expertise with deep understanding of emerging markets, 
              creating solutions that work both locally and globally.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {teamExpertise.map((expertise, index) => (
              <div key={index} className="card text-center group hover:scale-105 transition-all duration-300 hover:shadow-2xl animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <expertise.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-4">{expertise.title}</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">{expertise.description}</p>
                <div className="text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-3 py-2 rounded-full">
                  {expertise.stats}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title animate-fade-in-up">Built for Global Scale</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="card bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-2 border-blue-100 dark:border-blue-800 hover-lift animate-fade-in-up">
              <div className="text-center">
                <Globe className="w-16 h-16 text-blue-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">Innovation Hub</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Positioned at the heart of Africa's tech revolution, we understand the unique challenges 
                  and opportunities of emerging markets while maintaining global standards.
                </p>
              </div>
            </div>
            <div className="animate-fade-in-up delay-200">
              <h3 className="text-3xl font-bold mb-6">Bridging Markets</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                We don't just serve African companies   we help them compete globally. Our solutions are designed 
                to work in Lagos and London, Nairobi and New York, Cape Town and California.
              </p>
              <div className="space-y-4">
                {globalCapabilities.map((capability, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{capability}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our DNA */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title animate-fade-in-up">Our DNA</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-fade-in-up delay-200">
              The principles that drive everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {values.map((value, index) => (
              <div key={index} className="card text-center group hover:scale-105 transition-transform duration-300 hover-lift animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                <value.icon className="w-10 h-10 text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h4 className="text-xl font-bold mb-3">{value.title}</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Founded with a vision to position Africa as a hub for global innovation, NextMav was built on the belief 
                that great brands and systems should not only compete   they should dominate.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                From Lagos to global markets, our team blends strategy, design, technology, and marketing 
                to deliver world-class solutions with local insight.
              </p>
            </div>
            <div className="space-y-6 animate-fade-in-up delay-200">
              <h3 className="text-2xl font-bold mb-6">What Makes Us Different</h3>
              {differentiators.map((diff, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                  <p className="text-gray-600 dark:text-gray-300">{diff}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Metrics */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title animate-fade-in-up">Innovation by Numbers</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Users, label: 'Industries Served', value: '10+' },
              { icon: TrendingUp, label: 'Revenue Impact', value: '$2M+' },
              { icon: Zap, label: 'Automated Processes', value: '40+' },
              { icon: BarChart, label: 'Campaign Impressions', value: '200K+' },
            ].map((stat, index) => (
              <div key={index} className="card text-center group hover:scale-105 transition-transform duration-300 animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;