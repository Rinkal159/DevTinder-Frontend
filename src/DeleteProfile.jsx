export default function DeleteProfile({cancel, remove}) {
    return (
    <div className="outer-logout">
      <div className="inner-logout">
        <h1 className="pb-3  text-lg font-semibold">Delete Profile</h1>
        <div className="logout-func">
          <p>Are you sure you want to Delete your Profile?</p>
          <div className="outer-btns">
            <div className="btns">
              <button className="btn" onClick={cancel}>
                Cancel
              </button>
              <button className="btn logout-btn" onClick={remove}>
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}