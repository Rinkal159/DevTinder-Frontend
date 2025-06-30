import { useDispatch, useSelector } from "react-redux";
import ShowFeed from "./ShowFeed";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Error from "./Error";

import acceptOrRejectReq from "./API_Calling/acceptOrRejectReq";

export default function ShowReceivedProfile() {
  const user = useSelector((state) => state.receivedReq);

  const [err, setErr] = useState([]);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // to accept or reject the individual request
  async function reviewReq(status) {
    await acceptOrRejectReq(
      status,
      user.individual[0],
      dispatch,
      setErr,
      navigate
    );
  }

  return (
    <div>
      {/* Error */}
      {err.length > 0 && <Error err={err} setErr={setErr} />}

      <ShowFeed
        feedUsers={user.individual}
        sendIgnoreReq={reviewReq}
        sendInterestedReq={reviewReq}
        ignore={"Reject"}
        interested={"Accept"}
      />
    </div>
  );
}
