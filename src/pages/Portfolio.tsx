import React from 'react';
import { ArrowRight, CheckCircle, Award, Users, Target, Zap, TrendingUp, Cloud, Bot, Palette, Monitor, BarChart } from 'lucide-react';
import { useRouter } from '../utils/router';

const Portfolio = () => {
  const { navigate } = useRouter();

  const portfolioHighlights = [
    {
      title: 'Cloud Architecture & Migration',
      category: 'Cloud Infrastructure',
      description: 'Migrated legacy infrastructure to modern cloud architecture, improving scalability and reducing operational overhead.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
      icon: Cloud,
      outcomes: ['60% Cost Reduction', '99.9% Uptime', '3x Performance']
    },
    {
      title: 'AI Process Automation',
      category: 'Intelligent Systems',
      description: 'Implemented intelligent workflow automation that streamlined operations and eliminated manual tasks across departments.',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80',
      icon: Bot,
      outcomes: ['70% Time Savings', '95% Accuracy', '24/7 Operations']
    },
    {
      title: 'Data Analytics Dashboard',
      category: 'Strategy & Analytics',
      description: 'Built comprehensive analytics platform providing real-time insights into business performance and operational metrics.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      icon: BarChart,
      outcomes: ['Real-time Insights', '90% Faster Reporting', 'Executive Dashboards']
    },
    {
      title: 'Client Portal Development',
      category: 'Experience Engineering',
      description: 'Developed intuitive client portal with modern interface design, improving user engagement and operational efficiency.',
      image: 'https://images.unsplash.com/photo-1559028006-448665bd7c7f?auto=format&fit=crop&w=800&q=80',
      icon: Monitor,
      outcomes: ['85% User Adoption', '4.8/5 Rating', '50% Faster Tasks']
    },
    {
      title: 'DevOps Pipeline Implementation',
      category: 'Cloud Infrastructure',
      description: 'Established automated CI/CD pipelines and infrastructure as code, accelerating deployment cycles and improving reliability.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
      icon: Zap,
      outcomes: ['80% Faster Deployments', '95% Fewer Errors', 'Automated Testing']
    },
    {
      title: 'Web Design & Development',
      category: 'Experience Engineering',
      description: 'Created high-performance website with modern design and optimized user experience, driving engagement and conversions.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      icon: Palette,
      outcomes: ['150% Conversion Increase', '2s Load Time', 'Mobile Optimized']
    },
    {
      title: 'Internal Tools Development',
      category: 'Experience Engineering',
      description: 'Built custom internal tools using no-code platforms to streamline business processes and improve team productivity.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
      icon: Target,
      outcomes: ['40% Productivity Gain', 'Streamlined Workflows', 'User-Friendly Interface']
    },
    {
      title: 'Enterprise Cloud Migration',
      category: 'Cloud Infrastructure',
      description: 'Migrated legacy enterprise systems to modern cloud architecture, improving scalability and reducing operational overhead.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
      icon: Cloud,
      outcomes: ['50% Cost Reduction', '99.9% Uptime', '3x Scalability']
    },
    {
      title: 'AI Process Automation Platform',
      category: 'Intelligent Systems',
      description: 'Implemented comprehensive AI-powered automation platform that streamlined operations across multiple departments.',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80',
      icon: Bot,
      outcomes: ['60% Time Savings', '24/7 Operations', '95% Accuracy']
    },
    {
      title: 'Executive Analytics Dashboard',
      category: 'Strategy & Analytics',
      description: 'Developed comprehensive executive dashboard providing real-time business intelligence and performance metrics.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      icon: BarChart,
      outcomes: ['Real-time Insights', '80% Faster Reporting', 'Executive Visibility']
    },
    {
      title: 'Cloud Cost Optimization',
      category: 'Cloud Infrastructure',
      description: 'Analyzed and optimized cloud spending through intelligent resource management and automated cost controls.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80',
      icon: TrendingUp,
      outcomes: ['40% Cost Savings', 'Automated Monitoring', 'Performance Maintained']
    },
    {
      title: 'AI Customer Support Implementation',
      category: 'Intelligent Systems',
      description: 'Deployed intelligent customer support system providing 24/7 assistance while maintaining high service quality.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
      icon: Users,
      outcomes: ['24/7 Availability', '70% Query Resolution', 'Improved Satisfaction']
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
            and digital product transformation.
          </p>
          <p className="text-xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            Each project showcases our ability to deliver enterprise-grade solutions that drive measurable business outcomes.
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