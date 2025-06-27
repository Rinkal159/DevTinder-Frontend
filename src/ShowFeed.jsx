export default function ShowFeed({ currIdx, feedUsers, handleNext , load}) {

  if (load)
    return (
      <div className="pt-8 text-center text-2xl">Fetching Your Feed...</div>
    );

  return (
    <div className=" flex  flex-col items-center mt-8">
      {currIdx < feedUsers.length ? (
        <div
          className="flex flex-col w-[20rem] bg-black items-center "
          key={feedUsers[currIdx]._id || i}
        >
          <img
            className="h-[20rem] w-[20rem] object-cover"
            src={feedUsers[currIdx].img}
            alt={`${feedUsers[currIdx].firstName} ${feedUsers[currIdx].lastName}`}
          />

          <div className="flex flex-col gap-y-4 bg-black text-md pt-4">
            <div className="flex gap-x-8 justify-between">
              <h1 className="text-lg h1">{`${feedUsers[
                currIdx
              ].firstName.toUpperCase()} ${feedUsers[
                currIdx
              ].lastName.toUpperCase()}`}</h1>
              <h1 className="h1">
                <i className="fa-solid fa-calendar-days"></i>&nbsp;age :{" "}
                {feedUsers[currIdx].age}
              </h1>
            </div>

            <h1 className="h1">
              <i className="fa-solid fa-location-dot"></i>&nbsp;State :{" "}
              {feedUsers[currIdx].state}
            </h1>

            <h1 className="h1">
              <i className="fa-solid fa-person"></i>&nbsp;Gender :{" "}
              {feedUsers[currIdx].gender}
            </h1>
            <h1 className="h1">
              <i className="fa-solid fa-briefcase"></i>&nbsp;Occupation :{" "}
              {feedUsers[currIdx].occupation}
            </h1>
            <h1 className="h1">
              <i className="fa-solid fa-laptop-code"></i>&nbsp;Tech Stacks :{" "}
              {feedUsers[currIdx].techStacks}
            </h1>
            <h1 className="h1">
              <i className="fa-solid fa-bullseye"></i>&nbsp;My Goals :{" "}
              {feedUsers[currIdx].goals}
            </h1>
          </div>

          <div className="buttons">
            {/* ignore */}
            <button onClick={handleNext} className="btn btn-outline ignore-btn">
              <i className="fa-solid fa-xmark text-2xl inline-block"></i>
              &nbsp;Ignore
            </button>

            {/* interested */}
            <button
              onClick={handleNext}
              className="btn btn-outline interested-btn"
            >
              <i className="fa-solid fa-check text-2xl"></i>&nbsp;Interested
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
