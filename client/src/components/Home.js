import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to the Cocktail App</h1>
      <p className="text-xl mb-8">Discover and share your favorite cocktail recipes!</p>
      <Link to="/cocktails" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
        Browse Cocktails
      </Link>
    </div>
  );
};

export default Home;