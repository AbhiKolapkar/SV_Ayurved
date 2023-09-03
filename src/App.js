import React from "react";
import Header from "./components/header/Header";
import Router from "./routes/Router";
import Footer from "./components/footer/Footer";
import './App.css'

function App() {
  return (
    <>
      <Header />

      <main>
        <Router />
      </main>

      <Footer />
    </>
  );
}

export default App;
