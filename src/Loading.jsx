import "./index.css"

export default function Loading({ msg }) {
  return (
    <div className="outer-logout">
      <h1 className="loading-data">{msg}&nbsp;<span className="loading loading-infinity loading-xl text-white"></span></h1>
    </div>
  );
}
