import React from "react";

import "./InvoiceItem.css";

const InvoiceItem = ({ id, index, name, count, price, onDelete }) => (
  <tr>
    <td>{index}.</td>
    <td className="item-name">{name}</td>
    <td>{count}</td>
    <td className="units">шт.</td>
    <td className="price">{(+price).toLocaleString()}</td>
    <td className="price">{(price * count).toLocaleString()}</td>
    <td className="printHide delete" onClick={() => onDelete(id)}>
      x
    </td>
  </tr>
);

export default InvoiceItem;
