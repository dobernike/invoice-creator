import React from "react";
import InvoiceList from "./InvoiceList/InvoiceList";

export default function InvoiceTable() {
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
        <tbody>
          <InvoiceList />
        </tbody>
        <tfoot>
          <tr className="total">
            <td colSpan="5">Итого:</td>
            <td>1 200</td>
          </tr>
        </tfoot>
      </table>
      <p>Всего наименований 1 на сумму 1 200 руб.</p>
      <p id="sum-names">Одна тысяча двести рублей ноль копеек</p>
    </>
  );
}
