import React, { useEffect } from "react";
import Header from "./components/header/Header";
import Router from "./routes/Router";
import Footer from "./components/footer/Footer";
import WhatsApp from "./common/WhatsApp";
import "./App.css";

function App() {
  useEffect(() => {
    // Initialize Google Analytics
    window.gtag('config', 'G-VV0WG6ZDMJ')

    // Track pageview on initial load
    window.gtag('event', 'page_view')
  }, [])

  return (
    <>
      <Header />

      <main>
        <WhatsApp />
        <Router />
      </main>

      <Footer />
    </>
  );
}

export default App;
