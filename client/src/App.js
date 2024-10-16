import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

// Lazy load components
const Home = React.lazy(() => import('./components/Home'));
const CocktailList = React.lazy(() => import('./components/CocktailList'));
const CocktailDetail = React.lazy(() => import('./components/CocktailDetail'));
const UserAuth = React.lazy(() => import('./components/UserAuth'));

// 404 Not Found component
const NotFound = () => (
  <div className="container mx-auto px-4 py-16 text-center">
    <h1 className="text-4xl font-bold mb-4">404: Page Not Found</h1>
    <p className="text-xl">Sorry, the page you're looking for doesn't exist.</p>
  </div>
);

function App() {
  return (
    <Router>
      <div className="App">
        <h1 className="text-2xl font-bold text-center py-4">Test Render: App is loading</h1>
        <Navbar />
        <Suspense fallback={<div className="container mx-auto px-4 py-16 text-center">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cocktails" element={<CocktailList />} />
            <Route path="/cocktails/:id" element={<CocktailDetail />} />
            <Route path="/auth" element={<UserAuth />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;