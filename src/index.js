import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme/theme";
import Fallback from "./common/Fallback";
import { ToastContainer } from "react-toastify";

import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import ScrollToTop from "./common/ScrollToTop";

const App = lazy(() => import("./App"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Suspense fallback={<Fallback />}>
            <ToastContainer />
            <App />
          </Suspense>
        </ThemeProvider>
      </ScrollToTop>
    </BrowserRouter>
  </React.StrictMode>
);
