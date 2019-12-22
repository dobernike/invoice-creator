<script>
  import { goodsCount, total } from "../stores";
  import numberToString from "../utils/numberToString";
</script>

<style>
  #sum-names::first-letter {
    text-transform: capitalize;
  }

  .print-button {
    display: flex;
    margin: 2rem auto;
  }
</style>

<p>
  Всего наименований {$goodsCount} на сумму
  <span class="price">{$total.toLocaleString()}</span>
  руб.
</p>
<p id="sum-names">{numberToString($total)}</p>

<table id="subscripts">
  <tbody>
    <tr>
      <th>Отпустил</th>
      <td />
      <th>Получил</th>
      <td />
    </tr>
  </tbody>
</table>
<button class="print-button printHide" on:click={window.print.bind(null)}>
  Печать
</button>
