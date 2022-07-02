function Main() {
  return (
    <main className="content">
      <section className="profile profile_margin">
        <div className="profile__avatar" onClick={handleEditAvatarClick}></div>
        <div className="profile__info">
          <div className="profile__wrapper">
            <h1 className="profile__title">Жак-Ив Кусто</h1>
            <button
              className="profile__edit-button"
              type="button"
              aria-label="Редактировать"
              onClick={handleEditProfileClick}
            ></button>
          </div>
          <p className="profile__subtitle">Исследователь океана</p>
        </div>
        <button
          className="profile__add-button"
          type="button"
          aria-label="Добавить"
          onClick={handleAddPlaceClick}
        ></button>
      </section>
      <section className="cards cards_margin">
        <ul className="cards__list"></ul>
      </section>
    </main>
  );

  function handleEditAvatarClick() {
    document.querySelector('.popup_type_avatar').classList.add('popup_active');
  }

  function handleEditProfileClick() {
    document.querySelector('.popup_type_edit').classList.add('popup_active');
  }

  function handleAddPlaceClick() {
    document.querySelector('.popup_type_new-card').classList.add('popup_active');
  }
}

export default Main;
