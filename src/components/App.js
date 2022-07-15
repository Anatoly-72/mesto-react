import { useState, useEffect } from 'react';
import '../index.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import api from '../utils/api.js';
import CurrentUserContext from '../contexts/CurrentUserContext.js';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const [currentUser, setCurrentUser] = useState({});
  const [cards, setСards] = useState([]);

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userData, cards]) => {
        setCurrentUser(userData);
        setСards(cards);
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  }, []);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    if (!isLiked) {
      api
        .setLike(card._id)
        .then((newCard) => {
          setСards((state) =>
            state.map((c) => (c._id === card._id ? newCard : c))
          );
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      api
        .deleteLike(card._id)
        .then((newCard) => {
          setСards((state) =>
            state.map((c) => (c._id === card._id ? newCard : c))
          );
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }

    function handleCardDelete(card) {
      api
        .deleteCard(card)
        .then(() => {
          setСards((items) => items.filter((c) => c._id !== card._id && c));
        })
        .catch((err) => {
          console.error(err);
        });
    }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="page__container">
          <Header />
          <Main
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onCardClick={handleCardClick}
            cards={cards}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
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

          <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
