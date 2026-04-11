import React from 'react';
import { RouterProvider, Router } from './utils/router';
import AppRouter from './components/AppRouter';

function App() {
  return (
    <RouterProvider>
      <Router>
        <AppRouter />
      </Router>
    </RouterProvider>
  );
}

export default App;