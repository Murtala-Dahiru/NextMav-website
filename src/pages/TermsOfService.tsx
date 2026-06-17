import React from 'react';
import { Scale, FileText, CheckCircle, ShieldAlert, Cpu } from 'lucide-react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen pt-20 relative overflow-hidden bg-gray-50/50 dark:bg-gray-950">
      {/* Decorative background mesh */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl dark:bg-blue-600/5 pointer-events-none"></div>

      <section className="relative pt-20 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800/50 rounded-full uppercase mb-5">
            <Scale className="w-3.5 h-3.5" />
            Legal Agreement
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-gray-900 dark:text-white leading-tight">
            Terms of <span className="gradient-text">Service</span>
          </h1>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Please read these Terms of Service carefully before utilizing our website and consulting services. 
            Last updated: June 2026.
          </p>
        </div>
      </section>

      {/* Policy Details */}
      <section className="py-8 pb-24 px-4 relative z-10">
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 border border-gray-200/50 dark:border-gray-800/80 shadow-sm rounded-3xl p-6 md:p-10">
          
          <div className="prose dark:prose-invert max-w-none text-sm text-gray-600 dark:text-gray-300 leading-relaxed space-y-8">
            
            {/* Introduction */}
            <div>
              <p>
                Welcome to NextMav. By accessing our website, platform services, or engaging with our engineering consultancy, you agree to be bound by these Terms of Service. If you do not accept these terms, you must discontinue your use of our services immediately.
              </p>
            </div>

            {/* Section 1 */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-3">
                <FileText className="w-4.5 h-4.5 text-blue-600 dark:text-blue-400" />
                1. Scope of Engagement
              </h3>
              <p>
                NextMav provides cloud infrastructure, digital systems integration, and applied AI/automation consulting services. The specific scope, milestones, schedules, deliverables, and fees of any engagement will be defined in a separate Statement of Work (SOW) signed by both parties.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-3">
                <Cpu className="w-4.5 h-4.5 text-blue-600 dark:text-blue-400" />
                2. Intellectual Property Rights
              </h3>
              <p>
                Unless explicitly agreed in writing in an active Statement of Work:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-500 dark:text-gray-400">
                <li>All pre-existing materials, codebase assets, architectures, and templates developed by NextMav remain the exclusive property of NextMav.</li>
                <li>Custom deliverable assets developed specifically for clients under a signed, paid Statement of Work transfer to the client upon full payment.</li>
                <li>No license is granted to utilize our trade names, brand visual designs, or logos without prior written authorization.</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-3">
                <CheckCircle className="w-4.5 h-4.5 text-blue-600 dark:text-blue-400" />
                3. Acceptable Platform Use
              </h3>
              <p>
                When utilizing our website or customer portals, you agree not to:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-500 dark:text-gray-400">
                <li>Attempt to decompile, scan, or reverse engineer any systems or security frameworks.</li>
                <li>Input malicious data, scripts, or botnets into contact portals.</li>
                <li>Utilize website contents to build competing service offerings.</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-3">
                <ShieldAlert className="w-4.5 h-4.5 text-blue-600 dark:text-blue-400" />
                4. Disclaimers & Limitation of Liability
              </h3>
              <p>
                NextMav services and web resources are provided on an "as is" and "as available" basis without warranties of any kind, whether express or implied.
              </p>
              <p className="mt-2">
                In no event shall NextMav, its directors, or agents be held liable for any indirect, special, incidental, or consequential damages (including data loss, service downtime, or budget variances) arising from your access to this site or our consulting resources.
              </p>
            </div>

          </div>

          <div className="border-t border-gray-100 dark:border-gray-800 pt-8 mt-8 text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
            For legal inquiries or clarifications, contact NextMav at{' '}
            <a href="mailto:partner@nextmav.com" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
              partner@nextmav.com
            </a>.
          </div>

        </div>
      </section>
    </div>
  );
};

export default TermsOfService;
