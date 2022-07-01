function Main() {
  return (
    <main className="content">
      <section className="profile profile_margin">
        <div className="profile__avatar"></div>
        <div className="profile__info">
          <div className="profile__wrapper">
            <h1 className="profile__title">Жак-Ив Кусто</h1>
            <button
              className="profile__edit-button"
              type="button"
              aria-label="Редактировать"
            ></button>
          </div>
          <p className="profile__subtitle">Исследователь океана</p>
        </div>
        <button
          className="profile__add-button"
          type="button"
          aria-label="Добавить"
        ></button>
      </section>
      <section className="cards cards_margin">
        <ul className="cards__list"></ul>
      </section>
    </main>
  );
}

export default Main;
