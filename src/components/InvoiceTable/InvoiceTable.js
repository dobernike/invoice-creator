import React, { useState } from "react";
import InvoiceList from "./InvoiceList/InvoiceList";

export default function InvoiceTable() {
  const [total, setTotal] = useState(0);
  const [index, setIndex] = useState(0);

  function updateTotal(price) {
    setTotal(price);
  }

  function updateIndex(idx) {
    setIndex(idx);
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
          <tr className="total">
            <td colSpan="5">Итого:</td>
            <td>{total}</td>
          </tr>
        </tfoot>
        <tbody>
          <InvoiceList updateTotal={updateTotal} updateIndex={updateIndex} />
        </tbody>
      </table>
      <p>Всего наименований {index} на сумму {total} руб.</p>
      <p id="sum-names">Одна тысяча двести рублей ноль копеек</p>
    </>
  );
}
