import { useDispatch, useSelector } from "react-redux";
import ShowFeed from "./ShowFeed";
import Error from "./Error";

import deletReq from "./API_Calling/deleteReq";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export default function ShowSentProfile() {
  const {getAccessTokenSilently} = useAuth0();

  const user = useSelector((state) => state.sendReq);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [err, setErr] = useState([]);

  async function deleteReq(status) {
    const token = await getAccessTokenSilently();

    await deletReq(token,status, user.individual[0]._id, dispatch, navigate, setErr);
  }

  return (
    <div className="h-screen">
      <ShowFeed
        feedUsers={user.individual}
        sendIgnoreReq={deleteReq}
        ignore={"Delete"}
      />

      {/* Error */}
      {err.length > 0 && <Error err={err} setErr={setErr} />}
    </div>
  );
}
