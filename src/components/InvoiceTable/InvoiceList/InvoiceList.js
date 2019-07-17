import React, { useState } from "react";
import InvoiceItem from "./InvoiceItem/InvoiceItem";

export default function InvoiceList() {
  const [name, setName] = useState("");
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState("");
  const [rows, setRows] = useState([]);
  const [index, setIndex] = useState(1);

  function addRow(e) {
    if (name === "" || count === "" || price === "") {
      return;
    }

    setRows([
      ...rows,
      <InvoiceItem
        key={Math.random() + name}
        index={index}
        name={name}
        count={count}
        price={price}
      />
    ]);

    setIndex(index + 1);
    setName("");
    setCount(1);
    setPrice("");
  }

  function changeStateHandler(e, state) {
    state(e.target.value);
  }

  return (
    <>
      {rows}
      <tr className="printHide">
        <td className="inputs-data" colSpan="5" style={{ textAlign: "left" }}>
          <input
            type="text"
            style={{ width: "300px", marginRight: "10px" }}
            placeholder="название"
            value={name}
            onChange={e => changeStateHandler(e, setName)}
            autoFocus
          />
          <input
            type="number"
            style={{ width: "30px", marginRight: "10px" }}
            placeholder="1"
            value={count}
            onChange={e => changeStateHandler(e, setCount)}
          />
          <input
            type="number"
            style={{ width: "60px"}}
            placeholder="₽"
            value={price}
            onChange={e => changeStateHandler(e, setPrice)}
          />
        </td>
        <td>
          <button onClick={addRow}>Добавить</button>
        </td>
      </tr>
    </>
  );
}
