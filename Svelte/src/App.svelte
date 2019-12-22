<script>
  import Header from "./components/Header.svelte";
  import InvoiceTable from "./components/InvoiceTable/InvoiceTable.svelte";
  import Footer from "./components/Footer.svelte";
</script>

<style>
  :global(table) {
    font-size: 100%;
    border-collapse: collapse;
    border-spacing: none;
  }

  :global(body) {
    padding: calc(1em + 8px);

    font-size: 10pt;
    font-family: Arial, Verdana, sans-serif;
  }

  :global(h1) {
    margin: 0;
  }

  :global(table#header) {
    width: 100%;
    margin-bottom: 1ex;
  }

  :global(#header),
  :global(#header h1),
  :global(#pay_till) {
    font-size: 14pt;
    font-weight: bold;
  }

  :global(#pay_till) {
    font-size: 14pt;
    text-align: right;
  }

  :global(table#info) {
    width: 100%;
  }

  :global(td#course) {
    text-align: right;
    font-weight: bold;
    font-size: 11pt;
  }

  :global(ul#receiver),
  :global(ul#receiver li) {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  :global(ul) {
    list-style-type: disc;
    margin: 2ex 1em;
  }

  :global(table#order) {
    width: 100%;
  }

  :global(table#order td),
  :global(table#order th) {
    font-size: 9pt;
    border: 1px solid black;
    padding: 0.5ex 0.5em;
  }

  :global(table#order td) {
    text-align: right;
  }

  :global(table#order td.item-name) {
    text-align: left;
  }

  :global(table#order tr.total td) {
    border: none;
    font-weight: bold;
  }

  :global(table#order td.units) {
    text-align: center;
  }

  :global(#sum-names) {
    font-weight: bold;
    text-decoration: underline;
  }

  :global(table#subscripts) {
    width: 100%;
  }

  :global(table#subscripts td) {
    border-bottom: 1px solid black;
    width: 35%;
  }

  :global(table#subscripts th) {
    padding-left: 3em;
    text-align: left;
  }

  @media print {
    :global(.printHide) {
      display: none !important;
    }
  }
</style>

<main>
  <Header />
  <InvoiceTable />
  <Footer />
</main>
