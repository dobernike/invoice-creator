<script>
  import { afterUpdate } from "svelte";
  import InvoiceItem from "./InvoiceItem/InvoiceItem.svelte";

  export let onUpdateTotal;
  export let onUpdateGoodsCount;

  let name = "";
  let count = 1;
  let price = "";

  let index = 1;

  let total = [0];
  let rows = [];

  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  afterUpdate(() => {
    const totalPrice = total.reduce(reducer);

    onUpdateTotal(totalPrice);
    onUpdateGoodsCount(index - 1);
  });

  const handleKeyPress = e => {
    if (e.key === "Enter") handleAddRow();
  };

  const isValid = () =>
    name !== "" &&
    count !== "" &&
    count >= 1 &&
    typeof count === "number" &&
    price !== "" &&
    price >= 0 &&
    typeof price === "number";

  const handleDelete = e => {
    e.target.parentNode.remove();
    index = index - 1;

    const newTotal = total.filter((_, idx) => idx !== index);
    setTotal(newTotal);
  };

  const handleAddRow = () => {
    if (!isValid()) return;

    rows = [...rows, { index, name, count, price, handleDelete }];

    total = [...total, price * count];
    index += 1;

    name = "";
    count = 1;
    price = "";
  };
</script>

<style>
  .inputs-data {
    text-align: left !important;
  }

  .name {
    width: 300px;
    margin-right: 10px;
  }

  .count {
    width: 40px;
    margin-right: 10px;
  }

  .price {
    width: 60px;
  }

  :global(tr:nth-last-child(2) .delete) {
    visibility: visible;
    border: 1px solid black;
  }

  .addBtn {
    cursor: pointer;
  }

  .addBtn:active {
    opacity: 0.8;
  }
</style>

{#each rows as { name, index, name, count, price, onDelete }}
  <InvoiceItem {index} {name} {count} {price} onDelete={handleDelete} />
{/each}

<tr class="printHide">
  <td class="inputs-data" colspan="5">
    <input
      type="text"
      class="name"
      placeholder="название"
      on:keypress={handleKeyPress}
      bind:value={name} />
    <input
      type="number"
      class="count"
      placeholder="1"
      on:keypress={handleKeyPress}
      bind:value={count} />
    <input
      type="number"
      min="0"
      class="price"
      placeholder="₽"
      on:keypress={handleKeyPress}
      bind:value={price} />
  </td>
  <td>
    <button class="addBtn" on:click={handleAddRow}>Добавить</button>
  </td>
</tr>
