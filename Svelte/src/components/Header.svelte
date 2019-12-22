<script>
  import { afterUpdate } from "svelte";

  import Barcode from "./Barcode.svelte";
  import { getRandomInt } from "../utils/getRandomInt";

  let date = new Date().toLocaleDateString("ru");
  let invoice = getRandomInt(10000, 100000);

  afterUpdate(() => {
    document.title = `${date} накладная № ${invoice}`;
  });

  let isInputDate = true;
</script>

<style>
  span {
    cursor: pointer;
  }
</style>

<table id="header">
  <tbody>
    <tr>
      <td>
        <h1>
          Расходная накладная №&nbsp;
          <span on:click={() => (isInputDate = false)}>{invoice}&nbsp;</span>
          от&nbsp;
          <span on:click={() => (isInputDate = true)}>{date}</span>
          &nbsp;
          {#if isInputDate}
            <input class="printHide" type="text" bind:value={date} />
          {:else}
            <input class="printHide" type="text" bind:value={invoice} />
          {/if}

        </h1>
      </td>
      <td id="pay_till">
        <Barcode />
      </td>
    </tr>
  </tbody>
</table>
<table id="info">
  <tbody>
    <tr>
      <td>
        <ul id="receiver">
          <b>
            <li>Адрес поставки: Адрес</li>
            <li>Поставщик: Имя</li>
          </b>
        </ul>
      </td>
    </tr>
  </tbody>
</table>
