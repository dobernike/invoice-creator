import React from "react";
import './Footer.css';

export default function Footer() {
  return (
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
}

// TODO: 
// ADD button to print();
// ADD new title of document
// ADD SW? 
// CREATE PWA to desktop and mobile