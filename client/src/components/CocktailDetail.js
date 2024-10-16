import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CocktailList = () => {
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCocktails = async () => {
      try {
        const response = await axios.get('http://localhost:5555/api/cocktails', { withCredentials: true });
        setCocktails(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching cocktails:', error);
        setError('Failed to fetch cocktails. Please try again later.');
        setLoading(false);
      }
    };

    fetchCocktails();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold mb-4">Cocktail List</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {cocktails.map(cocktail => (
          <li key={cocktail.id} className="bg-white shadow rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
            <Link to={`/cocktails/${cocktail.id}`} className="text-blue-600 hover:text-blue-800">
              {cocktail.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CocktailList;