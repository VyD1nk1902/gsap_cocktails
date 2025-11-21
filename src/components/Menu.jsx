import React, {useState} from 'react';
import {cocktailsMenu} from "../../constants/index.js";

const Menu = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalCocktails = cocktailsMenu.length;
  const goToSlide = (index) => {
    const newIndex = (index + totalCocktails) % totalCocktails;
    setCurrentIndex(newIndex);
  };
  return (
      <section id="menu" aria-labelledby="menu-heading">
        <img src="/images/slider-left-leaf.png" alt="left-leaf" id="m-left-leaf"/>
        <img src="/images/slider-right-leaf.png" alt="right-leaf" id="m-right-leaf"/>

        <h2 id="menu-heading" className="sr-only">
          Cocktail Menu
        </h2>

        <nav className="cocktail-tabs" aria-label="Cocktail Navigation">
          {cocktailsMenu.map((cocktail, index) => {
            const isActive = index === currentIndex;

            return (
                <button
                    key={cocktail.id}
                    className={`${isActive ? 'text-white border-white' : 'text-white/50 border-white/50'}`}
                    onClick={() => goToSlide(index)}
                >
                  {cocktail.name}
                </button>
            );
          })}
        </nav>

        <div className="content">
          <div className="arrow">
            <button className="text-left" onClick={() => goToSlide(currentIndex - 1)}>
              <span>prevcocktailname</span>
              <img src="/images/prev-arrow.png" alt="prev-arrow" aria-hidden="true"/>
            </button>

            <button className="text-right" onClick={() => goToSlide(currentIndex + 1)}>
              <span>nextcocktailname</span>
              <img src="/images/next-arrow.png" alt="next-arrow" aria-hidden="true"/>
            </button>
          </div>

          <div className="cocktail">
          
          </div>
        </div>

      </section>
  );
};
export default Menu;
