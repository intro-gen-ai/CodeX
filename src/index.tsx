import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {ChakraProvider, extendTheme} from "@chakra-ui/react";

const rootElement = document.createElement("div");
rootElement.id = "codetracer-key-page";
document.body.appendChild(rootElement);


// @ts-ignore
chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true }).catch((error) => console.error(error));

const root = ReactDOM.createRoot(rootElement);
const theme = extendTheme({
    styles: {
        global: () => ({
            body: {
                bg: 'black',
            },
        }),
    },
});

root.render(
  <React.StrictMode>
      <ChakraProvider theme={theme}>
          <App />
      </ChakraProvider>
  </React.StrictMode>
);
