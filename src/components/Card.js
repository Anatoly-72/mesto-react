function Card({ card, onCardClick }) {
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
        <div className="card__trash"></div>
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
