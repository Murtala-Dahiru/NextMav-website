import React from 'react';
import { Palette, Monitor, Smartphone, Users, ArrowRight, CheckCircle, Award, Eye } from 'lucide-react';
import { useRouter } from '../../utils/router';

const ExperienceStudio = () => {
  const { navigate } = useRouter();

  const coreServices = [
    {
      icon: Monitor,
      title: 'Digital Product Engineering & Platforms',
      description: 'We build scalable digital products and platforms using modern engineering practices that deliver exceptional performance. Our solutions ensure optimal user experiences and technical reliability.',
      features: [
        'Web & Mobile Development',
        'Platform development',
        'Performance optimization'
      ]
    },
    {
      icon: Eye,
      title: 'Product Experience & Service Design',
      description: 'We design intuitive user experiences and service interactions that drive engagement and conversion. Our approach ensures customer satisfaction across all digital touchpoints.',
      features: [
        'User experience design',
        'Service design',
        'Interaction optimization'
      ]
    },
    {
      icon: Smartphone,
      title: 'Accelerated Delivery & Enablement ',
      description: 'We implement low-code and no-code platforms that enable rapid application development and empower business users. Our solutions accelerate innovation while maintaining governance standards.',
      features: [
        'Low-code/no-code platform implementation',
        'Internal Tooling & Developer Portals',
        'Workforce Digital Enablement'
      ]
    }
  ];

  const useCases = [
    {
      title: 'Digital Product Development',
      challenge: 'Outdated product limiting user engagement and market competitiveness',
      solution: 'End-to-end product development with modern tech stack and user-centered design',
      outcome: 'Successful launch, strong adoption, positive market response'
    },
    {
      title: 'Customer Portal Redesign',
      challenge: 'Legacy portal with poor UX causing low adoption and support tickets',
      solution: 'Modern web platform with intuitive design and self-service capabilities',
      outcome: '80% adoption rate, 4.7/5 user rating, 40% faster task completion'
    },
    {
      title: 'Low-Code Platform Enablement',
      challenge: 'Development bottlenecks preventing rapid business application creation',
      solution: 'Low-code platform implementation with citizen developer enablement program',
      outcome: '70% faster development, 50% reduction in IT backlog, business agility'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-pink-50 via-rose-50/30 to-purple-50/30 dark:from-pink-900/20 dark:via-rose-900/10 dark:to-purple-900/20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-pink-400/20 to-rose-400/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-rose-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg">
            <Palette className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-8 animate-fade-in-up">
            Digital Product & Experience Transformation
            <span className="gradient-text block mt-2">End-to-end digital product development</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-200">
            End-to-end digital product development services that create exceptional user experiences and enable rapid innovation through modern engineering practices. We transform digital touchpoints into competitive advantages.
          </p>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title animate-fade-in-up">Core Services</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-fade-in-up delay-200">
              Digital product and experience services that drive user engagement and business growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {coreServices.map((service, index) => (
              <div key={index} className="card group hover:scale-105 transition-all duration-300 hover:shadow-2xl border border-gray-100 dark:border-gray-700 animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{service.description}</p>
                <ul className="space-y-2 mt-4">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                      <span className="text-pink-500 mr-3 text-base">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Why Digital Product Excellence Matters</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Digital products and experiences directly impact customer acquisition, retention, and revenue generation. 
                Well-designed products and optimized experiences create competitive advantages while poor experiences drive customers to competitors.
              </p>
              <div className="space-y-4">
                {[
                  'Strategic product development that drives business growth',
                  'User experiences that increase engagement and conversion',
                  'Modern engineering practices that ensure scalability',
                  'Low-code enablement that accelerates innovation'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-pink-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="card bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 border-2 border-pink-100 dark:border-pink-800 animate-fade-in-up delay-200">
              <div className="text-center">
                <Award className="w-16 h-16 text-pink-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">Experience Excellence</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Our digital products typically increase user engagement by 150% and conversion rates by 200% through strategic design and engineering.
                </p>
                <p className="text-sm text-pink-600 dark:text-pink-400 font-semibold">
                  Products that drive business results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Clients Can Expect */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title animate-fade-in-up">What Clients Can Expect</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-fade-in-up delay-200">
              Exceptional digital products that delight users and achieve business objectives
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center group hover:scale-105 transition-all duration-300 hover:shadow-2xl border border-gray-100 dark:border-gray-700 animate-fade-in-up">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">User-Centered Design</h4>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Intuitive experiences designed around user needs and behaviors, 
                resulting in higher satisfaction and engagement rates.
              </p>
            </div>
            
            <div className="card text-center group hover:scale-105 transition-all duration-300 hover:shadow-2xl border border-gray-100 dark:border-gray-700 animate-fade-in-up delay-200">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Modern Engineering</h4>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Scalable, high-performance products built with modern engineering practices 
                that ensure reliability and maintainability.
              </p>
            </div>
            
            <div className="card text-center group hover:scale-105 transition-all duration-300 hover:shadow-2xl border border-gray-100 dark:border-gray-700 animate-fade-in-up delay-300">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Business Impact</h4>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Products and experiences optimized for conversion and business growth 
                with measurable impact on key performance indicators.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Engagements */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title animate-fade-in-up">Sample Engagements</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-fade-in-up delay-200">
              Digital product transformations that demonstrate the power of strategic design and engineering
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="card group hover:scale-105 transition-all duration-300 hover:shadow-2xl border border-gray-100 dark:border-gray-700 animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">{useCase.title}</h4>
                <div className="space-y-4 text-sm">
                  <div>
                    <span className="font-semibold text-red-600 dark:text-red-400">Challenge: </span>
                    <span className="text-gray-600 dark:text-gray-300">{useCase.challenge}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-pink-600 dark:text-pink-400">Solution: </span>
                    <span className="text-gray-600 dark:text-gray-300">{useCase.solution}</span>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-3">
                    <span className="font-semibold text-green-800 dark:text-green-200">Outcome: </span>
                    <span className="text-green-700 dark:text-green-300 font-semibold">{useCase.outcome}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="card border-2 border-pink-100 dark:border-pink-800">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Digital Products?</h3>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Let's create exceptional digital experiences that drive user engagement and business growth.
            </p>
            <button 
              onClick={() => navigate('/contact')}
              className="btn-primary inline-flex items-center text-lg px-8 py-4 group"
            >
              Start Your Product Transformation
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={24} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExperienceStudio;