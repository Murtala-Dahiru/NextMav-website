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
    const path = window.location.pathname;
    return path === '/' ? '/home' : path;
  };

  const [currentPath, setCurrentPath] = useState(getInitialPath);

  const navigate = (path: string) => {
    const targetPath = path === '/' ? '/home' : path;
    const urlPath = targetPath === '/home' ? '/' : targetPath;
    if (window.location.pathname !== urlPath) {
      window.history.pushState(null, '', urlPath);
    }
    setCurrentPath(targetPath);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      setCurrentPath(path === '/' ? '/home' : path);
    };

    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor) {
        const href = anchor.getAttribute('href');
        if (href) {
          if (href.startsWith('#/')) {
            e.preventDefault();
            const cleanPath = href.slice(1);
            navigate(cleanPath);
          } else if (href.startsWith('/') && !href.startsWith('//')) {
            e.preventDefault();
            navigate(href);
          }
        }
      }
    };

    window.addEventListener('popstate', handlePopState);
    document.addEventListener('click', handleGlobalClick);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      document.removeEventListener('click', handleGlobalClick);
    };
  }, []);

  return (
    <RouterContext.Provider value={{ currentPath, navigate }}>
      {children}
    </RouterContext.Provider>
  );
};

export const Router: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return children;
};