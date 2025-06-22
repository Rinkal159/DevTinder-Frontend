import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Index() {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  function handleNavigate() {
    return navigate("/signup");
  }

  return (
    <div className="flex flex-col gap-y-8 justify-center items-center h-screen flex-grow">
      <h1 className="text-7xl font-black">Find Your REDADME of Life.</h1>
      {!user && (
        <button
          onClick={handleNavigate}
          className="btn btn-neutral btn-outline rounded-full text-2xl px-7 py-7"
        >
          Init()
        </button>
      )}
    </div>
  );
}
