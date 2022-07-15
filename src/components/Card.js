import { useContext } from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext.js';

function Card({ card, onCardClick }) {
  const currentUser = useContext(CurrentUserContext);

  const isOwn = card.owner._id === currentUser._id;

  const cardDeleteButtonClassName = `card__trash ${
    isOwn ? 'card__trash_visible' : ''
  }`;

  function handleClick() {
    onCardClick(card);
  }

  return (
    <li className="cards__item">
      <div className="card">
        <img
          className="card__img"
          src={card.link}
          alt={card.name}
          onClick={handleClick}
        />
        <div className={cardDeleteButtonClassName}></div>
        <div className="card__wrapper">
          <h2 className="card__title">{card.name}</h2>
          <div className="card__icon-like">
            <button className="card__icon" type="button"></button>
            <span className="card__like">{card.likes.lenght}</span>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Card;
