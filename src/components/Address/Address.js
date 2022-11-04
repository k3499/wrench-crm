import React, {useState} from 'react';
import './Address.css';
import AddressList from '../AddressList/AddressList'


const Address = ({
  handleSearchSubmit,
  isFound
}) => {
  const [inputFilled, setInputFilled] = useState(false);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (evt.target.value == "") {
      setInputFilled(false);
    } else {
      handleSearchSubmit(evt.target.value);
      setInputFilled(true);
    }
      
  };

  return (
    <div className="address">
      <h1 className="address__title">Поиск адресов</h1>
      <p className="address__subtitle">Введите интересующий вас адрес</p>
      <div className="address__search">
        <form className="address__search-form" onSubmit={handleSubmit}>
          <div className="address__container">
            <input className="address__input"
              placeholder="Введите интересующий вас адрес" required name="address" type="text"
              pattern="^[а-яА-Яa-zA-Z\d\s\-]+$" onChange={handleSubmit}></input>
               <button type="submit" className="address__button" >Поиск</button>
          </div>
        </form>
        {
          inputFilled & isFound ? <AddressList isFound={isFound}/> : ""
        }
        
      </div>
    </div>
  );
}

export default Address;
