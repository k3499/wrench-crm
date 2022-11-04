import React, { useContext, useState } from "react";
import { SearchAddressContext } from "../../contexts/SearchAddressContext";
import './AddressList.css';

function AddressList({
    isFound
}) {
    const [addressList, setAddressList] = useContext(SearchAddressContext);
    
    return (
      <div className="address-list__wrapper">
        <h2 className="address-list__title">Адреса</h2>
        <ul className="address-list__list">
            {
            isFound ? addressList.map((address, index) => (
                <li key={index} className="address-list__item">{ address.value }</li>
            )) : <li className="movies-list__not-found-text">Ничего не найдено</li>
            }

        </ul>
      </div>
    );
  }
  
  export default AddressList;