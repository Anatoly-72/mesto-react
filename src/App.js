import logo from './images/logo.png';
import './index.css';

function App() {
  return (
    <div className="App">
      <body className="page">
        <div className="page__container">
          <header className="header header_margin">
            <img
              className="logo"
              src={logo}
              alt="Логотип"
            />
          </header>
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
          <footer className="footer footer_margin">
            <p className="footer__text" lang="en">
              © 2020 Mesto Russia
            </p>
          </footer>
        </div>

        <div className="popup popup_type_edit">
          <div className="popup__container">
            <h3 className="popup__title">Редактировать профиль</h3>
            <form className="popup__form" name="profileEditingForm" novalidate>
              <input
                id="name-input"
                className="popup__form-input"
                type="text"
                name="name"
                required
                minlength="2"
                maxlength="40"
              />
              <span
                class="popup__error popup__error_place_top popup__error_visible"
                id="name-input-error"
              ></span>
              <input
                id="info-input"
                className="popup__form-input"
                type="text"
                name="about"
                required
                minlength="2"
                maxlength="200"
              />
              <span
                className="popup__error popup__error_place_bottom popup__error_visible"
                id="info-input-error"
              ></span>
              <button
                className="popup__form-btn"
                type="submit"
                name="button"
                aria-label="Сохранить"
              >
                Сохранить
              </button>
            </form>
            <button className="popup__close" type="button"></button>
          </div>
        </div>

        <div className="popup popup_type_new-card">
          <div className="popup__container">
            <h3 className="popup__title">Новое место</h3>
            <form
              className="popup__form popup__form_new-card"
              name="addCardForm"
              novalidate
            >
              <input
                id="title-input"
                className="popup__form-input"
                type="text"
                name="name"
                placeholder="Название"
                required
                minlength="2"
                maxlength="30"
              />
              <span
                className="popup__error popup__error_place_top popup__error_visible"
                id="title-input-error"
              ></span>
              <input
                id="link-input"
                className="popup__form-input"
                type="url"
                name="link"
                placeholder="Ссылка на картинку"
                required
              />
              <span
                className="popup__error popup__error_place_bottom popup__error_visible"
                id="link-input-error"
              ></span>
              <button
                className="popup__form-btn popup__form-btn_type_new-card"
                type="submit"
                name="button"
                aria-label="Сохранить"
                disabled
              >
                Создать
              </button>
            </form>
            <button class="popup__close" type="button"></button>
          </div>
        </div>

        <div className="popup popup_type_avatar">
          <div className="popup__container">
            <h3 className="popup__title">Обновить аватар</h3>
            <form
              className="popup__form popup__form_avatar"
              name="formAvatar"
              novalidate
            >
              <input
                id="avatar-input"
                className="popup__form-input"
                type="url"
                name="avatar"
                placeholder="Ссылка на картинку"
                required
              />
              <span
                className="popup__error popup__error_place_top popup__error_visible"
                id="avatar-input-error"
              ></span>
              <button
                className="popup__form-btn"
                type="submit"
                name="button"
                aria-label="Сохранить"
              >
                Сохранить
              </button>
            </form>
            <button className="popup__close" type="button"></button>
          </div>
        </div>

        <div className="popup popup_type_image">
          <figure className="popup__container-image">
            <img className="popup__image" src="#" alt="#" />
            <figcaption className="popup__figcaption"></figcaption>
            <button className="popup__close" type="button"></button>
          </figure>
        </div>

        <div className="popup popup_type_prevent">
          <div className="popup__container">
            <h3 className="popup__title">Вы уверены?</h3>
            <form
              className="popup__form popup__form_prevent"
              action="#"
              name="formPrevent"
              novalidate
            >
              <button
                className="popup__form-btn popup__form-btn_prevent"
                type="submit"
                aria-label="Да"
              >
                Да
              </button>
            </form>
            <button className="popup__close" type="button"></button>
          </div>
        </div>

        <template className="template">
          <li className="cards__item">
            <div className="card">
              <img className="card__img" src="#" alt="#" />
              <div className="card__trash"></div>
              <div className="card__wrapper">
                <h2 className="card__title"></h2>
                <div className="card__icon-like">
                  <button className="card__icon" type="button"></button>
                  <span className="card__like">0</span>
                </div>
              </div>
            </div>
          </li>
        </template>
      </body>
    </div>
  );
}

export default App;
