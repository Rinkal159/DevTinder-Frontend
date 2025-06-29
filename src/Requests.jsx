import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addSendReqProfile } from "./features/sendReq/sendRequestSlice";
import { addReceivedReqProfile } from "./features/receivedReq/receivedReq";
import Identity from "./Identity";

export default function Requests() {
  const receivedUsers = useSelector((state) => state.sendReq); //i sent the request
  const sentUsers = useSelector((state) => state.receivedReq); //they sent the request
  const connections = useSelector((state) => state.connections); //connections

  const [push, setPush] = useState(true);
  const [pull, setPull] = useState(false);
  const [merge, setMerge] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function showProfile(user) {
    dispatch(addSendReqProfile([user])); //to store it as array of object that's why user in square bracket

    return navigate("/sentUserProfile");
  }

  function showUserProfile(user) {
    dispatch(addReceivedReqProfile([user]));

    return navigate("/receivedUserProfile")
  }



  useEffect(() => {}, []);

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
    <div className="h-screen pt-4">
      <div className=" grid grid-cols-[_1fr_1fr_1fr] contentcenter  h-full bg-black">
        {/* push */}
        <div
          className={`${
            push ? "bg-gradient-to-b from-white to-green-500" : "bg-black"
          } center-the-heading`}
        >
          <h1
            onClick={showPush}
            className={`cols ${
              push ? "underline font-semibold text-green-800" : ""
            }`}
          >
            Pushed Rrequest
          </h1>
          {push && (
            <div>
              <div className="req-container">
                {receivedUsers.bunch && receivedUsers.bunch.length > 0 ? (
                  receivedUsers.bunch.map((user, i) => (

                    <Identity className="req" key={i}
                      user={user}
                      showUserProfile={showProfile}

                    />
                  ))
                ) : (
                  <p className="text-white">Not sent request yet! Send Requests, Make Connections!!</p>
                )}
              </div>
            </div>
          )}
        </div>

        {/* pull */}
        <div
          className={`${
            pull ? "bg-gradient-to-b from-white to-blue-400 to-80%" : "bg-black"
          } center-the-heading`}
        >
          <h1
            onClick={showPull}
            className={`cols ${
              pull ? "underline font-semibold  text-blue-700" : ""
            }`}
          >
            Pulled Rrequest
          </h1>
          {pull && (
            <div>
              {sentUsers.bunch && sentUsers.bunch.length > 0 ? (
                <div className="flex flex-col gap-4">
                  {sentUsers.bunch.map((user, i) => (
                    <div key={i} className="flex flex-col">
                      <Identity 
                        user={user}
                        showUserProfile={showUserProfile}
                      />
                      <div className="buttons justify-end mr-4">
                        <button className="ignored-pull">
                          <i className="fa-solid fa-xmark"></i>
                        </button>
                        <button className="interested-pull">
                          <i className="fa-solid fa-check"></i>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p>None has sent you Request! Instead send requests, make connections!!</p>
              )}
            </div>
          )}
        </div>

        {/* merge */}
        <div
          className={`${
            merge
              ? "bg-gradient-to-b from-white to-red-400 "
              : " text-red-700 border-red-300"
          } center-the-heading`}
        >
          <h1
            onClick={showMerge}
            className={`cols ${
              merge ? "underline font-semibold text-red-600" : ""
            }`}
          >
            Merged Rrequest
          </h1>
          {merge && (
            <div>
              {
                connections.bunch && connections.bunch.length > 0 ? (
                  <div>
                  {
                    connections.bunch.map((con, i) => (
                      <Identity key={i}
                      user={con}
                      />
                    ))
                  }
                  </div>
                ) : (
                  <p></p>
                )
              }
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
