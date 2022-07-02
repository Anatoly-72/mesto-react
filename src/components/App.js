import '../index.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';

function App() {
  return (
    <div className="page">
      <div className="page__container">
        <Header />
        <Main />
        <Footer />
      </div>
      <div className="popup popup_type_edit">
        <div className="popup__container">
          <h3 className="popup__title">Редактировать профиль</h3>
          <form className="popup__form" name="profileEditingForm" noValidate>
            <input
              id="name-input"
              className="popup__form-input"
              type="text"
              name="name"
              required
              minLength="2"
              maxLength="40"
            />
            <span
              className="popup__error popup__error_place_top popup__error_visible"
              id="name-input-error"
            ></span>
            <input
              id="info-input"
              className="popup__form-input"
              type="text"
              name="about"
              required
              minLength="2"
              maxLength="200"
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
            noValidate
          >
            <input
              id="title-input"
              className="popup__form-input"
              type="text"
              name="name"
              placeholder="Название"
              required
              minLength="2"
              maxLength="30"
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
          <button className="popup__close" type="button"></button>
        </div>
      </div>
      <div className="popup popup_type_avatar">
        <div className="popup__container">
          <h3 className="popup__title">Обновить аватар</h3>
          <form
            className="popup__form popup__form_avatar"
            name="formAvatar"
            noValidate
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
            noValidate
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
    </div>
  );
}

export default App;
