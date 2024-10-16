import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const CocktailDetail = () => {
  const [cocktail, setCocktail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchCocktail = async () => {
      try {
        const response = await axios.get(`http://localhost:5555/api/cocktails/${id}`, { withCredentials: true });
        setCocktail(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching cocktail:', error);
        setError('Failed to fetch cocktail details. Please try again later.');
        setLoading(false);
      }
    };

    fetchCocktail();
  }, [id]);

  if (loading) return <div className="text-center p-4">Loading...</div>;
  if (error) return <div className="text-center p-4 text-red-600">{error}</div>;
  if (!cocktail) return <div className="text-center p-4">No cocktail found.</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4">{cocktail.name}</h2>
      <div className="md:flex">
        <img src={cocktail.image_url} alt={cocktail.name} className="w-full md:w-1/3 rounded-lg shadow-lg mb-4 md:mb-0 md:mr-8" />
        <div>
          <h3 className="text-xl font-semibold mb-2">Instructions:</h3>
          <p className="mb-4">{cocktail.instructions}</p>
          <h3 className="text-xl font-semibold mb-2">Ingredients:</h3>
          <ul className="list-disc list-inside">
            {cocktail.ingredients.map((ing, index) => (
              <li key={index}>{ing.amount} {ing.ingredient.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CocktailDetail;