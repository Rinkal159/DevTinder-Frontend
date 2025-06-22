import { Routes, Route } from "react-router-dom";
import Body from "./Body";
import Signup from "./Signup";
import Login from "./Login";
import Index from "./index.jsx";
import Dashboard from "./dashboard.jsx";
import Profile from "./Profile.jsx";
import Settings from "./Settings.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./app/store.js";

export default function App() {
  return (
    <div>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/index" element={<Index />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/settings" element={<Settings/>}/>
          </Route>
        </Routes>
      </Provider>
    </div>
  );
}
