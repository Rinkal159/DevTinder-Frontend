import "./index.css";
export default function Error({ err, setErr }) {
  return (
    <div className="outer-error">
      <div className="inner-error">
        <button className="close-btn" onClick={() => setErr([])}>
          <i className="fa-solid fa-xmark"></i>
        </button>
        <h2 className="err-heading">Error</h2>
        <ul className="list-of-errors">
          {err.map((li, i) => (
            <li className="errors" key={i}>
              {li}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
