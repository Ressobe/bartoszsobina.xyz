import { useEffect, useState } from "preact/hooks";

export default function ThemeToggle(){
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }


  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "light");

  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  }


  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      className="inline-flex items-center justify-center border w-16 h-16 rounded-full border-slate-300 bg-stone-100 transition-transform transform active:scale-75"
      onClick={handleClick}
    >
      <img className="w-12" src="/dark-light.png" />
    </button>

  );
}
