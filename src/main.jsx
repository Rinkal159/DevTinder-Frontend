import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store, persister } from "./app/store.js";
import { PersistGate } from "redux-persist/integration/react";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persister}>
        <Auth0Provider
          domain="dev-e0ha8nb2m6yi1las.us.auth0.com"
          clientId="Cd5cdE8IvZJRVmdLcCDKmD45bal9YsGV"
          authorizationParams={{
            redirect_uri: "http://localhost:5173/existence",
            audience: "https://dev-e0ha8nb2m6yi1las.us.auth0.com/api/v2/",
            scope: "openid profile email",
          }}
          cacheLocation="localstorage"
          useRefreshTokens={true}
        >
          <App />
        </Auth0Provider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
