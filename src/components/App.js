import '../index.css';
import React from 'react';
import api from '../utils/api';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
  }

  return (
    <div className="page">
      <div className="page__container">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
        />
        <Footer />

        <PopupWithForm
          name="edit"
          form="profileEditingForm"
          title="Редактировать профиль"
          buttonText="Сохранить"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        >
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
        </PopupWithForm>

        <PopupWithForm
          name="new-card"
          form="addCardForm"
          title="Новое место"
          buttonText="Создать"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
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
        </PopupWithForm>

        <PopupWithForm
          name="avatar"
          form="formAvatar"
          title="Обновить аватар"
          buttonText="Сохранить"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
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
        </PopupWithForm>

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
                name="button"
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
    </div>
  );
}

export default App;
