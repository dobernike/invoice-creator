import React from "react";
import './InvoiceItem.css';

export default function InvoiceItem({ index, name, count, price }) {
  function onDelete(e) {
    e.target.parentNode.remove();
  }

  return (
    <tr>
      <td>{index}.</td>
      <td className="item-name">{name}</td>
      <td>{count}</td>
      <td className="units">шт.</td>
      <td>{price}</td>
      <td>{price * count}</td>
      <td className="printHide delete" onClick={onDelete.bind(this)}>x</td>
    </tr>
  );
}
