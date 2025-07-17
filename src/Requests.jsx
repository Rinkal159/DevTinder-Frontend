import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addSendReqProfile } from "./features/sendReq/sendRequestSlice";
import { addReceivedReqProfile } from "./features/receivedReq/receivedReq";
import Identity from "./Identity";
import Error from "./Error";

import acceptOrRejectReq from "./API_Calling/acceptOrRejectReq";
import { useAuth0 } from "@auth0/auth0-react";

export default function Requests() {
  const { getAccessTokenSilently } = useAuth0();
  const receivedUsers = useSelector((state) => state.sendReq); //i sent the request
  const sentUsers = useSelector((state) => state.receivedReq); //they sent the request
  const connections = useSelector((state) => state.connections); //connections

  const [push, setPush] = useState(true);
  const [pull, setPull] = useState(false);
  const [merge, setMerge] = useState(false);

  const [err, setErr] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function showSendProfile(user) {
    dispatch(addSendReqProfile([user])); //to store it as array of object that's why user in square bracket

    return navigate("/sentUserProfile");
  }

  function showReceivedProfile(user) {
    dispatch(addReceivedReqProfile([user]));

    return navigate("/receivedUserProfile");
  }

  // accept or reject directly in the feed
  async function aORr(status, user) {
    const token = await getAccessTokenSilently();
    await acceptOrRejectReq(token, status, user, dispatch, setErr, navigate);
  }

  function showPush() {
    setPull(false);
    setMerge(false);
    setPush(true);
  }
  function showPull() {
    setPush(false);
    setMerge(false);
    setPull(true);
  }
  function showMerge() {
    setPush(false);
    setPull(false);
    setMerge(true);
  }
  return (
    <div>
      {/* Error */}
      {err.length > 0 && <Error err={err} setErr={setErr} />}

      <div className="req-cont">
        <div className="req-all">
          {/* PUSH */}
          <div
            className={`${
              push ? "push-gradient" : "bg-defaultLight"
            } center-the-heading`}
          >
            <div className="flex flex-col items-center">
              <h1
                onClick={showPush}
                className={`cols group ${
                  push ? "push-heading" : "text-defaultDark"
                }`}
              >
                Pushed Request
                {push && (
                  <span
                    className={`span-underline ${
                      push && "scale-x-100"
                    } bg-reqPushHeading`}
                  ></span>
                )}
              </h1>
              {receivedUsers.bunch && (
                <span
                  className={`count-reqs ${
                    push ? "text-reqPushHeading" : "text-defaultDark"
                  } `}
                >
                  {receivedUsers.bunch.length}
                </span>
              )}
            </div>
            {push && (
              <div>
                <div className="req-container">
                  {receivedUsers.bunch && receivedUsers.bunch.length > 0 ? (
                    receivedUsers.bunch.map((user, i) => (
                      <Identity
                        key={i}
                        user={user}
                        showUserProfile={showSendProfile}
                      />
                    ))
                  ) : (
                    <p className="noReqText">
                      Not sent request yet! Send Requests, Make Connections!!
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* PULL */}
          <div
            className={`${
              pull ? "pull-gradient" : "bg-defaultLight"
            } center-the-heading`}
          >
            <div className="flex flex-col items-center">
              <h1
                onClick={showPull}
                className={`cols group ${
                  pull ? "pull-heading" : "text-defaultDark"
                }`}
              >
                Pulled Rrequest
                {pull && (
                  <span
                    className={`span-underline ${
                      pull && "scale-x-100"
                    } bg-reqPullHeading`}
                  ></span>
                )}
              </h1>
              {sentUsers.bunch && (
                <span
                  className={`count-reqs ${
                    pull ? "text-reqPullHeading" : "text-defaultDark"
                  } `}
                >
                  {sentUsers.bunch.length}
                </span>
              )}
            </div>
            {pull && (
              <div>
                {sentUsers.bunch && sentUsers.bunch.length > 0 ? (
                  <div className="flex flex-col gap-y-4">
                    {sentUsers.bunch.map((user, i) => (
                      <div className="flex flex-col">
                        <Identity
                          key={i}
                          user={user}
                          showUserProfile={showReceivedProfile}
                        />
                        <div className="buttons justify-end mr-2">
                          <button
                            onClick={() => aORr("Reject", user._id)}
                            className="ignored-pull"
                          >
                            <i className="fa-solid fa-xmark"></i>
                          </button>
                          <button
                            onClick={() => aORr("Accept", user._id)}
                            className="interested-pull"
                          >
                            <i className="fa-solid fa-check"></i>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="noReqText">
                    None has sent you Request! Instead send requests, make
                    connections!!
                  </p>
                )}
              </div>
            )}
          </div>

          {/* MERGE */}
          <div
            className={`${
              merge ? "merge-gradient " : "bg-defaultLight"
            }  center-the-heading`}
          >
            <div className="flex flex-col items-center relative">
              <h1
                onClick={showMerge}
                className={`cols group ${
                  merge ? "merge-heading" : "text-defaultDark"
                }`}
              >
                Merged Request
                {merge && (
                  <span
                    className={`span-underline ${
                      merge && "scale-x-100"
                    } bg-reqMergeHeading`}
                  ></span>
                )}
              </h1>
              {connections.bunch && (
                <span
                  className={`count-reqs ${
                    merge ? "text-reqMergeHeading" : "text-defaultDark"
                  } `}
                >
                  {connections.bunch.length}
                </span>
              )}
            </div>
            {merge && (
              <div>
                <div className="req-container ">
                  {connections.bunch && connections.bunch.length > 0 ? (
                    connections.bunch.map((con, i) => (
                      <Identity key={i} user={con} />
                    ))
                  ) : (
                    <p className="noReqText">You have zero connections.</p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
