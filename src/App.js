import React, { useEffect } from "react";
import ReactGA from "react-ga4";
import Header from "./components/header/Header";
import Router from "./routes/Router";
import Footer from "./components/footer/Footer";
import WhatsApp from "./common/WhatsApp";
import InitializeGoogleAnalytics from "./google-analytics";
import "./App.css";

function App() {
  useEffect(() => {
    InitializeGoogleAnalytics();
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname + window.location.search,
      title: window.location.pathname + window.location.search,
    });
  }, []);
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
