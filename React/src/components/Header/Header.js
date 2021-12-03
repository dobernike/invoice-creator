import React, { useState, useEffect } from "react";

import { getRandomInt } from '../../utils/getRandomInt';
import { ReactComponent as BarcodeSvg } from "../../assets/barcode.svg";

const Header = () => {
  const [date, setDate] = useState(new Date().toLocaleDateString("ru"));
  const [invoiceNumber, setInvoiceNumber] = useState(
    getRandomInt(10000, 100000)
  );
  const [data, setData] = useState(date);

  useEffect(() => {
    document.title = `${date} накладная № ${invoiceNumber}`;
  }, [date, invoiceNumber]);

  const onChangeDate = e => {
    setDate(e.target.value);
    setData(e.target.value);
  };

  const onChangeNumber = e => {
    setInvoiceNumber(e.target.value);
    setData(e.target.value);
  };

  const getInput = state => (
    <input
      className="printHide"
      type="text"
      value={state}
      onChange={e => (state === date ? onChangeDate(e) : onChangeNumber(e))}
    />
  );

  return (
    <>
      <table id="header">
        <tbody>
          <tr>
            <td>
              <h1>
                Расходная накладная №&nbsp;
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => setData(invoiceNumber)}
                >
                  {invoiceNumber}&nbsp;
                </span>
                от&nbsp;
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => setData(date)}
                >
                  {date}
                </span>
                &nbsp;{getInput(data)}
              </h1>
            </td>
            <td id="pay_till">
              <BarcodeSvg />
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
                  <li>Адрес поставки: Адрес</li>
                  <li>Поставщик: Имя</li>
                </b>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Header;
