import React, { useState, useEffect, useRef, memo } from "react";

import InvoiceItem from "./InvoiceItem/InvoiceItem";

import "./InvoiceList.css";

const InvoiceList = memo(props => {
  const [rows, setRows] = useState([]);
  const [index, setIndex] = useState(1);
  const [total, setTotal] = useState([0]);

  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  const nameRef = useRef();
  const countRef = useRef();
  const priceRef = useRef();

  useEffect(() => {
    nameRef.current.focus();

    const totalPrice = total.reduce(reducer);

    props.onUpdateTotal(totalPrice);
    props.onUpdateIndex(index - 1);
  }, [index, props, total]);

  const onDelete = e => {
    e.target.parentNode.remove();
    setIndex(prevIndex => prevIndex - 1);

    const newTotal = total.filter((_, idx) => idx !== index);
    setTotal(newTotal);
  };

  const addRow = () => {
    const name = nameRef.current.value;
    const count = countRef.current.value;
    const price = priceRef.current.value;

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
        onDelete={onDelete}
      />
    ]);

    setTotal([...total, price * count]);
    setIndex(prevIndex => prevIndex + 1);

    nameRef.current.value = "";
    countRef.current.value = 1;
    priceRef.current.value = "";
  };

  const onPressHandler = e => {
    if (e.key === "Enter") {
      addRow();
    }
  };

  return (
    <>
      {rows}
      <tr className="printHide">
        <td className="inputs-data" colSpan="5" style={{ textAlign: "left" }}>
          <input
            type="text"
            style={{ width: "300px", marginRight: "10px" }}
            placeholder="название"
            onKeyPress={onPressHandler}
            ref={nameRef}
          />
          <input
            type="number"
            style={{ width: "30px", marginRight: "10px" }}
            placeholder="1"
            defaultValue="1"
            onKeyPress={onPressHandler}
            ref={countRef}
          />
          <input
            type="number"
            min="0"
            style={{ width: "60px" }}
            placeholder="₽"
            onKeyPress={onPressHandler}
            ref={priceRef}
          />
        </td>
        <td>
          <button className="addBtn" onClick={addRow}>
            Добавить
          </button>
        </td>
      </tr>
    </>
  );
});

export default InvoiceList;
