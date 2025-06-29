export default function ShowFeed({ feedUsers, sendIgnoreReq, sendInterestedReq, load, ignore, interested }) {
  if (load)
    return (
      <div className="pt-8 text-center text-2xl">Fetching Your Feed...</div>
    );

  return (
    <div className=" flex  flex-col items-center mt-8 mb-8">
      {feedUsers && feedUsers.length > 0 ? (
        <div
          className="flex flex-col w-[20rem] bg-black items-center "
          key={feedUsers[0]._id}
        >
          <img
            className="h-[20rem] w-[20rem] object-cover"
            src={feedUsers[0].img}
            alt={`${feedUsers[0].firstName} ${feedUsers[0].lastName}`}
          />

          <div className="flex flex-col gap-y-4 bg-black text-md pt-4">
            <div className="flex gap-x-8 justify-between">
              <h1 className="text-lg h1">{`${feedUsers[0].firstName.toUpperCase()} ${feedUsers[0].lastName.toUpperCase()}`}</h1>
              <h1 className="h1">
                <i className="fa-solid fa-calendar-days"></i>&nbsp;age :{" "}
                {feedUsers[0].age}
              </h1>
            </div>

            <h1 className="h1">
              <i className="fa-solid fa-location-dot"></i>&nbsp;State :{" "}
              {feedUsers[0].state}
            </h1>

            <h1 className="h1">
              <i className="fa-solid fa-person"></i>&nbsp;Gender :{" "}
              {feedUsers[0].gender}
            </h1>
            <h1 className="h1">
              <i className="fa-solid fa-briefcase"></i>&nbsp;Occupation :{" "}
              {feedUsers[0].occupation}
            </h1>
            <h1 className="h1">
              <i className="fa-solid fa-laptop-code"></i>&nbsp;Tech Stacks :{" "}
              {feedUsers[0].techStacks}
            </h1>
            <h1 className="h1">
              <i className="fa-solid fa-bullseye"></i>&nbsp;My Goals :{" "}
              {feedUsers[0].goals}
            </h1>
          </div>

          <div className="buttons">
            {/* ignore */}
            <button
              onClick={() => sendIgnoreReq(ignore)}
              className="btn btn-outline ignore-btn border-red-500  text-red-500"
            >
              <i className="fa-solid fa-xmark text-2xl inline-block"></i>
              &nbsp;{ignore}
            </button>

            {/* interested */}
            <button
              onClick={() => sendInterestedReq(interested)}
              className="btn btn-outline interested-btn text-green-300 border-green-500"
            >
              <i className="fa-solid fa-check text-2xl"></i>&nbsp;{interested}
            </button>
          </div>
        </div>
      ) : (
        <div className=" text-center bg-black z-50 bg-opacity-50">
          <div className="">
            <h2 className="text-xl">No More Users To Show...</h2>
          </div>
        </div>
      )}
    </div>
  );
}
