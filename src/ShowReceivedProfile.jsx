import { useDispatch, useSelector } from "react-redux";
import ShowFeed from "./ShowFeed";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Error from "./Error";

import acceptOrRejectReq from "./API_Calling/acceptOrRejectReq";
import { useAuth0 } from "@auth0/auth0-react";

export default function ShowReceivedProfile() {
  const {getAccessTokenSilently} = useAuth0();
  const user = useSelector((state) => state.receivedReq);

  const [err, setErr] = useState([]);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // to accept or reject the individual request
  async function reviewReq(status) {
    const token = await getAccessTokenSilently();

    await acceptOrRejectReq(
      token,
      status,
      user.individual[0]._id,
      dispatch,
      setErr,
      navigate
    );
  }

  return (
    <div>
      

      <ShowFeed
        feedUsers={user.individual}
        sendIgnoreReq={reviewReq}
        sendInterestedReq={reviewReq}
        ignore={"Reject"}
        interested={"Accept"}
      />

      {/* Error */}
      {err.length > 0 && <Error err={err} setErr={setErr} />}
    </div>
  );
}
