import { useDispatch, useSelector } from "react-redux";
import ShowFeed from "./ShowFeed";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import acceptOrRejectReq from "./API_Calling/acceptOrRejectReq";

export default function ShowSentProfile() {
  const user = useSelector((state) => state.receivedReq);

  const [err, setErr] = useState([]);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // to accept or reject the individual request
  async function reviewReq(status) {
    await acceptOrRejectReq(status, user.individual[0]._id, dispatch, navigate, setErr)
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

      {/* error */}
      {err.length > 0 && (
        <div className="outer-error">
          <div className="inner-error">
            <button className="close-btn" onClick={() => setErr([])}>
              <i class="fa-solid fa-xmark"></i>
            </button>
            <h2 className="err-heading">Error</h2>
            <ul>
              {err.map((li, i) => (
                <li className="errors" key={i}>
                  {li}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
