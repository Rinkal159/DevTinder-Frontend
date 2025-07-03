import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ShowFeed from "./ShowFeed";
import Requests from "./Requests";
import "./index.css";
import Error from "./Error";
import { useAuth0 } from "@auth0/auth0-react";

import sendInterestedOrIgnoreReq from "./API_Calling/sendInterestedOrIgnoreReq";
import getMyFeed from "./API_Calling/getFeed";
import getMySentReq from "./API_Calling/getMySentReq";
import getMyReceivedReq from "./API_Calling/getMyReceivedReq";
import getMyConnections from "./API_Calling/getMyConnections";

export default function Feed() {

  const {user, getAccessTokenSilently, isAuthenticated} = useAuth0();

  
  
  const feedUsers = useSelector((state) => state.feed);

  const [load, setLoad] = useState(true);
  const [err, setErr] = useState([]);

  const dispatch = useDispatch();

  // send request when hitting interested or ignore button
  async function sendReq(status) {
    const token = await getAccessTokenSilently();
    
    await sendInterestedOrIgnoreReq(token, status, feedUsers[0]._id, dispatch, setErr);
  }

  // get the feed
  async function getFeed() {
    
    const token = await getAccessTokenSilently();
    await getMyFeed(token, dispatch, setLoad, setErr);

  }

  // get all the sent requests
  async function getSentReq() {
    const token = await getAccessTokenSilently();
    await getMySentReq(token, dispatch, setErr);

  }

  //get all the received reqeuests
  async function getReceivedReq() {
    const token = await getAccessTokenSilently();
    await getMyReceivedReq(token,dispatch, setErr);
  }

  async function getConnections() {
    const token = await getAccessTokenSilently();
    await getMyConnections(token, dispatch, setErr);
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
  
      <Requests />
      <ShowFeed
        feedUsers={feedUsers}
        sendIgnoreReq={sendReq}
        sendInterestedReq={sendReq}
        load={load}
        ignore={"Ignore"}
        interested={"Interested"}
      />

      {/* Error */}
      {err.length > 0 && <Error err={err} setErr={setErr} />}
    </div>
  );
}
