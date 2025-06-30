import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Index() {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  function handleInit() {
    return navigate("/signup");
  }
  function handleFeed() {
    return navigate("/feed");
  }

  return (
    <div className="flex h-[calc(100vh-70px)] flex-col gap-y-8 justify-center items-center">
      <h1 className="text-7xl font-black">Find Your README of Life.</h1>
      {user ? (
        <button
          onClick={handleFeed}
          className="btn btn-neutral btn-outline rounded-full text-2xl px-7 py-7"
        >
          Feed()
        </button>
      ) : (
        <button
          onClick={handleInit}
          className="btn btn-neutral btn-outline rounded-full text-2xl px-7 py-7"
        >
          Init()
        </button>
      )}
    </div>
  );
}
