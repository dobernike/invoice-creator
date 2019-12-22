import React from "react";

import "./InvoiceItem.css";

const InvoiceItem = ({ index, name, count, price, onDelete }) => (
  <tr>
    <td>{index}.</td>
    <td className="item-name">{name}</td>
    <td>{count}</td>
    <td className="units">шт.</td>
    <td className="price">{(+price).toLocaleString()}</td>
    <td className="price">{(price * count).toLocaleString()}</td>
    <td className="printHide delete" onClick={onDelete}>
      x
    </td>
  </tr>
);

InvoiceItem.whyDidYouRender = true;

export default InvoiceItem;
