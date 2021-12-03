import React from "react";

import "./Footer.css";

const Footer = () => (
  <>
    <table id="subscripts">
      <tbody>
        <tr>
          <th>Отпустил</th>
          <td>&nbsp;</td>
          <th>Получил</th>
          <td>&nbsp;</td>
        </tr>
      </tbody>
    </table>
    <button className="printBtn printHide" onClick={() => window.printpage()}>
      Печать
    </button>
  </>
);

export default Footer;
