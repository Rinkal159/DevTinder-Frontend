import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ShowFeed from "./ShowFeed";
import Requests from "./Requests";
import "./index.css";
import Error from "./Error";

import sendInterestedOrIgnoreReq from "./API_Calling/sendInterestedOrIgnoreReq";
import getMyFeed from "./API_Calling/getFeed";
import getMySentReq from "./API_Calling/getMySentReq";
import getMyReceivedReq from "./API_Calling/getMyReceivedReq";
import getMyConnections from "./API_Calling/getMyConnections";

export default function Feed() {
  const feedUsers = useSelector((state) => state.feed);

  const [load, setLoad] = useState(true);
  const [err, setErr] = useState([]);

  const dispatch = useDispatch();

  // send request when hitting interested or ignore button
  async function sendReq(status) {
    await sendInterestedOrIgnoreReq(status, feedUsers[0]._id, dispatch, setErr);
  }

  // get the feed
  async function getFeed() {
    await getMyFeed(dispatch, setLoad, setErr);
  }

  // get all the sent requests
  async function getSentReq() {
    await getMySentReq(dispatch, setErr);
  }

  //get all the received reqeuests
  async function getReceivedReq() {
    await getMyReceivedReq(dispatch, setErr);
  }

  async function getConnections() {
    await getMyConnections(dispatch, setErr);
  }

  useEffect(() => {
    if (feedUsers && feedUsers.length > 0) {
      setLoad(false);
      return;
    }

    getFeed();

    getReceivedReq();

    getSentReq();

    getConnections();
  }, []);

  return (
    <div className=" pb-4 grid grid-cols-[_1fr_1.7fr] bg-white ">
      {/* Error */}
      {err.length > 0 && <Error err={err} setErr={setErr} />}

      <Requests />
      <ShowFeed
        feedUsers={feedUsers}
        sendIgnoreReq={sendReq}
        sendInterestedReq={sendReq}
        load={load}
        ignore={"Ignore"}
        interested={"Interested"}
      />
    </div>
  );
}
