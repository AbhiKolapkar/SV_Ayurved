import React, { useEffect, useState } from "react";
import Header from "./components/header/Header";
import Router from "./routes/Router";
import Footer from "./components/footer/Footer";
import WhatsApp from "./common/WhatsApp";
import Fallback from "./common/Fallback";

import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate a delay for demonstration purposes
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Adjust the delay time as needed
  }, []);

  return (
    <>
      {isLoading ? (
        <Fallback />
      ) : (
        <>
          <Header />

          <main>
            <WhatsApp />
            <Router />
          </main>

          <Footer />
        </>
      )}
    </>
  );
}

export default App;
