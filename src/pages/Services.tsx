import React from 'react';
import { Cloud, Bot, Code, ArrowRight } from 'lucide-react';
import { useRouter } from '../utils/router';

const Services = () => {
  const { navigate } = useRouter();

  const divisions = [
    {
      title: 'Cloud & Infrastructure Excellence',
      tagline: 'Scalable Infrastructure That Grows With You',
      description: 'Your infrastructure is your foundation. We build cloud architectures and operations that are secure, scalable, and cost-optimized   whether you\'re managing your first deployment or supporting global operations.',
      icon: Cloud,
      services: [
        {
          name: 'Cloud Strategy, Architecture & Foundation Setup',
          description: 'We design and implement cloud strategies and architectures that establish secure, scalable foundations for digital transformation at any scale.'
        },
        {
          name: 'Platform Engineering & Delivery Automation (DevOps)',
          description: 'We build automated delivery platforms and DevOps capabilities that accelerate software deployment while maintaining high reliability and security.'
        },
        {
          name: 'Cloud Reliability, SRE & Managed Operations',
          description: 'We provide comprehensive site reliability engineering and managed cloud operations that ensure 99.9% uptime with proactive monitoring and incident response.'
        },
        {
          name: 'Cloud Security, Risk & Compliance',
          description: 'We implement cloud security frameworks and compliance programs that protect critical assets while meeting regulatory requirements.'
        },
        {
          name: 'Cloud Financial Management & Optimization (FinOps)',
          description: 'We optimize cloud spending through intelligent resource management and financial governance, typically delivering 30-60% cost reductions while maintaining performance.'
        }
      ],
      focus: 'Foundation: Scalable cloud infrastructure that accelerates innovation, reduces costs, and enables your organization to grow without limits.',
      link: '/divisions/cloud-infrastructure-excellence',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'AI, Data & Intelligent Operations',
      tagline: 'Intelligent Automation That Drives Efficiency',
      description: 'Turn your data into competitive advantage. We implement AI and automation that streamline workflows, eliminate manual work, and enable smarter decision-making across your organization.',
      icon: Bot,
      services: [
        {
          name: 'Generative AI Strategy & AI Pilots',
          description: 'We develop AI strategies and implement pilot programs that demonstrate measurable business value while ensuring governance and security.'
        },
        {
          name: 'Data Strategy, Governance & Modernization',
          description: 'We modernize data architectures and establish governance frameworks that enable reliable, secure, and scalable data operations for strategic decision-making.'
        },
        {
          name: 'Decision Intelligence & Advanced Analytics',
          description: 'We build advanced analytics platforms and decision intelligence systems that transform raw data into actionable insights for strategic business decisions.'
        },
        {
          name: 'Intelligent Process & Workflow Automation (IPA)',
          description: 'We design and implement intelligent process automation that eliminates manual tasks and optimizes workflows, typically improving efficiency by 40-70%.'
        }
      ],
      focus: 'Outcome: Automate 40-70% of manual work, gain real-time insights into operations, and empower your team to make smarter, faster decisions.',
      link: '/divisions/ai-data-intelligent-operations',
      gradient: 'from-purple-500 to-indigo-500'
    },
    {
      title: 'Digital Infrastructure & Technology Solutions',
      tagline: 'Systems Integration & Enterprise Platform Engineering',
      description: 'We build, integrate, and manage the digital systems and technology infrastructure that power modern businesses. From custom platforms to financial systems integration and managed operations.',
      icon: Code,
      services: [
        {
          name: 'Platform Engineering',
          description: 'We design and build scalable digital systems, applications, and platforms that power modern businesses. Services: Custom Software Development, Web & Mobile Application Development, SaaS Platform Development, API Development & System Integration, System Architecture & Platform Engineering.'
        },
        {
          name: 'Financial Systems & Fintech Integration',
          description: 'We integrate financial technologies that enable businesses to process payments, manage transactions, and connect to financial infrastructure. Services: Payment Gateway Integration, Financial API Integration, Virtual Account & Bank Integration, Recurring Payment & Billing Integration.'
        },
        {
          name: 'Managed Technology Operations & CTO Services',
          description: 'We provide ongoing management, support, and strategic leadership for business technology systems. Services: Managed IT Services & Business Systems Support, Fractional CTO / Virtual CTO Services, Technology Strategy & Roadmapping, System Maintenance & Operational Support, IT Operations Management.'
        },
        {
          name: 'Accelerated Delivery & Digital Enablement',
          description: 'We help businesses accelerate digital product delivery using modern development approaches and internal enablement systems. Services: Rapid Application Development, Internal Tools & Developer Productivity Systems, Business Process Digitization & Workflow Enablement.'
        }
      ],
      focus: 'Enterprise-Grade Systems: Build reliable digital infrastructure, integrate mission-critical financial systems, and operate technology with operational excellence.',
      link: '/divisions/digital-infrastructure-technology-solutions',
      gradient: 'from-slate-500 to-stone-500'
    }
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
            Technology Built for
            <span className="gradient-text block mt-2">Growth at Scale</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-200">
            Whether you're scaling your first infrastructure, automating critical operations, or transforming how customers experience your products   NextMav's three divisions deliver the expertise, strategy, and execution your organization needs to compete and grow.
          </p>
        </div>
      </section>

      {/* Three Divisions */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto space-y-20">
          {divisions.map((division, index) => (
            <div key={index} className="group animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className={`w-20 h-20 bg-gradient-to-br ${division.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <division.icon className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">{division.title}</h2>
                  <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-4">{division.tagline}</p>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">{division.description}</p>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl p-6 mb-8">
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 font-semibold">Focus:</p>
                    <p className="font-medium text-gray-800 dark:text-gray-200 leading-relaxed">{division.focus}</p>
                  </div>

                  <button 
                    onClick={() => navigate(division.link)}
                    className="btn-primary inline-flex items-center group"
                  >
                    Explore This Division
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={20} />
                  </button>
                </div>
                
                <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Core Services:</h3>
                    {division.services.map((service, sIndex) => (
                      <div key={sIndex} className="card border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow duration-200">
                        <h4 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">{service.name}</h4>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{service.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Integrated Capabilities */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-50 to-blue-50/30 dark:from-gray-800 dark:to-blue-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="card bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-2 border-blue-100 dark:border-blue-800">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Enterprise Technology Excellence</h3>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Our three divisions form an integrated technology ecosystem. Cloud & Infrastructure provides the foundation. AI & Data unlocks operational intelligence. Digital Infrastructure & Systems Integration deliver enterprise-grade platforms and mission-critical systems. Together, they enable organizations to operate with technical excellence, financial precision, and operational efficiency.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button 
                onClick={() => navigate('/contact')}
                className="btn-primary inline-flex items-center text-lg px-8 py-4 group"
              >
                Schedule a Strategic Consultation
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={24} />
              </button>
              <button 
                onClick={() => navigate('/portfolio')}
                className="px-8 py-4 text-blue-600 dark:text-blue-400 border-2 border-blue-600 dark:border-blue-400 
                         rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors duration-200 
                         font-semibold text-lg"
              >
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;