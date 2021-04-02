import React from 'react';
import Loading from './Loading';
import { useGlobalContext } from '../Context';
import Cocktail from './Cocktail';
const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext();
  // console.log(cocktails);
  // console.log(cocktails.length);
  if (loading === true) return <Loading />;
  if (cocktails.length < 1) {
    return <h2 className='section-title'>No cocktails matched your search</h2>;
  }
  return (
    <section className='section'>
      <h2 className='section-title'>cocktail</h2>
      <div className='cocktails-center'>
        {cocktails.map((cocktail) => {
          return <Cocktail key={cocktail.id} {...cocktail} />;
        })}
      </div>
    </section>
  );
};

export default CocktailList;
