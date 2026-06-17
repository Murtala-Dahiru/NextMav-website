import React from 'react';
import { Shield, Cookie, Settings2, Info, Lock, Eye, AlertCircle } from 'lucide-react';

const CookiePolicy = () => {
  const openPreferences = () => {
    window.dispatchEvent(new CustomEvent('nextmav-open-cookie-preferences'));
  };

  const cookieGroups = [
    {
      title: 'Strictly Necessary Cookies',
      purpose: 'Core site operation & session security',
      description: 'These cookies are essential for navigating our platform safely, rendering standard layouts, and managing secure state. Without these cookies, the website cannot perform basic functions.',
      retention: 'Session (deleted when browser closes)',
      status: 'Required / Non-optional',
      icon: Lock
    },
    {
      title: 'Performance & Analytics Cookies',
      purpose: 'Telemetry & platform speed analysis',
      description: 'Analytics cookies collect anonymous telemetry data to measure page visit counts, loading latency, and user flow pathways. This helps us optimize system resource allocations and speed.',
      retention: 'Up to 12 months',
      status: 'Optional (user configurable)',
      icon: Eye
    },
    {
      title: 'Custom Functional Cookies',
      purpose: 'User preference preservation',
      description: 'Functional cookies save settings you choose—such as dark/light mode settings, country preferences, or specific capability filters. This ensures a consistent operational experience.',
      retention: 'Up to 6 months',
      status: 'Optional (user configurable)',
      icon: Settings2
    }
  ];

  return (
    <div className="min-h-screen pt-20 relative overflow-hidden bg-gray-50/50 dark:bg-gray-950">
      {/* Decorative background mesh */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl dark:bg-blue-600/5 pointer-events-none"></div>

      <section className="relative pt-20 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800/50 rounded-full uppercase mb-5">
            <Shield className="w-3.5 h-3.5" />
            Compliance & Transparency
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-gray-900 dark:text-white leading-tight">
            Cookie <span className="gradient-text">Policy</span>
          </h1>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            This Policy explains how NextMav uses cookies and similar tracking technologies to ensure security, 
            measure performance, and deliver customized services. Last updated: June 2026.
          </p>
        </div>
      </section>

      {/* Policy Details */}
      <section className="py-8 pb-24 px-4 relative z-10">
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 border border-gray-200/50 dark:border-gray-800/80 shadow-sm rounded-3xl p-6 md:p-10">
          
          {/* Quick Adjust Preferences Header Banner */}
          <div className="mb-10 p-5 bg-gradient-to-r from-blue-50/50 to-cyan-50/50 dark:from-blue-950/20 dark:to-cyan-950/20 rounded-2xl border border-blue-100 dark:border-blue-900/30 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Cookie className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900 dark:text-white">Active Preferences</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                  You can update or retract your consent choices at any time.
                </p>
              </div>
            </div>
            <button
              onClick={openPreferences}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-1.5 self-start md:self-auto shadow-sm shadow-blue-500/10"
            >
              <Settings2 className="w-3.5 h-3.5" />
              Adjust Preferences
            </button>
          </div>

          {/* Section 1: Definition */}
          <div className="mb-10">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-4">
              <Info className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              1. What Are Cookies?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              Cookies are small text files stored on your computer or mobile device when you visit websites. 
              They are widely used by service providers to make platforms load correctly, protect logins, 
              and gather operational metrics.
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mt-3">
              Cookies set by NextMav are called "first-party cookies." Cookies set by other parties (such as analytics tools 
              or third-party assets) are "third-party cookies." We keep third-party tracking strictly minimized.
            </p>
          </div>

          {/* Section 2: Cookie Categories */}
          <div className="mb-10">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-4">
              <Settings2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              2. Cookie Classification We Use
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">
              We separate cookies into three categories. You can accept or deny non-essential analytics and functional cookies.
            </p>

            <div className="space-y-4">
              {cookieGroups.map((group, index) => (
                <div key={index} className="p-5 bg-gray-50/50 dark:bg-gray-950/20 border border-gray-100 dark:border-gray-800 rounded-2xl flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 flex items-center justify-center flex-shrink-0 text-gray-500 dark:text-gray-400 mt-0.5">
                    <group.icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                      <h4 className="text-sm font-bold text-gray-900 dark:text-white">{group.title}</h4>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded self-start sm:self-auto ${
                        index === 0 
                          ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border border-blue-100/50 dark:border-blue-800/20' 
                          : 'bg-gray-100 dark:bg-gray-850 text-gray-600 dark:text-gray-400'
                      }`}>
                        {group.status}
                      </span>
                    </div>
                    <div className="text-[11px] font-semibold text-gray-400 dark:text-gray-500 uppercase mt-1 tracking-wider">
                      Purpose: {group.purpose}
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-2 leading-relaxed">
                      {group.description}
                    </p>
                    <div className="text-[11px] text-gray-400 dark:text-gray-500 mt-3 font-medium">
                      Duration: <span className="font-semibold">{group.retention}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Browser Management */}
          <div className="mb-10">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-4">
              <AlertCircle className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              3. Managing Cookies via Browser Settings
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              Aside from using our on-page Preference Center, you can instruct your browser to refuse or erase cookies 
              globally. Browser preferences must be set on each device and browser you use.
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mt-3">
              To manage browser cookies, follow the standard guidance provided by your browser developers:
            </p>
            <ul className="list-disc pl-5 mt-3 text-xs text-gray-500 dark:text-gray-400 space-y-2">
              <li>
                <strong>Google Chrome:</strong> Settings &gt; Privacy and security &gt; Third-party cookies
              </li>
              <li>
                <strong>Mozilla Firefox:</strong> Settings &gt; Privacy & Security &gt; Cookies and Site Data
              </li>
              <li>
                <strong>Apple Safari:</strong> Preferences &gt; Privacy &gt; Prevent cross-site tracking / Block all cookies
              </li>
              <li>
                <strong>Microsoft Edge:</strong> Settings &gt; Cookies and site permissions &gt; Manage and delete cookies
              </li>
            </ul>
          </div>

          {/* Section 4: Contact */}
          <div className="border-t border-gray-100 dark:border-gray-800 pt-8">
            <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-2">
              Questions & Inquiries
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed">
              If you have questions about this Cookie Policy, contact us at{' '}
              <a href="mailto:partner@nextmav.com" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
                partner@nextmav.com
              </a>.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default CookiePolicy;
