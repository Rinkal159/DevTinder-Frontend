import { useDispatch, useSelector } from "react-redux";
import ShowFeed from "./ShowFeed";
import Error from "./Error";

import deletReq from "./API_Calling/deleteReq";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ShowSentProfile() {
  const user = useSelector((state) => state.sendReq);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [err, setErr] = useState([]);

  async function deleteReq(status) {
    console.log(user.individual[0]);

    await deletReq(status, user.individual[0], dispatch, navigate, setErr);
  }

  return (
    <div>
      {/* Error */}
      {err.length > 0 && <Error err={err} setErr={setErr} />}

      <ShowFeed
        feedUsers={user.individual}
        sendIgnoreReq={deleteReq}
        ignore={"Delete"}
      />
    </div>
  );
}
