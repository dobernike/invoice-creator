import React from "react";
import Header from "./components/Header/Header";
import InvoiceTable from "./components/InvoiceTable/InvoiceTable";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <>
      <Header />
      <InvoiceTable />
      <Footer />
    </>
  );
}
