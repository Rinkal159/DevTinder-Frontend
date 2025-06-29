import Footer from "./Footer";
import NavBar from "./Navbar";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import getMyUser from "./API_Calling/getMyUser";

export default function Body() {
  const [err, setErr] = useState([]);

  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user);


  // get the user
  async function getUser() {
    await getMyUser(dispatch, setErr);

  }

  useEffect(() => {
    if (!userData) {
      getUser();
    }
  }, []);

  return (
    <div>
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <div className="flex-grow">
          <Outlet />
        </div>
        <Footer />
      </div>


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
