import React, { useState } from 'react';
import { Menu, X, ChevronDown, ArrowRight, Cloud, Bot, BarChart, Code, TrendingUp } from 'lucide-react';
import { useRouter } from '../../utils/router';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const { navigate, currentPath } = useRouter();

  const handleNavigation = (path: string) => {
    navigate(path);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  };

  return (
    <nav className="fixed w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg z-50 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <button 
              onClick={() => handleNavigation('/')}
              className="text-2xl font-bold gradient-text hover:scale-105 transition-transform duration-200"
            >
              NextMav
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => handleNavigation('/about')}
              className={`nav-link ${currentPath === '/about' ? 'text-blue-600' : ''}`}
            >
              About
            </button>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => handleNavigation('/services')}
                className={`nav-link flex items-center ${currentPath.startsWith('/services') ? 'text-blue-600' : ''}`}
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                Services
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              
              {servicesDropdownOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-72 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 py-3 z-50"
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                >
                  <button
                    onClick={() => handleNavigation('/divisions/cloud-infrastructure-excellence')}
                    className="block w-full text-left px-6 py-3 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 transition-all duration-200 rounded-lg mx-2 group"
                  >
                    <div className="flex items-center">
                      <Cloud className="w-4 h-4 mr-3 text-blue-500" />
                      <div>
                        <div className="font-semibold">Cloud & Infrastructure Excellence</div>
                        <div className="text-xs text-gray-500">Cloud architecture</div>
                      </div>
                    </div>
                  </button>
                  <button
                    onClick={() => handleNavigation('/divisions/ai-data-intelligent-operations')}
                    className="block w-full text-left px-6 py-3 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 transition-all duration-200 rounded-lg mx-2 group"
                  >
                    <div className="flex items-center">
                      <Bot className="w-4 h-4 mr-3 text-purple-500" />
                      <div>
                        <div className="font-semibold">AI, Data & Intelligent Operations</div>
                        <div className="text-xs text-gray-500">AI-powered business automation</div>
                      </div>
                    </div>
                  </button>
                  <button
                    onClick={() => handleNavigation('/divisions/digital-infrastructure-technology-solutions')}
                    className="block w-full text-left px-6 py-3 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 transition-all duration-200 rounded-lg mx-2 group"
                  >
                    <div className="flex items-center">
                      <Code className="w-4 h-4 mr-3 text-slate-500" />
                      <div>
                        <div className="font-semibold">Digital Infrastructure & Technology Solutions</div>
                        <div className="text-xs text-gray-500">Systems integration & platform engineering</div>
                      </div>
                    </div>
                  </button>
                </div>
              )}
            </div>

            <button 
              onClick={() => handleNavigation('/portfolio')}
              className={`nav-link ${currentPath === '/portfolio' ? 'text-blue-600' : ''}`}
            >
              Portfolio
            </button>
            
            <button 
              onClick={() => handleNavigation('/contact')}
              className={`nav-link ${currentPath === '/contact' ? 'text-blue-600' : ''}`}
            >
              Contact Us
            </button>
            
            <button 
              onClick={() => handleNavigation('/contact')}
              className="btn-primary inline-flex items-center group"
            >
              Book a Growth Audit
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={16} />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 dark:text-gray-200"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
          <div className="px-4 py-4 space-y-3">
            <button
              onClick={() => handleNavigation('/about')}
              className="block w-full text-left nav-link"
            >
              About
            </button>
            <button
              onClick={() => handleNavigation('/services')}
              className="block w-full text-left nav-link"
            >
              Services
            </button>
            <button
              onClick={() => handleNavigation('/divisions/cloud-infrastructure-excellence')}
              className="block w-full text-left nav-link pl-6 text-sm"
            >
              Cloud & Infrastructure Excellence
            </button>
            <button
              onClick={() => handleNavigation('/divisions/ai-data-intelligent-operations')}
              className="block w-full text-left nav-link pl-6 text-sm"
            >
              AI, Data & Intelligent Operations
            </button>
            <button
              onClick={() => handleNavigation('/divisions/digital-infrastructure-technology-solutions')}
              className="block w-full text-left nav-link pl-6 text-sm"
            >
              Digital Infrastructure & Technology Solutions
            </button>
            <button
              onClick={() => handleNavigation('/portfolio')}
              className="block w-full text-left nav-link"
            >
              Portfolio
            </button>
            <button
              onClick={() => handleNavigation('/contact')}
              className="btn-primary w-full mt-4"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;