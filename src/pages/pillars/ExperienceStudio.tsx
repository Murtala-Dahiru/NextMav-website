import React from 'react';
import { Code, Database, Zap, Cpu, ArrowRight, CheckCircle, Award, Shield } from 'lucide-react';
import { useRouter } from '../../utils/router';

const ExperienceStudio = () => {
  const { navigate } = useRouter();

  const coreServices = [
    {
      icon: Code,
      title: 'Platform Engineering',
      description: 'We engineer scalable digital platforms, applications, and integrated systems that power modern business operations.',
      features: [
        'Custom Software Development',
        'Web & Mobile Application Development',
        'SaaS Platform Development',
        'API Development & System Integration',
        'System Architecture & Platform Engineering'
      ]
    },
    {
      icon: Zap,
      title: 'Financial Systems & Fintech Integration',
      description: 'We integrate modern financial technologies that enable secure payment processing, transaction management, and financial connectivity.',
      features: [
        'Payment Gateway Integration',
        'Financial API Integration',
        'Virtual Account & Bank Integration',
        'Recurring Payment (Subscription & Billing) Integration'
      ]
    },
    {
      icon: Cpu,
      title: 'Managed Technology Operations & CTO Services',
      description: 'We provide operational technology management and strategic leadership that help businesses scale with confidence.',
      features: [
        'Managed IT Services & Business Systems Support',
        'Fractional CTO / Virtual CTO Services',
        'Business Technology & Operational Excellence',
        'System Maintenance & Operational Support',
        'IT Operations Management'
      ]
    },
    {
      icon: Database,
      title: 'Accelerated Delivery & Digital Enablement',
      description: 'We help organizations accelerate solution delivery through modern development enablement and rapid implementation systems.',
      features: [
        'Rapid Application Development (Low-code / No-code Integration)',
        'Internal Tools & Developer Productivity Systems',
        'Business Process Digitization & Workflow Enablement'
      ]
    }
  ];

  const useCases = [
    {
      title: 'Enterprise Platform Integration',
      challenge: 'Disconnected financial systems limiting operational efficiency and reporting accuracy',
      solution: 'Integrated platform with real-time data synchronization and unified financial operations',
      outcome: '50% reduction in manual processes, real-time financial visibility, improved compliance'
    },
    {
      title: 'Payment Infrastructure Modernization',
      challenge: 'Legacy payment systems with poor scalability and limited payment method support',
      solution: 'Modern payment gateway integration with multi-currency and multi-method support',
      outcome: '99.9% uptime, 40% faster transaction processing, 150% increase in payment methods'
    },
    {
      title: 'Fractional CTO & Technology Strategy',
      challenge: 'Technology decisions without strategic oversight or technology architecture governance',
      solution: 'Fractional CTO engagement providing technology strategy and operational governance',
      outcome: 'Aligned technology roadmap, reduced technical debt, 60% faster delivery cycles'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 via-stone-50/30 to-slate-50/30 dark:from-slate-900/20 dark:via-stone-900/10 dark:to-slate-900/20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-slate-400/20 to-stone-400/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-slate-400/20 to-stone-400/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="w-20 h-20 bg-gradient-to-br from-slate-600 to-stone-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg">
            <Code className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-8 animate-fade-in-up">
            Digital Infrastructure & Technology Solutions
            <span className="gradient-text block mt-2">Systems engineering for scalable operations</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-200">
            We design, build, integrate, and manage the digital and financial systems that modern businesses rely on to operate and scale. From platform engineering to financial infrastructure, we deliver modern, scalable technology solutions.
          </p>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title animate-fade-in-up">Core Services</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-fade-in-up delay-200">
              Scalable systems integration and technology solutions that drive operational excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {coreServices.map((service, index) => (
              <div key={index} className="card group hover:scale-105 transition-all duration-300 hover:shadow-2xl border border-gray-100 dark:border-gray-700 animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="w-16 h-16 bg-gradient-to-br from-slate-600 to-stone-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{service.description}</p>
                <ul className="space-y-2 mt-4">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                      <span className="text-slate-600 mr-3 text-base">✓</span>
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
              <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Why Reliable Systems Matter</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Digital infrastructure and integrated systems directly impact operational efficiency, financial accuracy, scalability, and competitive advantage. 
                Modern businesses require reliable platforms, secure financial systems, and strategic technology leadership to operate at scale.
              </p>
              <div className="space-y-4">
                {[
                  'Scalable, modern platforms that grow with operational demand',
                  'Financial infrastructure that enables secure transactions and compliance',
                  'Technology operations that ensure 99.9% uptime and reliability',
                  'Strategic systems architecture that reduces technical debt'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-slate-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="card bg-gradient-to-br from-slate-50 to-stone-50 dark:from-slate-900/20 dark:to-stone-900/20 border-2 border-slate-100 dark:border-slate-800 animate-fade-in-up delay-200">
              <div className="text-center">
                <Shield className="w-16 h-16 text-slate-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">Systems Reliability</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Our systems integration and managed operations typically deliver 99.9%+ uptime while reducing operational costs by 40-60% through automation and optimization.
                </p>
                <p className="text-sm text-slate-700 dark:text-slate-300 font-semibold">
                  Systems built for scale and reliability.
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
              Reliable systems and professional technology operations that drive operational excellence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center group hover:scale-105 transition-all duration-300 hover:shadow-2xl border border-gray-100 dark:border-gray-700 animate-fade-in-up">
              <div className="w-16 h-16 bg-gradient-to-br from-slate-600 to-stone-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Scalable Architecture</h4>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Platform and system architecture designed to scale with operational demand, 
                supporting growth from hundreds to millions of transactions.
              </p>
            </div>
            
            <div className="card text-center group hover:scale-105 transition-all duration-300 hover:shadow-2xl border border-gray-100 dark:border-gray-700 animate-fade-in-up delay-200">
              <div className="w-16 h-16 bg-gradient-to-br from-slate-600 to-stone-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Operational Excellence</h4>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Managed operations that ensure 99.9%+ uptime, proactive monitoring, 
                rapid incident response, and continuous optimization.
              </p>
            </div>
            
            <div className="card text-center group hover:scale-105 transition-all duration-300 hover:shadow-2xl border border-gray-100 dark:border-gray-700 animate-fade-in-up delay-300">
              <div className="w-16 h-16 bg-gradient-to-br from-slate-600 to-stone-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Security & Compliance</h4>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Institutional-grade security, compliance frameworks, financial standards adherence, 
                and governance that protect critical systems and data.
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
              Digital infrastructure transformations that demonstrate the power of systems integration and technology strategy
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
                    <span className="font-semibold text-slate-600 dark:text-slate-400">Solution: </span>
                    <span className="text-gray-600 dark:text-gray-300">{useCase.solution}</span>
                  </div>
                  <div className="bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 rounded-lg p-3">
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
      <section className="py-20 px-4 bg-gradient-to-r from-slate-50 to-stone-50 dark:from-slate-900/20 dark:to-stone-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="card border-2 border-slate-100 dark:border-slate-800">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business Systems?</h3>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Let's design, build, and optimize the digital infrastructure that powers your business at scale.
            </p>
            <button 
              onClick={() => navigate('/contact')}
              className="btn-primary inline-flex items-center text-lg px-8 py-4 group"
            >
              Start Your Infrastructure Transformation
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={24} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExperienceStudio;