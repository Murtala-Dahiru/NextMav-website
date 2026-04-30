import React from 'react';
import { Cloud, Server, Shield, Zap, TrendingUp, ArrowRight, CheckCircle, Award } from 'lucide-react';
import { useRouter } from '../../utils/router';

const CloudInfrastructure = () => {
  const { navigate } = useRouter();

  const coreServices = [
    {
      icon: Cloud,
      title: 'Cloud Strategy, Architecture & Foundation Setup',
      description: 'We design and implement cloud strategies that establish secure, scalable foundations for digital transformation. Our approach ensures optimal architecture design and seamless execution.',
      features: [
        'Strategy & assessment',
        'Architecture & design', 
        'Implementation & execution'
      ]
    },
    {
      icon: Zap,
      title: 'Platform Engineering & Delivery Automation (DevOps)',
      description: 'We build automated delivery platforms and DevOps capabilities that accelerate software deployment. Our solutions maintain high reliability and security while reducing deployment complexity.',
      features: [
        'CI/CD pipeline design',
        'Infrastructure automation',
        'Deployment optimization'
      ]
    },
    {
      icon: Server,
      title: 'Cloud Reliability, SRE & Managed Operations',
      description: 'We provide comprehensive site reliability engineering and managed cloud operations that ensure 99.9% uptime. Our proactive approach includes continuous monitoring and rapid incident response.',
      features: [
        'SRE implementation',
        'Monitoring & alerting',
        'Incident response'
      ]
    },
    {
      icon: Shield,
      title: 'Cloud Security, Risk & Compliance',
      description: 'We implement cloud security frameworks and compliance programs that protect critical assets. Our approach ensures regulatory compliance while maintaining operational efficiency.',
      features: [
        'Security architecture',
        'Compliance frameworks',
        'Risk assessment'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Cloud Financial Management & Optimization (FinOps)',
      description: 'We optimize cloud spending through intelligent resource management and financial governance. Our approach typically delivers 30-60% cost reductions while maintaining performance.',
      features: [
        'Cost analysis & optimization',
        'Resource management',
        'Financial governance'
      ]
    }
  ];

  const useCases = [
    {
      title: 'Cloud Migration for SaaS Platform',
      challenge: 'Legacy infrastructure limiting scalability and costing 45% more than cloud',
      solution: 'Multi-phase cloud migration to AWS with architecture redesign for scalability',
      outcome: '45% annual cost savings, 99.9% uptime, 2x performance improvement'
    },
    {
      title: 'DevOps Platform Implementation',
      challenge: 'Manual deployment processes causing 2-week release cycles and errors',
      solution: 'End-to-end CI/CD pipeline with infrastructure automation and containerization',
      outcome: '70% faster deployments, 90% reduction in errors, daily releases enabled'
    },
    {
      title: 'Cloud FinOps Program',
      challenge: 'Uncontrolled cloud costs growing 30% annually without visibility',
      solution: 'FinOps implementation with automated monitoring and reserved capacity planning',
      outcome: '38% annual savings, real-time cost controls, right-sized resources'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 via-cyan-50/30 to-gray-50/30 dark:from-blue-900/20 dark:via-cyan-900/10 dark:to-gray-900/20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg">
            <Cloud className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-8 animate-fade-in-up">
            Cloud & Infrastructure Excellence
            <span className="gradient-text block mt-2">The foundation of digital transformation</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-200">
            Comprehensive cloud transformation services that establish secure, scalable, and cost-optimized infrastructure for organizations at any stage. We deliver the digital backbone that powers innovation, agility, and growth.
          </p>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title animate-fade-in-up">Core Services</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-fade-in-up delay-200">
              Cloud services that enable scalability, security, and operational excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {coreServices.map((service, index) => (
              <div key={index} className="card group hover:scale-105 transition-all duration-300 hover:shadow-2xl border border-gray-100 dark:border-gray-700 animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                      <span className="text-blue-500 mr-3 text-base">✓</span>
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
              <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Why Cloud Excellence Matters</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Cloud infrastructure is the foundation of digital transformation. Legacy systems create operational 
                bottlenecks, security vulnerabilities, and cost inefficiencies that limit scalability.
              </p>
              <div className="space-y-4">
                {[
                  'Scalability for global operations',
                  'Advanced security and compliance frameworks',
                  'Measurable cost optimization (30-60% savings)',
                  '99.9% uptime with automated operations'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="card bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-2 border-blue-100 dark:border-blue-800 animate-fade-in-up delay-200">
              <div className="text-center">
                <Award className="w-16 h-16 text-blue-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">Cloud Excellence</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Our cloud solutions are built to the highest standards, ensuring reliability, security, and performance at scale.
                </p>
                <p className="text-sm text-blue-600 dark:text-blue-400 font-semibold">
                  Infrastructure that drives business outcomes.
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
              Measurable outcomes that transform your technology foundation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center group hover:scale-105 transition-all duration-300 hover:shadow-2xl border border-gray-100 dark:border-gray-700 animate-fade-in-up">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Accelerated Performance</h4>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                50-80% improvement in system performance through optimized cloud architecture, 
                automated scaling, and intelligent resource allocation.
              </p>
            </div>
            
            <div className="card text-center group hover:scale-105 transition-all duration-300 hover:shadow-2xl border border-gray-100 dark:border-gray-700 animate-fade-in-up delay-200">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Security & Compliance</h4>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Bank-level security with automated compliance monitoring, threat detection, 
                and disaster recovery that meets industry standards.
              </p>
            </div>
            
            <div className="card text-center group hover:scale-105 transition-all duration-300 hover:shadow-2xl border border-gray-100 dark:border-gray-700 animate-fade-in-up delay-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Cost Optimization</h4>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                30-60% reduction in infrastructure costs through intelligent resource management, 
                automated scaling, and optimized cloud spending.
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
              Real-world transformations that demonstrate our cloud expertise
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
                    <span className="font-semibold text-blue-600 dark:text-blue-400">Solution: </span>
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
      <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="card border-2 border-blue-100 dark:border-blue-800">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Your Digital Foundation?</h3>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Let's design cloud infrastructure that powers your transformation and scales with your ambition.
            </p>
            <button 
              onClick={() => navigate('/contact')}
              className="btn-primary inline-flex items-center text-lg px-8 py-4 group"
            >
              Start Your Cloud Transformation
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={24} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CloudInfrastructure;