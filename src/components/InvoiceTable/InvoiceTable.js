import React, { useState } from "react";
import './InvoiceTable.css'
import InvoiceList from "./InvoiceList/InvoiceList";
import numberToString from './numberToString';

export default function InvoiceTable() {
  const [total, setTotal] = useState(0);
  const [index, setIndex] = useState(0);
  const [delivery, setDelivery] = useState(true);

  const TO_DELIVERY_FREE = 3000;
  const DELIVERY_PRICE = 300;

  function updateTotal(price) {
    if (price < TO_DELIVERY_FREE) {
      setDelivery(true);
      price += DELIVERY_PRICE
    } else {
      setDelivery(false);
    }

    setTotal(price);
  }

  function updateIndex(idx) {
    setIndex(idx);
  }

  function onDeleteDelivery() {
    setDelivery(false);
    setTotal(prevTotal => prevTotal - DELIVERY_PRICE);
  }

  return (
    <>
      <table id="order">
        <thead>
          <tr>
            <th>№</th>
            <th>Товар</th>
            <th>Кол.</th>
            <th>Ед.</th>
            <th>Цена (руб)</th>
            <th>Сумма (руб)</th>
          </tr>
        </thead>
        <tfoot>
          {delivery ?
            <tr className="total">
              <td colSpan="5">Доставка:</td>
              <td>{DELIVERY_PRICE}</td>
              <td className="printHide delete delete--delivery" onClick={onDeleteDelivery}>x</td>
            </tr>
            : null}
          <tr className="total">
            <td colSpan="5">Итого:</td>
            <td className='price'>{total.toLocaleString()}</td>
          </tr>
        </tfoot>
        <tbody>
          <InvoiceList updateTotal={updateTotal} updateIndex={updateIndex} />
        </tbody>
      </table>
      <p>Всего наименований {index} на сумму <span className="price">{total.toLocaleString()}</span> руб.</p>
      <p id="sum-names">{numberToString(total)}</p>
    </>
  );
}
