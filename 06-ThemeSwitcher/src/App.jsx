import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/Theme'
import ThemeBtn from './components/ThemeBtn';
import Card from "./components/Card";

function App() {

  const [themeMode, setThemeMode] = useState("light");

  // function to toggle theme
  const toggleTheme = () => {
    setThemeMode((prevMode) => {
      if (prevMode == "light") return "dark";
      return "light";
    })
  }

  // use to change class of html tag
  useEffect(() => {
    const html = document.querySelector("html");
    html.classList.remove("light", "dark");
    html.classList.add(themeMode);

  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, toggleTheme }}>
      <div className="themeswitcher flex w-1/2 flex-col items-center justify-around gap-10">

        <ThemeBtn />
        <Card />
      </div>
    </ThemeProvider>
  )
}

export default App
