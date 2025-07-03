import { useEffect } from "react";

export default function SuccessMessage({ message, setSuccess }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      setSuccess(false)
    }, 3000);

    return () => clearTimeout(timer);
  }, [setSuccess]);
  return (
    <div className="outer-error">
        <h2 className="text-xl font-semibold py-6 px-2 text-green-300">{message}&nbsp;&nbsp;<i className="fa-regular fa-thumbs-up"></i></h2>
    </div>
  );
}
