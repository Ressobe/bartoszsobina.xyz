import { useEffect, useState } from "preact/hooks";

export default function ThemeToggle(){
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div className="w-16 h-16"></div>;
  }


  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "light");

  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  }


  useEffect(() => {
    const d = new Date();
    d.setTime(d.getTime() + 365 * 86400000);
    document.cookie = `theme=${theme};expires=${d.toUTCString()}`;

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      className="inline-flex items-center justify-center border w-16 h-16 rounded-full border-accent2 brightness-110 drop-shadow-sm bg-secondary transition-transform transform active:scale-75"
      onClick={handleClick}
    >
      <img className="w-12" src="/dark-light.png" />
    </button>

  );
}
