import './PopNewCard.css';
import Calendar from '../Calendar/Calendar';
import NewCardForm from '../NewCardForm/NewCardForm';

const PopNewCard = ({ style, onClose }) => {
  return (
    <div className="pop-new-card" id="popNewCard" style={style}>
      <div className="pop-new-card__container">
        <div className="pop-new-card__block">
          <div className="pop-new-card__content">
            <h3 className="pop-new-card__ttl">Создание задачи</h3>
            <a
              className="pop-new-card__close"
              onClick={(e) => {
                e.preventDefault();
                onClose();
              }}
            >
              &#10006;
            </a>
            <div className="pop-new-card__wrap">
              <NewCardForm />
              <Calendar />
            </div>
            <div className="pop-new-card__categories categories">
              <p className="categories__p subttl">Категория</p>
              <div className="categories__themes">
                <div className="categories__theme _orange _active-category">
                  <p className="_orange">Web Design</p>
                </div>
                <div className="categories__theme _green">
                  <p className="_green">Research</p>
                </div>
                <div className="categories__theme _purple">
                  <p className="_purple">Copywriting</p>
                </div>
              </div>
            </div>
            <button className="form-new__create _hover01" id="btnCreate">
              Создать задачу
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopNewCard;
