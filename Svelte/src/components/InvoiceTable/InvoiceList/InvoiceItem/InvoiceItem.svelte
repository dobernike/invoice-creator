<script>
  export let index;
  export let name;
  export let count;
  export let price;
  export let onDelete;
</script>

<style>
  .delete {
    text-align: center !important;

    visibility: hidden;
    text-transform: uppercase;
    font-weight: bold;
    color: brown;

    cursor: pointer;
  }

  .delete:focus,
  .delete:hover {
    background-color: aquamarine;
  }
</style>

<tr>
  <td>{index}.</td>
  <td class="item-name">{name}</td>
  <td>{count}</td>
  <td class="units">шт.</td>
  <td class="price">{(+price).toLocaleString()}</td>
  <td class="price">{(price * count).toLocaleString()}</td>
  <td class="printHide delete" on:click={onDelete}>x</td>
</tr>
