import React, { useState } from "react";
import LaunchTimer from "./components/Launcher/LaunchTimer";
import Header from "./components/header/Header";
import Router from "./routes/Router";
import Footer from "./components/footer/Footer";
import WhatsApp from "./common/WhatsApp";
import "./App.css";

function App() {
  const [launchTimeReached, setLaunchTimeReached] = useState(false);

  const handleLaunchTimeReached = () => {
    setLaunchTimeReached(true);
  };

  return (
    <>
      {!launchTimeReached ? (
        <LaunchTimer onLaunchTimeReached={handleLaunchTimeReached} />
      ) : (
        <>
          <>
            <Header />

            <main>
              <WhatsApp />
              <Router />
            </main>

            <Footer />
          </>
        </>
      )}
    </>
  );
}

export default App;
