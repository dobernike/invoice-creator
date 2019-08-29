import React, { useState, useEffect } from "react";

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function Header() {
  const [date, setDate] = useState(new Date().toLocaleDateString("ru"));
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
              <svg
                xmlns='http://www.w3.org/2000/svg'
                x='0'
                y='0'
                version='1.1'
                viewBox='0 0 178 70'
                width="178px"
                height="70px"
                alt="штрихкод накладной"
              >
                <path fill='#fff' d='M0 0H178V70H0z' />
                <g transform='translate(10 10)'>
                  <path d='M0 0H4V50H0z' />
                  <path d='M6 0H8V50H6z' />
                  <path d='M12 0H18V50H12z' />
                  <path d='M22 0H30V50H22z' />
                  <path d='M32 0H34V50H32z' />
                  <path d='M36 0H38V50H36z' />
                  <path d='M44 0H46V50H44z' />
                  <path d='M52 0H54V50H52z' />
                  <path d='M60 0H64V50H60z' />
                  <path d='M66 0H72V50H66z' />
                  <path d='M74 0H76V50H74z' />
                  <path d='M78 0H86V50H78z' />
                  <path d='M88 0H94V50H88z' />
                  <path d='M96 0H98V50H96z' />
                  <path d='M102 0H106V50H102z' />
                  <path d='M110 0H114V50H110z' />
                  <path d='M116 0H122V50H116z' />
                  <path d='M124 0H130V50H124z' />
                  <path d='M132 0H136V50H132z' />
                  <path d='M142 0H148V50H142z' />
                  <path d='M150 0H152V50H150z' />
                  <path d='M154 0H158V50H154z' />
                </g>
              </svg>
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
