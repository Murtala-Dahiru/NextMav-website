import React, { createContext, useContext, useState, useEffect } from 'react';

interface RouterContextType {
  currentPath: string;
  navigate: (path: string) => void;
}

const RouterContext = createContext<RouterContextType | undefined>(undefined);

export const useRouter = () => {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within a RouterProvider');
  }
  return context;
};

export const RouterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const getInitialPath = () => {
    const hash = window.location.hash.slice(1);
    if (!hash || hash === '/') {
      window.location.hash = '/home';
      return '/home';
    }
    return hash;
  };

  const [currentPath, setCurrentPath] = useState(getInitialPath);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (!hash || hash === '/') {
        window.location.hash = '/home';
      } else {
        setCurrentPath(hash);
      }
    };

    const hash = window.location.hash.slice(1);
    if (!hash || hash === '/') {
      window.location.hash = '/home';
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (path: string) => {
    const targetPath = path === '/' ? '/home' : path;
    window.location.hash = targetPath;
    setCurrentPath(targetPath);
  };

  return (
    <RouterContext.Provider value={{ currentPath, navigate }}>
      {children}
    </RouterContext.Provider>
  );
};

export const Router: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return children;
};