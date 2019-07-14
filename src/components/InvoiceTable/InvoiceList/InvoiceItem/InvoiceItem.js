import React from "react";

export default function InvoiceItem({ index, name, count, price }) {
  return (
    <tr>
      <td>{index}.</td>
      <td className="item-name">{name}</td>
      <td>{count}</td>
      <td className="units">шт.</td>
      <td>{price}</td>
      <td>{price * count}</td>
    </tr>
  );
}
