import React from 'react';
import { Bot, Brain, Cpu, Zap, TrendingUp, ArrowRight, CheckCircle, Award } from 'lucide-react';
import { useRouter } from '../../utils/router';

const IntelligentSystems = () => {
  const { navigate } = useRouter();

  const coreServices = [
    {
      icon: Brain,
      title: 'Generative AI Strategy & AI Pilots',
      description: 'We develop AI strategies and implement pilot programs that demonstrate measurable business value. Our approach ensures proper governance and security frameworks from the start.',
      features: [
        'AI strategy development',
        'Pilot program implementation',
        'Governance & security frameworks'
      ]
    },
    {
      icon: Cpu,
      title: 'Data Infrastructure & Modernization ',
      description: 'We modernize data architectures and establish governance frameworks that enable reliable, secure data operations. Our solutions support scalable decision-making and analytics.',
      features: [
        'Data Architecture & Platform Design',
        'Data Pipeline Engineering',
        'Data Governance, Quality & Compliance'
      ]
    },
    {
      icon: Bot,
      title: 'Decision Intelligence & Advanced Analytics',
      description: 'We build advanced analytics platforms and decision intelligence systems that transform raw data into actionable insights. Our solutions enable strategic business decisions with confidence.',
      features: [
        'BI Dashboards & Reporting',
        'Predictive & Prescriptive Analytics',
        'Decision intelligence systems'
      ]
    },
    {
      icon: Zap,
      title: 'Intelligent Process & Workflow Automation (IPA)',
      description: 'We design and implement intelligent process automation that eliminates manual tasks and optimizes workflows. Our solutions typically improve operational efficiency by 40-70%.',
      features: [
        'Process automation design',
        'Workflow optimization',
        'AI-powered automation'
      ]
    }
  ];

  const useCases = [
    {
      title: 'Workflow Automation for Financial Operations',
      challenge: 'Manual data processing across compliance workflows taking 200+ hours monthly',
      solution: 'AI-powered process automation with governance and audit trails',
      outcome: '55% time savings, 98% accuracy, compliance maintained'
    },
    {
      title: 'Business Analytics Platform',
      challenge: 'Fragmented data preventing strategic decision-making and reporting delays',
      solution: 'Unified analytics platform with real-time dashboards and self-service insights',
      outcome: 'Real-time insights, 75% faster analysis, better business decisions'
    },
    {
      title: 'Intelligent Customer Support',
      challenge: 'High support volume with manual response causing customer frustration',
      solution: 'AI-powered support system with natural language understanding and escalation',
      outcome: '24/7 availability, 65% self-resolution, improved satisfaction'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-50 via-indigo-50/30 to-blue-50/30 dark:from-purple-900/20 dark:via-indigo-900/10 dark:to-blue-900/20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-indigo-400/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg">
            <Bot className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-8 animate-fade-in-up">
            AI, Data & Intelligent Operations
            <span className="gradient-text block mt-2">Strategic AI implementation and data modernization</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-200">
            Strategic AI and data modernization services that transform business operations through intelligent automation and advanced analytics. We embed intelligence into workflows to drive measurable business outcomes.
          </p>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title animate-fade-in-up">Core Services</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-fade-in-up delay-200">
              AI and data services that enable intelligent operations and strategic decision-making
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {coreServices.map((service, index) => (
              <div key={index} className="card group hover:scale-105 transition-all duration-300 hover:shadow-2xl border border-gray-100 dark:border-gray-700 animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">{service.description}</p>
                <ul className="space-y-2 mt-4">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                      <span className="text-purple-500 mr-3 text-base">✓</span>
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
              <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Why AI & Data Intelligence Matter</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                AI and data modernization represent the next frontier of operational efficiency. Organizations that deploy 
                strategic AI systems and modern data platforms achieve measurable productivity gains while reducing operational costs and improving decision-making speed.
              </p>
              <div className="space-y-4">
                {[
                  'Strategic AI implementation with governance and security',
                  'Modern data platforms that enable real-time insights',
                  'Intelligent automation that scales with business growth',
                  'Advanced analytics that drive strategic decision-making'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-purple-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="card bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 border-2 border-purple-100 dark:border-purple-800 animate-fade-in-up delay-200">
              <div className="text-center">
                <Award className="w-16 h-16 text-purple-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">AI-Driven Operations</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Our AI and data solutions typically deliver 40-70% efficiency improvements while enabling strategic insights that drive business growth.
                </p>
                <p className="text-sm text-purple-600 dark:text-purple-400 font-semibold">
                  Intelligence that scales with your business.
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
              Measurable intelligence that transforms operations and accelerates growth
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center group hover:scale-105 transition-all duration-300 hover:shadow-2xl border border-gray-100 dark:border-gray-700 animate-fade-in-up">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Operational Efficiency</h4>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                40-70% reduction in manual tasks through intelligent automation that learns, 
                adapts, and optimizes processes continuously.
              </p>
            </div>
            
            <div className="card text-center group hover:scale-105 transition-all duration-300 hover:shadow-2xl border border-gray-100 dark:border-gray-700 animate-fade-in-up delay-200">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Strategic Insights</h4>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Real-time analytics and predictive intelligence that enable data-driven decisions 
                and strategic planning with high precision and reliability.
              </p>
            </div>
            
            <div className="card text-center group hover:scale-105 transition-all duration-300 hover:shadow-2xl border border-gray-100 dark:border-gray-700 animate-fade-in-up delay-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Scalable Intelligence</h4>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                AI systems that grow with your business, handling increased complexity 
                while maintaining performance and accuracy at scale.
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
              Real-world AI implementations that demonstrate measurable business impact
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
                    <span className="font-semibold text-purple-600 dark:text-purple-400">Solution: </span>
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
      <section className="py-20 px-4 bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="card border-2 border-purple-100 dark:border-purple-800">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Intelligent Operations?</h3>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Let's embed AI and data intelligence into your operations to create scalable, intelligent business processes.
            </p>
            <button 
              onClick={() => navigate('/contact')}
              className="btn-primary inline-flex items-center text-lg px-8 py-4 group"
            >
              Start Your AI Transformation
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={24} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IntelligentSystems;