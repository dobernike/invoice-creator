import React, { useState, useCallback } from "react";
import "./InvoiceTable.css";
import InvoiceList from "./InvoiceList/InvoiceList";
import numberToString from "../../utils/numberToString";

const InvoiceTable = () => {
  const [total, setTotal] = useState(0);
  const [index, setIndex] = useState(0);
  const [delivery, setDelivery] = useState(true);

  const TO_DELIVERY_FREE = 3000;
  const DELIVERY_PRICE = 300;

  const updateTotalHandler = useCallback(price => {
    if (price < TO_DELIVERY_FREE && price !== 0) {
      setDelivery(true);
      price += DELIVERY_PRICE;
    } else {
      setDelivery(false);
    }

    setTotal(price);
  }, []);

  const updateIndexHandler = useCallback(idx => setIndex(idx), []);

  const deleteDeliveryHandler = () => {
    setDelivery(false);
    setTotal(prevTotal => prevTotal - DELIVERY_PRICE);
  };

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
          {delivery ? (
            <tr className="total">
              <td colSpan="5">Доставка:</td>
              <td>{DELIVERY_PRICE}</td>
              <td
                className="printHide delete delete--delivery"
                onClick={deleteDeliveryHandler}
              >
                x
              </td>
            </tr>
          ) : null}
          <tr className="total">
            <td colSpan="5">Итого:</td>
            <td className="price">{total.toLocaleString()}</td>
          </tr>
        </tfoot>
        <tbody>
          <InvoiceList
            onUpdateTotal={updateTotalHandler}
            onUpdateIndex={updateIndexHandler}
          />
        </tbody>
      </table>
      <p>
        Всего наименований {index} на сумму{" "}
        <span className="price">{total.toLocaleString()}</span> руб.
      </p>
      <p id="sum-names">{numberToString(total)}</p>
    </>
  );
};

InvoiceTable.whyDidYouRender = true;

export default InvoiceTable;
