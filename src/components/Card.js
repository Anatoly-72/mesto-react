function Card(props) {

  function handleCardClick() {
    props.onCardClick(props.card);
  }

  return (
    <li className="cards__item">
      <div className="card">
        <img
          className="card__img"
          src={props.link}
          alt={props.name}
          onClick={handleCardClick}
        />
        <div className="card__trash"></div>
        <div className="card__wrapper">
          <h2 className="card__title">{props.name}</h2>
          <div className="card__icon-like">
            <button className="card__icon" type="button"></button>
            <span className="card__like">{props.likes}</span>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Card;
