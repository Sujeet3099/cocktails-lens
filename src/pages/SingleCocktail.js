import React, { useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import Loading from '../components/Loading';
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const SingleCocktail = ({ cocktail }) => {
  const { id } = useParams();
  const [cocktailDetail, setCocktailDetail] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  const fetchSingleCocktail = useCallback(async () => {
    try {
      const response = await fetch(`${url}${id}`);
      const data = await response.json();
      // const { drinks } = data;
      if (data.drinks) {
        const {
          strDrink: name,
          strDrinkThumb: image,
          strAlcoholic: info,
          strCategory: category,
          strGlass: glass,
          strInstructions: instructions,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
          strIngredient6,
        } = data.drinks[0];
        const ingredients = [
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
          strIngredient6,
        ];
        const newDrinks = {
          name,
          image,
          info,
          category,
          glass,
          instructions,
          ingredients,
        };
        setCocktailDetail(newDrinks);
      } else {
        setCocktailDetail(null);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [id]);
  React.useEffect(() => {
    fetchSingleCocktail();
  }, [id, fetchSingleCocktail]);
  if (loading) {
    return <Loading />;
  }
  if (!cocktailDetail) {
    return <h2 className='section-title'>No cocktail to display</h2>;
  }
  const {
    name,
    image,
    info,
    category,
    glass,
    instructions,
    ingredients,
  } = cocktailDetail;
  return (
    <section className='section cocktail-section'>
      <Link to='/'>
        <button className='btn btn-primary'>Home</button>
      </Link>
      <h2 className='section-title'>{name}</h2>
      <div className='drink'>
        <img src={image} alt={name} />
        <div className='drink-info'>
          <p>
            <span className='drink-data'>name:</span>
            {name}
          </p>
          <p>
            <span className='drink-data'>info:</span>
            {info}
          </p>
          <p>
            <span className='drink-data'>category:</span>
            {category}
          </p>
          <p>
            <span className='drink-data'>glass:</span>
            {glass}
          </p>
          <p>
            <span className='drink-data'>instructions:</span>
            {instructions}
          </p>
          <p>
            <span className='drink-data'>ingredients:</span>
            {ingredients.map((item, index) => {
              return item ? <span key={index}>{item}</span> : null;
            })}
            {}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleCocktail;
