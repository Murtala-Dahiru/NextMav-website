import React, { useState, useEffect } from 'react';
import { Shield, Cookie, Settings, Check, X } from 'lucide-react';

const CookieConsent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    functional: false
  });

  useEffect(() => {
    const stored = localStorage.getItem('nextmav-cookie-preferences');
    if (!stored) {
      // Small timeout to let the page load and create a smooth slide-in entry
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1500);
      return () => clearTimeout(timer);
    } else {
      try {
        setPreferences(JSON.parse(stored));
      } catch (e) {
        setIsOpen(true);
      }
    }

    const handleOpenPreferences = () => {
      setIsOpen(true);
      setShowPreferences(true);
    };

    window.addEventListener('nextmav-open-cookie-preferences', handleOpenPreferences);
    return () => {
      window.removeEventListener('nextmav-open-cookie-preferences', handleOpenPreferences);
    };
  }, []);

  const saveConsent = (updatedPrefs: typeof preferences) => {
    localStorage.setItem('nextmav-cookie-preferences', JSON.stringify(updatedPrefs));
    setPreferences(updatedPrefs);
    
    // Dispatch a custom event to notify other scripts of consent changes
    window.dispatchEvent(new CustomEvent('nextmav-cookie-consent-updated', { detail: updatedPrefs }));
    
    setIsOpen(false);
    setShowPreferences(false);
  };

  const handleAcceptAll = () => {
    const allAccepted = { necessary: true, analytics: true, functional: true };
    saveConsent(allAccepted);
  };

  const handleRejectAll = () => {
    const essentialOnly = { necessary: true, analytics: false, functional: false };
    saveConsent(essentialOnly);
  };

  const handleSavePreferences = () => {
    saveConsent(preferences);
  };

  const togglePreference = (key: 'analytics' | 'functional') => {
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 pointer-events-none animate-fade-in-up">
      <div className="pointer-events-auto max-w-3xl mx-auto bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border border-gray-200/80 dark:border-gray-800 shadow-2xl rounded-2xl p-5 md:p-6 transition-all duration-300">
        
        {/* Banner Core Layout */}
        <div className="flex flex-col md:flex-row items-start gap-4 md:gap-5">
          <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center flex-shrink-0 text-blue-600 dark:text-blue-400">
            <Cookie className="w-5 h-5" />
          </div>
          
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h4 className="text-base font-bold text-gray-900 dark:text-white flex items-center gap-1.5">
                Cookie & Privacy Settings
              </h4>
              <button 
                onClick={handleRejectAll}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors md:hidden"
                aria-label="Close banner with essential preferences only"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mt-2">
              NextMav uses cookies to verify session security, analyze platform performance, and optimize custom settings. 
              Review cookies and select your preferences. Learn more in our{' '}
              <a href="/cookie-policy" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
                Cookie Policy
              </a>.
            </p>

            {/* Expanded Preferences Customizer */}
            {showPreferences && (
              <div className="mt-6 border-t border-gray-100 dark:border-gray-800 pt-5 space-y-4 animate-fade-in">
                <h5 className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-3">
                  Manage Preferences
                </h5>

                {/* Necessary Category */}
                <div className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-950/40 rounded-xl border border-gray-100/50 dark:border-gray-900/30">
                  <div className="pt-0.5">
                    <div className="w-4 h-4 rounded bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center text-blue-600 dark:text-blue-400">
                      <Check className="w-3 h-3" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-gray-900 dark:text-white">Strictly Necessary</span>
                      <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-2 py-0.5 rounded">Always Active</span>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      Required for basic page navigation, secure user sessions, and core services. Without these, our website cannot operate correctly.
                    </p>
                  </div>
                </div>

                {/* Analytics Category */}
                <label className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-950/40 rounded-xl border border-gray-100/50 dark:border-gray-900/30 cursor-pointer hover:bg-gray-100/30 dark:hover:bg-gray-950/80 transition-colors">
                  <div className="pt-0.5">
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={() => togglePreference('analytics')}
                      className="rounded border-gray-300 dark:border-gray-700 text-blue-600 focus:ring-blue-500 w-4 h-4 cursor-pointer"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-gray-900 dark:text-white">Performance & Analytics</span>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      Allows us to track visitor counts, check response times, and identify traffic patterns. All data collected is aggregated and anonymous.
                    </p>
                  </div>
                </label>

                {/* Functional Category */}
                <label className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-950/40 rounded-xl border border-gray-100/50 dark:border-gray-900/30 cursor-pointer hover:bg-gray-100/30 dark:hover:bg-gray-950/80 transition-colors">
                  <div className="pt-0.5">
                    <input
                      type="checkbox"
                      checked={preferences.functional}
                      onChange={() => togglePreference('functional')}
                      className="rounded border-gray-300 dark:border-gray-700 text-blue-600 focus:ring-blue-500 w-4 h-4 cursor-pointer"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-gray-900 dark:text-white">Custom Functional</span>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      Enables the website to remember choices you make (such as UI preferences or regional options) to provide a richer, tailored experience.
                    </p>
                  </div>
                </label>
              </div>
            )}
            
            {/* Buttons / Actions Layout */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-end gap-2.5 mt-5">
              {!showPreferences ? (
                <>
                  <button
                    onClick={() => setShowPreferences(true)}
                    className="px-4 py-2.5 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Settings className="w-3.5 h-3.5" />
                    Manage Preferences
                  </button>
                  <button
                    onClick={handleRejectAll}
                    className="px-4 py-2.5 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 text-xs font-semibold rounded-lg transition-colors text-center"
                  >
                    Reject Non-Essential
                  </button>
                  <button
                    onClick={handleAcceptAll}
                    className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg shadow-sm transition-colors text-center"
                  >
                    Accept All
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => setShowPreferences(false)}
                    className="px-4 py-2.5 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 text-xs font-semibold rounded-lg transition-colors text-center"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleSavePreferences}
                    className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg shadow-sm transition-colors text-center flex items-center justify-center gap-1.5"
                  >
                    <Check className="w-3.5 h-3.5" />
                    Save Preferences
                  </button>
                </>
              )}
            </div>
            
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default CookieConsent;
