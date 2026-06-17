import React from 'react';
import { useRouter } from '../utils/router';
import Navbar from './layout/Navbar';
import Footer from './Footer';
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import CloudInfrastructure from '../pages/pillars/CloudInfrastructure';
import IntelligentSystems from '../pages/pillars/IntelligentSystems';
import ExperienceStudio from '../pages/pillars/ExperienceStudio';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';
import CookiePolicy from '../pages/CookiePolicy';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import TermsOfService from '../pages/TermsOfService';
import CookieConsent from './CookieConsent';

const AppRouter = () => {
  const { currentPath } = useRouter();

  const renderPage = () => {
    switch (currentPath) {
      case '/':
      case '/home':
        return <Home />;
      case '/about':
        return <About />;
      case '/services':
        return <Services />;
      case '/divisions/cloud-infrastructure-excellence':
        return <CloudInfrastructure />;
      case '/divisions/ai-data-intelligent-operations':
        return <IntelligentSystems />;
      case '/divisions/digital-infrastructure-technology-solutions':
        return <ExperienceStudio />;
      case '/portfolio':
        return <Portfolio />;
      case '/contact':
        return <Contact />;
      case '/cookie-policy':
        return <CookiePolicy />;
      case '/privacy':
        return <PrivacyPolicy />;
      case '/terms':
        return <TermsOfService />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <main>
        {renderPage()}
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default AppRouter;