import React from 'react';
import { Link } from 'react-router-dom';
const About = () => {
  return (
    <section className='section about-section'>
      <h1 className='section-title'>About</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae pariatur,
        doloremque mollitia perferendis, maxime exercitationem quasi esse nobis
        accusantium fuga dicta rem earum in ipsa! Libero ipsum eaque aut fugit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, aperiam
        mollitia. Veniam corrupti accusantium dicta voluptatibus obcaecati
        similique illo, sunt illum consequuntur voluptas explicabo iure
        reiciendis eaque sint! Libero, tempore? Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Debitis distinctio quos dicta facilis
        perspiciatis esse eveniet libero cupiditate, inventore sapiente
        corporis, et aspernatur voluptates nulla amet temporibus, perferendis
        veniam molestiae.m
      </p>
      <Link to='/'>
        <button
          className='btn btn-primary'
          style={{ textAlign: 'center', margin: 'auto', display: 'flex' }}
        >
          Home
        </button>
      </Link>
    </section>
  );
};

export default About;
