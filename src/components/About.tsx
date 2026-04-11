import React from 'react';
import { CheckCircle, Target, Eye, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Technology Systems Partner for Growing Organizations</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
            NextMav specializes in cloud infrastructure, intelligent automation, and digital product engineering. We work with high-growth startups, mid-market companies, and established enterprises to build scalable systems that drive operational excellence and measurable business outcomes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <Target className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-3xl font-bold">Our Mission</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                To enable organizations of any scale to operate reliably, grow confidently, and compete effectively through technology infrastructure and intelligent systems.
              </p>
            </div>

            <div>
              <div className="flex items-center mb-4">
                <Eye className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-3xl font-bold">Our Vision</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                To be the technology partner that organizations trust to architect systems for growth, automate operations reliably, and compete confidently at any scale.
              </p>
            </div>
          </div>

          <div className="card">
            <Lightbulb className="w-12 h-12 text-blue-600 mb-6" />
            <h4 className="text-2xl font-bold mb-4">Our Vision in Action</h4>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              We design systems for reliable growth. We architect infrastructure that scales with you. We enable teams to operate efficiently at any size.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              We're built for any ambitious organization: high-growth startups expanding rapidly, mid-market companies optimizing operations, and enterprises modernizing infrastructure.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              We focus on cloud systems, data intelligence, and product engineering—helping organizations move from manual work to intelligent, data-driven operations that compete confidently.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
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
          ].map((value, index) => (
            <div key={index} className="card text-center">
              <value.icon className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-3">{value.title}</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;