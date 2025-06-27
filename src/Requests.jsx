import { useState } from "react";

export default function Requests() {
  const [push, setPush] = useState(true);
  const [pull, setPull] = useState(false);
  const [merge, setMerge] = useState(false);

  async function getReceivedRequests() {
    const res = axios.post(
      "http://localhost:3002/user/receivedRequests",
      {},
      {
        withCredentials: true,
      }
    );
    console.log(res.data);
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
    <div className=" pt-4">
      <div className=" grid grid-cols-[_1fr_1fr_1fr] contentcenter  h-full bg-black">
        {/* push */}
        <div
          className={`${push ? "bg-[#80ed99]" : "bg-black"} center-the-heading`}
        >
          <h1
            onClick={showPush}
            className={`cols ${
              push ? "underline font-semibold bg-[#80ed99] text-green-500" : ""
            }`}
          >
            Pushed Rrequest
          </h1>
          {push && <p>content of push request</p>}
        </div>

        {/* pull */}
        <div
          className={`${pull ? "bg-[#a2d6f9]" : "bg-black"} center-the-heading`}
        >
          <h1
            onClick={showPull}
            className={`cols ${
              pull ? "underline font-semibold bg-[#a2d6f9] text-blue-500" : ""
            }`}
          >
            Pulled Rrequest
          </h1>
          {pull && <p className="text-center">content of pull request</p>}
        </div>

        {/* merge */}
        <div
          className={`${
            merge ? "bg-[#ff9ebb]" : "bg-black"
          } center-the-heading`}
        >
          <h1
            onClick={showMerge}
            className={`cols ${
              merge ? "underline font-semibold bg-[#ff9ebb] text-pink-500" : ""
            }`}
          >
            Merged Rrequest
          </h1>
          {merge && <p>content of merge request</p>}
        </div>
      </div>
    </div>
  );
}
