import React, { useState, useContext, useEffect, useCallback } from 'react';

const AppContext = React.createContext();
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [cocktails, setCocktails] = useState([]);
  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(`${url}${search}`);
      const data = await response.json();
      const { drinks } = data;
      if (drinks) {
        const newDrinks = drinks.map((drink) => {
          const {
            idDrink,
            strDrink,
            strDrinkThumb,
            strAlcoholic,
            strGlass,
          } = drink;
          return {
            id: idDrink,
            name: strDrink,
            img: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          };
        });
        setCocktails(newDrinks);
      } else {
        setCocktails([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
    // return data;
  }, [search]);
  useEffect(() => {
    fetchData();
  }, [search, fetchData]);

  return (
    <AppContext.Provider
      value={{ loading, setLoading, search, setSearch, cocktails }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
