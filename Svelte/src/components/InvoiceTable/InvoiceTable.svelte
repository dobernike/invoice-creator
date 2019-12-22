<script>
  import { goodsCount, total } from "../../stores";
  import { DELIVERY_PRICE, TO_DELIVERY_FREE } from "../../contants";
  import InvoiceList from "./InvoiceList/InvoiceList.svelte";

  let delivery = true;

  const handleDeleteDelivery = () => {
    delivery = false;
    total.update(n => n - DELIVERY_PRICE);
  };

  const handleUpdateTotal = price => {
    if (price < TO_DELIVERY_FREE && price !== 0) {
      delivery = true;
      price += DELIVERY_PRICE;
    } else {
      delivery = false;
    }

    total.set(price);
  };
</script>

<style>
  .delete.delete--delivery:focus,
  .delete.delete--delivery:hover {
    opacity: 0.8;
    background-color: inherit;
    cursor: pointer;
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
          on:click={handleDeleteDelivery}>
          x
        </td>
      </tr>
    {/if}

    <tr class="total">
      <td colSpan="5">Итого:</td>
      <td class="price">{$total.toLocaleString()}</td>
    </tr>
  </tfoot>
  <tbody>
    <InvoiceList onUpdateTotal={handleUpdateTotal} />
  </tbody>
</table>
