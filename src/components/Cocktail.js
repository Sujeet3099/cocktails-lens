import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../Context';

const Cocktail = ({ id, name, img, info, glass }) => {
  const { setLoading } = useGlobalContext();
  return (
    <div className='cocktail'>
      <div className='img-container'>
        <img src={img} alt={name} />
      </div>
      <div className='cocktail-footer'>
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Link
          to={`/cocktail/${id}`}
          className='btn btn-primary'
          onClick={() => {
            setLoading(true);
          }}
        >
          details
        </Link>
        {/* <button className='btn'>{info}</button> */}
      </div>
    </div>
  );
};

export default Cocktail;
