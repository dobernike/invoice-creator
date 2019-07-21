import React, { useState, useEffect } from "react";
import barcode from "../../barcode.svg";

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function Header() {
  const [date, setDate] = useState(new Date().toLocaleDateString());
  const [invoiceNumber, setInvoiceNumber] = useState(
    getRandomInt(10000, 100000)
  );
  const [data, setData] = useState(date);

  useEffect(() => {
    document.title = `${date} накладная № ${invoiceNumber}`;
  }, [date, invoiceNumber])

  function onChangeDate(e) {
    setDate(e.target.value);
    setData(e.target.value);
  }

  function onChangeNumber(e) {
    setInvoiceNumber(e.target.value);
    setData(e.target.value);
  }

  function getInput(state) {
    return (
      <input
        className="printHide"
        type="text"
        value={state}
        onChange={e => (state === date ? onChangeDate(e) : onChangeNumber(e))}
      />
    );
  }

  return (
    <>
      <table id="header">
        <tbody>
          <tr>
            <td>
              <h1>
                Расходная накладная №&nbsp;
                <span onClick={() => setData(invoiceNumber)}>
                  {invoiceNumber}&nbsp;
                </span>
                от&nbsp;
                <span onClick={() => setData(date)}>{date}</span>
                &nbsp;{getInput(data)}
              </h1>
            </td>
            <td id="pay_till">
              <img src={barcode} alt="штрихкод накладной" />
            </td>
          </tr>
        </tbody>
      </table>
      <table id="info">
        <tbody>
          <tr>
            <td>
              <ul id="receiver">
                <b>
                  <li>
                    Адрес поставки: Стрельна, ул. Нижняя Колония, д. 49Б
                    +79626803377
                  </li>
                  <li>
                    Поставщик: Индивидуальный Предприниматель Федюшин П.Д.
                  </li>
                </b>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
