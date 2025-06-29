export default function Logout({cancel, logout}) {
    return (
    <div className="outer-logout">
      <div className="inner-logout">
        <h1 className="pb-3  text-lg font-semibold">Logout</h1>
        <div className="logout-func">
          <p>Are you sure you want to Logout?</p>
          <div className="outer-btns">
            <div className="btns">
              <button className="btn" onClick={cancel}>
                Cancel
              </button>
              <button className="btn logout-btn" onClick={logout}>
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}