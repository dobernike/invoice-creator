import React, { useState, useEffect } from "react";
import './InvoiceList.css';
import InvoiceItem from "./InvoiceItem/InvoiceItem";

export default function InvoiceList(props) {
  const [name, setName] = useState("");
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState("");
  const [rows, setRows] = useState([]);
  const [index, setIndex] = useState(1);
  const [total, setTotal] = useState([0]);

  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  useEffect(() => {
    const totalPrice = total.reduce(reducer);
    props.updateTotal(totalPrice);
    props.updateIndex(index - 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [total]);

  function onDelete(e) {
    e.target.parentNode.remove();
    setIndex(prevIndex => prevIndex - 1);

    const newTotal = total.filter((_, idx) => idx !== index);
    setTotal(newTotal);
  }

  function addRow() {
    if (name === "" || count === "" || price === "") { return; }

    setRows([
      ...rows,
      <InvoiceItem
        key={Math.random() + name}
        index={index}
        name={name}
        count={count}
        price={price}
        onDelete={onDelete}
      />
    ]);

    setTotal([...total, price * count]);
    setName("");
    setCount(1);
    setPrice("");
    setIndex(prevIndex => prevIndex + 1);
  }

  function changeStateHandler(e, state) { state(e.target.value); }

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
            style={{ width: "60px" }}
            placeholder="₽"
            value={price}
            onChange={e => changeStateHandler(e, setPrice)}
          />
        </td>
        <td>
          <button className="addBtn" onClick={addRow}>Добавить</button>
        </td>
      </tr>
    </>
  );
}
