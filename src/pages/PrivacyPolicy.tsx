import React from 'react';
import { Shield, Eye, Lock, FileText, Globe, UserCheck } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen pt-20 relative overflow-hidden bg-gray-50/50 dark:bg-gray-950">
      {/* Decorative background mesh */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl dark:bg-blue-600/5 pointer-events-none"></div>

      <section className="relative pt-20 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800/50 rounded-full uppercase mb-5">
            <Lock className="w-3.5 h-3.5" />
            Data Protection
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-gray-900 dark:text-white leading-tight">
            Privacy <span className="gradient-text">Policy</span>
          </h1>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            We value your trust. This Privacy Policy details the types of information we collect, 
            how we safeguard it, and your legal rights. Last updated: June 2026.
          </p>
        </div>
      </section>

      {/* Policy Details */}
      <section className="py-8 pb-24 px-4 relative z-10">
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 border border-gray-200/50 dark:border-gray-800/80 shadow-sm rounded-3xl p-6 md:p-10">
          
          <div className="prose dark:prose-invert max-w-none text-sm text-gray-600 dark:text-gray-300 leading-relaxed space-y-8">
            
            {/* Section 1 */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-3">
                <Eye className="w-4.5 h-4.5 text-blue-600 dark:text-blue-400" />
                1. Information We Collect
              </h3>
              <p>
                NextMav collects information directly provided by you (such as when submitting our Contact Form) and technical telemetry collected automatically:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-500 dark:text-gray-400">
                <li><strong>Voluntary Data:</strong> Names, email addresses, phone numbers, company names, and project briefs.</li>
                <li><strong>Telemetry Data:</strong> IP addresses, browser specifications, operating system details, and referring pages.</li>
              </ul>
            </div>

            {/* Section 2 */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-3">
                <FileText className="w-4.5 h-4.5 text-blue-600 dark:text-blue-400" />
                2. How We Use Your Information
              </h3>
              <p>
                We process your information to deliver high-quality technology solutions, answer inquiries, and maintain security:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-500 dark:text-gray-400">
                <li>To establish and coordinate consulting engagements.</li>
                <li>To audit, maintain, and secure our website infrastructure.</li>
                <li>To analyze aggregate traffic flow pattern metrics (via anonymous analytical cookies).</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-3">
                <Shield className="w-4.5 h-4.5 text-blue-600 dark:text-blue-400" />
                3. Data Sharing & Security
              </h3>
              <p>
                NextMav does not sell, lease, or distribute your personal or commercial data to third-party brokers. We share data only with trusted infrastructure providers (such as hosting and database services) necessary to operate our platform.
              </p>
              <p className="mt-2">
                We implement industry-standard encryption protocols (SSL/TLS) for data transfers and keep access to client information restricted under least-privilege principles.
              </p>
            </div>

            {/* Section 4 */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-3">
                <UserCheck className="w-4.5 h-4.5 text-blue-600 dark:text-blue-400" />
                4. Your Rights & Choice
              </h3>
              <p>
                Depending on your location (such as under GDPR or regional privacy frameworks), you possess specific rights regarding your personal records:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-500 dark:text-gray-400">
                <li>The right to request access to and correction of your personal database records.</li>
                <li>The right to request absolute deletion of your contact history.</li>
                <li>The right to restrict or retract cookie consent at any time via our Cookie Preferences manager.</li>
              </ul>
            </div>

            {/* Section 5 */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-3">
                <Globe className="w-4.5 h-4.5 text-blue-600 dark:text-blue-400" />
                5. International Data Transfers
              </h3>
              <p>
                Our infrastructure spans secure data centers located in North America, Europe, and West Africa. By accessing our platform, you acknowledge that your telemetry data may be processed and stored globally.
              </p>
            </div>

          </div>

          <div className="border-t border-gray-100 dark:border-gray-800 pt-8 mt-8 text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
            For data protection inquiries or requests, contact NextMav at{' '}
            <a href="mailto:partner@nextmav.com" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
              partner@nextmav.com
            </a>.
          </div>

        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
