<script>
  import { afterUpdate } from "svelte";
  import { goodsCount } from "../../../stores";
  import InvoiceItem from "./InvoiceItem/InvoiceItem.svelte";

  export let onUpdateTotal;

  let name = "";
  let count = 1;
  let price = "";

  let total = [0];
  let rows = [];

  let ref;

  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  afterUpdate(() => {
    const totalPrice = total.reduce(reducer);

    onUpdateTotal(totalPrice);
    goodsCount.set(rows.length);
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
    rows = [...rows.slice(0, -1)];
    total = [...total.slice(0, -1)];
  };

  const handleAddRow = () => {
    if (!isValid()) return;

    rows = [...rows, { name, count, price, handleDelete }];
    total = [...total, price * count];

    name = "";
    count = 1;
    price = "";

    ref.focus();
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

{#each rows as { name, name, count, price, onDelete }, idx}
  <InvoiceItem index={idx + 1} {name} {count} {price} onDelete={handleDelete} />
{/each}

<tr class="printHide">
  <td class="inputs-data" colspan="5">
    <input
      type="text"
      class="name"
      placeholder="название"
      on:keypress={handleKeyPress}
      bind:value={name}
      bind:this={ref} />
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
