import React from 'react';
import { ArrowRight, CheckCircle, Award, Users, Target, Zap, TrendingUp, Cloud, Bot, Palette, Monitor, BarChart } from 'lucide-react';
import { useRouter } from '../utils/router';

const Portfolio = () => {
  const { navigate } = useRouter();

  const portfolioHighlights = [
    {
      title: 'Cloud Architecture Modernization',
      category: 'Cloud Infrastructure',
      description: 'Multi-phase cloud infrastructure migration for a SaaS platform, transitioning from on-premise data centers to scalable cloud infrastructure. Included architecture design, security implementation, and cost optimization.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
      icon: Cloud,
      outcomes: ['45% Cost Reduction', '99.9% Uptime', '2x Performance']
    },
    {
      title: 'Intelligent Workflow Automation',
      category: 'Intelligent Systems',
      description: 'AI-powered process automation implementation for financial services, eliminating manual data processing across operations and compliance workflows. Reduced processing time while maintaining audit compliance.',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80',
      icon: Bot,
      outcomes: ['55% Time Savings', '98% Accuracy', 'Compliance Maintained']
    },
    {
      title: 'Analytics & Business Intelligence Platform',
      category: 'Intelligent Systems',
      description: 'Built unified analytics platform integrating data from multiple sources, providing real-time dashboards for operational and strategic decision-making across the organization.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      icon: BarChart,
      outcomes: ['Real-time Insights', '75% Faster Analysis', 'Data-Driven Decisions']
    },
    {
      title: 'Client Portal & Product Platform',
      category: 'Digital Infrastructure',
      description: 'Designed and developed customer-facing portal with intuitive interface and self-service capabilities. Modern architecture supports scaling for millions of users across multiple markets.',
      image: 'https://images.unsplash.com/photo-1559028006-448665bd7c7f?auto=format&fit=crop&w=800&q=80',
      icon: Monitor,
      outcomes: ['80% User Adoption', '4.7/5 Rating', '40% Task Efficiency']
    },
    {
      title: 'CI/CD Platform & DevOps Excellence',
      category: 'Cloud Infrastructure',
      description: 'Automated deployment infrastructure with containerization, orchestration, and infrastructure-as-code. Enabled development teams to deploy safely to production multiple times daily.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
      icon: Zap,
      outcomes: ['70% Faster Deployments', '90% Error Reduction', 'Continuous Delivery']
    },
    {
      title: 'Cloud Cost Optimization Program',
      category: 'Cloud Infrastructure',
      description: 'Comprehensive cost analysis and optimization strategy for multi-cloud environment. Implemented automated resource management, reserved capacity planning, and usage monitoring.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80',
      icon: TrendingUp,
      outcomes: ['38% Annual Savings', 'Automated Controls', 'Performance Optimized']
    },
    {
      title: 'Intelligent Customer Support System',
      category: 'Intelligent Systems',
      description: 'AI-powered support platform providing 24/7 customer assistance with natural language processing. Escalates complex issues to human agents with full context and recommended solutions.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
      icon: Users,
      outcomes: ['24/7 Coverage', '65% Self-Resolution', 'Higher Satisfaction']
    },
    {
      title: 'Digital Product Strategy & Development',
      category: 'Digital Infrastructure',
      description: 'End-to-end digital product development including market research, product strategy, UX/UI design, and technical implementation. Launched successfully to target market with strong adoption.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      icon: Palette,
      outcomes: ['On-Schedule Launch', 'Strong User Adoption', 'Positive Market Response']
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 via-blue-50/30 to-cyan-50/30 dark:from-gray-900 dark:via-blue-900/20 dark:to-cyan-900/20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="gradient-text">Portfolio</span>
          </h1>
          <p className="text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-6">
            Representative engagements demonstrating our expertise across cloud infrastructure, AI and data intelligence, 
            and systems integration.
          </p>
          <p className="text-xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            Each project demonstrates our ability to deliver high-quality, scalable solutions that drive measurable business outcomes across organizations of all sizes.
          </p>
        </div>
      </section>

      {/* Portfolio Highlights */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {portfolioHighlights.map((project, index) => (
              <div key={index} className="card group hover:scale-105 transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700">
                <div className="relative h-48 mb-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover rounded-t-lg group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="inline-flex items-center px-3 py-1 bg-white/95 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold shadow-lg">
                      <project.icon className="w-3 h-3 mr-2" />
                      {project.category}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm leading-relaxed">{project.description}</p>
                  <div className="grid grid-cols-3 gap-2">
                    {project.outcomes.map((outcome, oIndex) => (
                      <div key={oIndex} className="text-center">
                        <div className="text-xs font-bold text-blue-600 dark:text-blue-400">{outcome}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Case Studies */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">Additional Case Studies</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="card border border-gray-100 dark:border-gray-700">
                <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Financial Services Cloud Migration</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                  Migrated critical financial systems to AWS with enhanced security and compliance frameworks.
                </p>
                <div className="space-y-2 text-sm">
                  <div><span className="font-semibold">Challenge:</span> Legacy infrastructure limiting scalability and compliance</div>
                  <div><span className="font-semibold">Solution:</span> Multi-phase cloud migration with zero-downtime deployment</div>
                  <div><span className="font-semibold text-green-600">Outcome:</span> 60% cost reduction, enhanced security posture</div>
                </div>
              </div>
              
              <div className="card border border-gray-100 dark:border-gray-700">
                <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Healthcare AI Implementation</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                  Implemented AI-powered patient data analysis system with predictive capabilities.
                </p>
                <div className="space-y-2 text-sm">
                  <div><span className="font-semibold">Challenge:</span> Manual patient data processing causing delays</div>
                  <div><span className="font-semibold">Solution:</span> AI automation with secure data processing pipeline</div>
                  <div><span className="font-semibold text-green-600">Outcome:</span> 70% faster processing, improved patient outcomes</div>
                </div>
              </div>
              
              <div className="card border border-gray-100 dark:border-gray-700">
                <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">E-commerce Platform Development</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                  Built scalable e-commerce platform with modern architecture and optimized user experience.
                </p>
                <div className="space-y-2 text-sm">
                  <div><span className="font-semibold">Challenge:</span> Outdated platform limiting growth and user experience</div>
                  <div><span className="font-semibold">Solution:</span> Modern React-based platform with microservices architecture</div>
                  <div><span className="font-semibold text-green-600">Outcome:</span> 100% increase in conversions, 50% faster load times</div>
                </div>
              </div>
              
              <div className="card border border-gray-100 dark:border-gray-700">
                <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Manufacturing Process Automation</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                  Automated manufacturing workflows with IoT integration and real-time monitoring.
                </p>
                <div className="space-y-2 text-sm">
                  <div><span className="font-semibold">Challenge:</span> Manual processes causing inefficiencies and errors</div>
                  <div><span className="font-semibold">Solution:</span> IoT-enabled automation with predictive maintenance</div>
                  <div><span className="font-semibold text-green-600">Outcome:</span> 40% efficiency improvement, 90% error reduction</div>
                </div>
              </div>
            </div>
          </div>

          {/* Portfolio Summary */}
          <div className="card bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-2 border-blue-100 dark:border-blue-800">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Portfolio Summary</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">50+</div>
                  <div className="text-gray-600 dark:text-gray-300">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">10+</div>
                  <div className="text-gray-600 dark:text-gray-300">Industries Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">99%</div>
                  <div className="text-gray-600 dark:text-gray-300">Client Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <div className="card bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-2 border-blue-100 dark:border-blue-800">
            <h3 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h3>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Let's discuss how we can deliver solutions tailored to your specific business challenges 
              and help you achieve measurable results.
            </p>
            <button 
              onClick={() => navigate('/contact')}
              className="btn-primary inline-flex items-center text-lg px-8 py-4 group"
            >
              Schedule a Consultation
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={24} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;