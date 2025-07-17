import ToggleButton from "./ToggleButton";

export default function ShowFeed({
  actualFeedStyle,
  userCardBgStyle,
  feedUsers,
  sendIgnoreReq,
  sendInterestedReq,
  load,
  ignore,
  interested,
}) {
  if (load) return <div className="load">Fetching Your Feed...</div>;

  return (
    <div className={actualFeedStyle}>
      <div className={userCardBgStyle}>
        {feedUsers && feedUsers.length > 0 ? (
          <div className="user-card " key={feedUsers[0]._id}>
            <img
              className="user-card-img"
              src={feedUsers[0].img}
              alt={`${feedUsers[0].firstName} ${feedUsers[0].lastName}`}
            />

            <div className="main-user-info">
              <div className="flex gap-x-8 justify-between">
                <h1 className="text-lg h1">{`${feedUsers[0].firstName.toUpperCase()} ${feedUsers[0].lastName.toUpperCase()}`}</h1>
                <h1 className="h1">
                  <i className="fa-solid fa-calendar-days"></i>&nbsp;age :{" "}
                  {feedUsers[0].age}
                </h1>
              </div>

              <h1 className="h1">
                <i className="fa-solid fa-location-dot"></i>&nbsp;&nbsp;State :{" "}
                {feedUsers[0].state}
              </h1>

              <h1 className="h1">
                <i className="fa-solid fa-person"></i>&nbsp;&nbsp;Gender :{" "}
                {feedUsers[0].gender}
              </h1>
              <h1 className="h1">
                <i className="fa-solid fa-briefcase"></i>&nbsp;&nbsp;Occupation
                : {feedUsers[0].occupation}
              </h1>
              <h1 className="h1">
                <i className="fa-solid fa-laptop-code"></i>&nbsp;&nbsp;Tech
                Stacks : {feedUsers[0].techStacks}
              </h1>
              <h1 className="h1">
                <i className="fa-solid fa-bullseye"></i>&nbsp;&nbsp;My Goals :{" "}
                {feedUsers[0].goals}
              </h1>
            </div>

            <div className="buttons">
              {/* ignore */}
              <button
                onClick={() => sendIgnoreReq(ignore)}
                className=" ignore-btn "
              >
                <i className="fa-solid fa-xmark text-2xl inline-block"></i>
                &nbsp;{ignore}
              </button>

              {/* interested */}
              <button
                onClick={() => sendInterestedReq(interested)}
                className=" interested-btn "
              >
                <i className="fa-solid fa-check text-2xl"></i>&nbsp;{interested}
              </button>
            </div>
          </div>
        ) : (
          <h2 className="text-xl text-center text-defaultDark">
            No More Users To Show...
          </h2>
        )}
      </div>
    </div>
  );
}
