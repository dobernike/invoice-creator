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

Footer.whyDidYouRender = true;

export default Footer;
// TODO:
// ADD SW?
// CREATE PWA to desktop and mobile
// Add to title price and first item name
