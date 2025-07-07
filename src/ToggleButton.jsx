import { useState, useEffect } from "react";

export default function ToggleButton() {
  const [isDark, setDark] = useState(() => {
    const stored = localStorage.getItem("theme");
    if (stored) return stored === "dark";
    document.documentElement.classList.contains('dark');
  });

  useEffect(() => {
    const root = document.documentElement;

    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);
  return (
    <div className="flex gap-x-2 items-center">
      <div className="text-xl">{isDark ? "🌙" : "☀️"}</div>
      <div
        onClick={() => setDark(!isDark)}
        className={`border h-10 w-16 rounded-full relative cursor-pointer transition-colors duration-300 ${
          isDark ? "bg-zinc-700" : "bg-gray-300"
        }`}
      >
        <div
          className={`h-7 w-7 bg-white rounded-full absolute top-1.5 ${
            isDark ? "right-1.5" : "left-1.5"
          }`}
        ></div>
      </div>
    </div>
  );
}
