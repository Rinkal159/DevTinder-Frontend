import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const state = useSelector((state) => state.user);
  const navigate = useNavigate();

  function goToLogin() {
    return navigate("/login");
  }

  return (
    <div className="navbar bg-base-300 shadow-sm absolute top-0 z-10 bg-black text-white z-0">
      <div className="flex-1">
        <a className="btn btn-ghost text-2xl">
          <i className="fa-solid fa-code"></i>DevTinder
        </a>
      </div>

      {state ? (
        <div className="flex gap-2 items-center">
          {state && <p>Welcome, {state.firstName}</p>}

          <div className="dropdown dropdown-end mx-4">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div>
          <button onClick={goToLogin} className="btn btn-neutral rounded-full bg-[#0466c8] hover:bg-[#0054b1] px-5 mr-4">LOGIN</button>
        </div>
      )}
    </div>
  );
}
