export default function Logout({cancel, logout}) {
    return (
    <div className="outer-logout">
      <div className="inner-logout">
        <h1 className="logout-heading">Logout</h1>
        <div className="logout-func">
          <p className="warning-logout">Are you sure you want to Logout?</p>
          <div className="outer-btns">
            <div className="btns">
              <button className="btn cancel-btn" onClick={cancel}>
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