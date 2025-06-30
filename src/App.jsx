import { Routes, Route } from "react-router-dom";
import Body from "./Body";
import Signup from "./Signup";
import Login from "./Login";
import Index from "./index.jsx";
import Profile from "./Profile.jsx";
import UpdateProfile from "./UpdateProfile.jsx";
import UpdatePassword from "./UpdatePassword.jsx";
import Settings from "./Settings.jsx";
import Feed from "./Feed.jsx";
import ShowSentProfile from "./ShowSentProfile.jsx";
import ShowReceivedProfile from "./ShowReceivedProfile.jsx";
import "./index.css";

import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/index" element={<Index />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/updateProfile" element={<UpdateProfile />} />
            <Route path="/updatePassword" element={<UpdatePassword />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/sentUserProfile" element={<ShowSentProfile />} />
            <Route
              path="/receivedUserProfile"
              element={<ShowReceivedProfile />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
