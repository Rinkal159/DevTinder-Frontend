import axios from "axios";
import { useEffect, useState } from "react";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "./features/feed/feedSlice";
import ShowFeed from "./ShowFeed";
import Requests from "./Requests";

export default function Feed() {
  const feedUsers = useSelector((state) => state.feed);

  const [load, setLoad] = useState(true);
  const [err, setErr] = useState([]);
  const [currIdx, setCurrIdx] = useState(0);

  const dispatch = useDispatch();

  async function getFeed() {
      try {
        setLoad(true);

        const res = await axios.get("http://localhost:3002/user/feed", {
          withCredentials: true,
        });

        dispatch(addFeed(res.data.data));
      } catch (err) {
        const error = err.response?.data?.message || err.message;
        setErr((prevErr) => [...prevErr, error]);
      } finally {
        setLoad(false);
      }
    }

  useEffect(() => {
    if (feedUsers) {
      setLoad(false);
      return;
    }
    
    getFeed();
  }, []);

  

  function handleNext() {
    setCurrIdx((prevIdx) =>
      prevIdx < feedUsers.length ? prevIdx + 1 : prevIdx
    );
  }

  return (
    <div className=" pb-4 grid grid-cols-[_1fr_1.7fr] bg-white h-screen">
      <Requests/>
      <ShowFeed
        currIdx={currIdx}
        feedUsers={feedUsers}
        handleNext={handleNext}
        load={load}
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
