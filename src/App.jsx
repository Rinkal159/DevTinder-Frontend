import { Routes, Route } from "react-router-dom";
import Body from "./Body";
import Signup from "./Signup";
import Index from "./index.jsx";
import Profile from "./Profile.jsx";
import UpdateProfile from "./UpdateProfile.jsx";
import UpdateProfilePicture from "./UpdateProfilePicture.jsx";
import Settings from "./Settings.jsx";
import Feed from "./Feed.jsx";
import ShowSentProfile from "./ShowSentProfile.jsx";
import ShowReceivedProfile from "./ShowReceivedProfile.jsx";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import Existence from "./Existence.jsx";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/index" element={<Index />} />
          <Route path="/" element={<Body />}>
            <Route path="/existence" element={<Existence />} />
            <Route path="/createProfile" element={<Signup />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/updateProfile" element={<UpdateProfile />} />
            <Route
              path="/updateProfilePicture"
              element={<UpdateProfilePicture />}
            />
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
