import React, { useState } from 'react';
import { ArrowRight, Award, Users, Zap, Cloud, Bot, Monitor, BarChart } from 'lucide-react';
import { useRouter } from '../utils/router';

const Portfolio = () => {
  const { navigate } = useRouter();
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = [
    { id: 'All', label: 'All Projects' },
    { id: 'Cloud Infrastructure', label: 'Cloud Infrastructure' },
    { id: 'AI & Automation', label: 'AI & Automation' },
    { id: 'Digital Platforms', label: 'Digital Platforms' }
  ];

  const portfolioHighlights = [
    {
      title: 'Cloud Architecture Modernization',
      category: 'Cloud Infrastructure',
      description: 'Led a multi-phase cloud migration for a SaaS platform, transitioning from legacy servers to a modern, containerized AWS infrastructure with multi-zone redundancy.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
      icon: Cloud,
      outcomes: ['40% Cost Reduction', '99.99% Guaranteed Uptime', '3.5x Faster Deployments'],
      techStack: ['AWS', 'Terraform', 'Kubernetes', 'Docker', 'GitHub Actions']
    },
    {
      title: 'Enterprise Workflow Automation',
      category: 'AI & Automation',
      description: 'Developed an intelligent document-processing pipeline for a logistics provider, automating extraction of cargo manifests and invoices to accelerate billing cycles.',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
      icon: Bot,
      outcomes: ['70% Processing Cut', '99.2% Accuracy Rate', '80+ Hours Saved'],
      techStack: ['Python', 'FastAPI', 'OpenCV', 'AWS Lambda', 'PostgreSQL']
    },
    {
      title: 'Operational Telemetry Dashboard',
      category: 'Digital Platforms',
      description: 'Designed and built a unified telemetry and operations dashboard for a regional distribution network, enabling real-time asset tracking and performance alerts.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      icon: BarChart,
      outcomes: ['100% Telemetry Coverage', '25% Fewer Incidents', '4x Faster Analytics'],
      techStack: ['React', 'TypeScript', 'Node.js', 'TailwindCSS', 'Chart.js']
    },
    {
      title: 'SaaS Client Portal',
      category: 'Digital Platforms',
      description: 'Developed a secure client onboarding and service portal for a financial advisory firm, replacing email-based workflows with structured self-service portals.',
      image: 'https://images.unsplash.com/photo-1559028006-448665bd7c7f?auto=format&fit=crop&w=800&q=80',
      icon: Monitor,
      outcomes: ['85% Client Self-Onboarding', '90% Ticket Reduction', 'SOC-2 Compliance Met'],
      techStack: ['React', 'Next.js', 'Supabase', 'TailwindCSS', 'Vercel']
    },
    {
      title: 'DevOps & CI/CD Pipelines',
      category: 'Cloud Infrastructure',
      description: 'Standardized the software release lifecycle for a growing e-commerce brand by implementing infrastructure-as-code and automated staging/production testing cycles.',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
      icon: Zap,
      outcomes: ['0 Manual Deployments', '95% Error Reduction', '5-Min Deploy Time'],
      techStack: ['Terraform', 'GitHub Actions', 'Docker', 'AWS ECS', 'Slack API']
    },
    {
      title: 'Intelligent Support Integration',
      category: 'AI & Automation',
      description: 'Integrated a specialized NLP chatbot into an online store\'s support center, answering frequent customer queries instantly and triaging complex tickets with context.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
      icon: Users,
      outcomes: ['24/7 Support Active', '55% Ticket Deflection', '4.8/5 CSAT Rating'],
      techStack: ['Python', 'LangChain', 'OpenAI API', 'Node.js', 'Redis']
    }
  ];

  const additionalCaseStudies = [
    {
      title: 'E-commerce Performance Optimization',
      type: 'Systems Optimization',
      challenge: 'Slow page load times during seasonal traffic spikes causing high cart abandonment rates.',
      solution: 'Deployed a dynamic CDN configuration, optimized database queries, and implemented Redis caching layers.',
      outcome: '45% faster loading times and a 15% lift in checkout completions.'
    },
    {
      title: 'Automated Dispatch & Scheduling',
      type: 'Workflow Automation',
      challenge: 'Manual field-agent booking for a repair service leading to dispatch errors and routing conflicts.',
      solution: 'Created an automated scheduling microservice integrating Google Maps and calendar APIs.',
      outcome: 'Eliminated dispatch errors and reduced field travel times by 20%.'
    },
    {
      title: 'AWS Security Hardening & Audit',
      type: 'Security & Compliance',
      challenge: 'Security vulnerabilities in a scaling fintech startup\'s configuration identified before a critical audit.',
      solution: 'Applied IAM least-privilege policies, security groups, and enabled automated AWS GuardDuty alerting.',
      outcome: 'Achieved audit readiness and fully secured production pipelines in 3 weeks.'
    },
    {
      title: 'CRM Data Synchronization',
      type: 'Data Integration',
      challenge: 'Siloed user data across marketing, sales, and support channels prevented single customer views.',
      solution: 'Designed synchronization pipelines using secure webhooks to unify CRM data into a single datastore.',
      outcome: 'Consolidated customer records and unlocked accurate lifetime value reporting.'
    }
  ];

  const filteredProjects = activeFilter === 'All'
    ? portfolioHighlights
    : portfolioHighlights.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen pt-20 relative overflow-hidden bg-gray-50/50 dark:bg-gray-950">
      {/* Decorative background mesh */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl dark:bg-blue-600/5 pointer-events-none"></div>
      <div className="absolute top-40 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl dark:bg-cyan-600/5 pointer-events-none"></div>

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800/50 rounded-full uppercase mb-5">
            <Award className="w-3.5 h-3.5" />
            Proven Delivery & Integration
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight text-gray-900 dark:text-white leading-tight">
            Our <span className="gradient-text">Portfolio</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A curated showcase of real-world engagements demonstrating how we design, build, and deploy production-grade software and cloud environments for scaling businesses.
          </p>
        </div>
      </section>

      {/* Case Studies & Showcases */}
      <section className="py-8 pb-24 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Interactive Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 border ${
                  activeFilter === category.id
                    ? 'bg-blue-600 border-blue-600 text-white shadow-md shadow-blue-500/20'
                    : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Primary Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {filteredProjects.map((project, index) => (
              <div key={index} className="flex flex-col bg-white dark:bg-gray-800/60 border border-gray-100 dark:border-gray-700/50 rounded-2xl overflow-hidden hover-lift group transition-all duration-300">
                {/* Image Wrapper */}
                <div className="relative h-52 overflow-hidden bg-gray-100 dark:bg-gray-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-955/80 via-gray-955/20 to-transparent"></div>
                  {/* Category Badge overlay */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/95 dark:bg-gray-900/90 backdrop-blur-sm text-gray-800 dark:text-gray-200 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm border border-white/20">
                      <project.icon className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                      {project.category}
                    </span>
                  </div>
                </div>
                
                {/* Card Content */}
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold mb-2.5 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>
                  
                  <div>
                    {/* Key Metrics / Outcomes */}
                    <div className="border-t border-gray-100 dark:border-gray-700/50 pt-5 pb-5">
                      <div className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-3">Key Business Impact</div>
                      <div className="grid grid-cols-3 gap-2">
                        {project.outcomes.map((outcome, oIndex) => {
                          const parts = outcome.split(' ');
                          const number = parts[0];
                          const label = parts.slice(1).join(' ');
                          return (
                            <div key={oIndex} className="text-center bg-gray-50 dark:bg-gray-900/50 rounded-lg p-2 border border-gray-100/50 dark:border-gray-700/30">
                              <div className="text-xs font-extrabold text-blue-600 dark:text-blue-400 tracking-tight">{number}</div>
                              <div className="text-[9px] text-gray-500 dark:text-gray-400 font-medium leading-tight mt-0.5">{label}</div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    
                    {/* Tech Stack */}
                    <div className="border-t border-gray-100 dark:border-gray-700/50 pt-4 flex flex-wrap gap-1.5">
                      {project.techStack.map((tech, tIndex) => (
                        <span key={tIndex} className="px-2.5 py-0.5 bg-slate-50 dark:bg-slate-800 text-[10px] font-semibold text-slate-600 dark:text-slate-300 rounded-md border border-slate-100 dark:border-slate-700">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Case Studies */}
          <div className="mb-20">
            <h3 className="text-3xl font-extrabold mb-10 text-center text-gray-900 dark:text-white">Additional Engagements</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {additionalCaseStudies.map((study, index) => (
                <div key={index} className="p-6 bg-white dark:bg-gray-800/40 border border-gray-100 dark:border-gray-700/50 rounded-xl relative group hover:border-blue-500/20 dark:hover:border-blue-500/20 transition-all duration-300">
                  <h4 className="text-lg font-bold mb-4 text-gray-900 dark:text-white flex items-center justify-between">
                    {study.title}
                    <span className="text-[9px] font-semibold tracking-wider text-gray-400 dark:text-gray-500 uppercase px-2 py-0.5 bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded">
                      {study.type}
                    </span>
                  </h4>
                  <div className="space-y-3.5 text-sm">
                    <div>
                      <span className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest block mb-1">Challenge</span>
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{study.challenge}</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest block mb-1">Solution</span>
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{study.solution}</p>
                    </div>
                    <div className="pt-3 border-t border-gray-50 dark:border-gray-700/30 flex items-center justify-between">
                      <span className="text-xs font-bold text-gray-500 dark:text-gray-400">Impact Outcome</span>
                      <span className="text-xs font-bold text-green-600 dark:text-green-400 px-2.5 py-1 bg-green-50 dark:bg-green-950/20 rounded-full border border-green-100 dark:border-green-900/20">
                        {study.outcome}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Operating Footprint / Stats */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-gray-900 to-slate-900 dark:from-black dark:to-gray-950 text-white p-8 md:p-12 border border-gray-800 shadow-xl">
            {/* Ambient glows */}
            <div className="absolute -right-20 -top-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h3 className="text-2xl font-bold tracking-tight text-white mb-2">Our Operating Footprint</h3>
                <p className="text-gray-400 text-sm max-w-xl mx-auto leading-relaxed">
                  Delivering reliable, production-ready digital solutions with a focused team of senior architects and engineers.
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-1">50+</div>
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Projects Completed</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-1">100%</div>
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">On-Time Delivery</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-1">98%</div>
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Client Retention</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-1">20+</div>
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Active Integrations</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gray-50/50 dark:bg-gray-900/30 relative z-10 border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/5 to-cyan-50/5 dark:from-gray-900 dark:via-blue-900/10 dark:to-cyan-900/10 border border-gray-100 dark:border-gray-800 rounded-3xl p-8 md:p-12 shadow-sm">
            <h3 className="text-3xl font-extrabold mb-4 text-gray-900 dark:text-white">Ready to streamline your systems?</h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8 text-sm md:text-base leading-relaxed">
              Schedule a technical consultation with our engineering leads. We'll audit your current workflow 
              and identify high-impact automation or modernization opportunities.
            </p>
            <button 
              onClick={() => navigate('/contact')}
              className="btn-primary inline-flex items-center text-sm px-6 py-3.5 group relative overflow-hidden"
            >
              <span>Schedule a Consultation</span>
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={16} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;