import React from "react";
import './InvoiceItem.css';

export default function InvoiceItem({ index, name, count, price, onDelete }) {
  return (
    <tr>
      <td>{index}.</td>
      <td className="item-name">{name}</td>
      <td>{count}</td>
      <td className="units">шт.</td>
      <td className='price'>{(+price).toLocaleString()}</td>
      <td className='price'>{(price * count).toLocaleString()}</td>
      <td className="printHide delete" onClick={onDelete}>x</td>
    </tr>
  );
}
