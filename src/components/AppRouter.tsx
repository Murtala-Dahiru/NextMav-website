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
import GrowthSystems from '../pages/pillars/GrowthSystems';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';

const AppRouter = () => {
  const { currentPath } = useRouter();

  const renderPage = () => {
    switch (currentPath) {
      case '/':
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
    </div>
  );
};

export default AppRouter;