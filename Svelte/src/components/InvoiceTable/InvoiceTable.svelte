<script>
  import InvoiceList from "./InvoiceList/InvoiceList.svelte";
  import numberToString from "../../utils/numberToString";

  const TO_DELIVERY_FREE = 3000;
  const DELIVERY_PRICE = 300;

  let delivery = true;
  let total = 0;
  let goodsCount = 0;

  const handleDeliveryDelete = () => {
    delivery = false;
    total = total - DELIVERY_PRICE;
  };

  const handleUpdateTotal = price => {
    if (price < TO_DELIVERY_FREE && price !== 0) {
      delivery = true;
      price += DELIVERY_PRICE;
    } else {
      delivery = false;
    }

    total = price;
  };

  const handleUpdateGoodsCount = count => (goodsCount = count);
</script>

<style>
  #sum-names::first-letter {
    text-transform: capitalize;
  }

  .delete.delete--delivery:focus,
  .delete.delete--delivery:hover {
    opacity: 0.8;
    background-color: inherit;
  }
</style>

<table id="order">
  <thead>
    <tr>
      <th>№</th>
      <th>Товар</th>
      <th>Кол.</th>
      <th>Ед.</th>
      <th>Цена (руб)</th>
      <th>Сумма (руб)</th>
    </tr>
  </thead>
  <tfoot>
    {#if delivery}
      <tr class="total">
        <td colspan="5">Доставка:</td>
        <td>{DELIVERY_PRICE}</td>
        <td
          class="printHide delete delete--delivery"
          on:click={handleDeliveryDelete}>
          x
        </td>
      </tr>
    {/if}
    <tr class="total">
      <td colSpan="5">Итого:</td>
      <td class="price">{total.toLocaleString()}</td>
    </tr>
  </tfoot>
  <tbody>
    <InvoiceList
      onUpdateTotal={handleUpdateTotal}
      onUpdateGoodsCount={handleUpdateGoodsCount} />
  </tbody>
</table>
<p>
  Всего наименований {goodsCount} на сумму
  <span class="price">&nbsp;{total.toLocaleString()}</span>
  руб.
</p>
<p id="sum-names">{numberToString(total)}</p>
