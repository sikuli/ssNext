require('../../res/stylesheets/CardsList.scss');
import React, { PropTypes } from 'react';
import CardItem from './CardItem.js';

const CardsList = (props) => {
  const cards = props.cards.map((card) => {
    return <CardItem key={card.id} {...card} />;
  });
  return (
    <div className="recent-cards">
      <h3>Recently Opned:</h3>
      <div className="cards-list">
        {cards}
      </div>
    </div>
  );
};

CardsList.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object)
};

export default CardsList;
