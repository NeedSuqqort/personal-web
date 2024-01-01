import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import "./App.css";

function MainPage() {
  const [stat, setStat] = useState("online");
  const [mode,setmode] = useState(window.matchMedia("(prefers-color-scheme: dark)").matches ? "Light" : "Dark");
  document.querySelector("html")?.classList.add(`${mode === "Light" ? "dark-mode" : "light-mode"}`);

  const ToggleLightDark = () => {
      const page = document.querySelector('html');
      page?.classList.toggle('light-mode');
      page?.classList.toggle('dark-mode');
      setmode(mode === "Light" ? "Dark" : "Light");
  }

  return (
    <>
      <h1 className="text-3xl text-yellow-600 font-bold mb-2">Hello</h1>
      <div>
        <button className="online-stat" onClick={() => setStat(stat === "online" ? "offline" : "online")}>
          NeedSupport is currently {stat}.
        </button>
        <button className="notiperm" onClick={() => {
          Notification.requestPermission().then((res) => { 
            console.log(res);
            if(res === "granted")
              alert("Notification access is granted.")
            else  
              alert("Failed to access notifications.")
            document.querySelector('.notiperm')?.setAttribute("disabled","true");
            document.querySelector('.notiperm')?.setAttribute('style', 'cursor: not-allowed;');
          })
        }}>
          Turn on notifications for the website</button>
        <button className="disabled cursor-not-allowed">No</button>
        <Link to={"/data"} className="button">
          <button className='data'>Go to data page</button>
        </Link>
      </div>
      <button className="toggle-lightdark" onClick={ToggleLightDark}>{mode} mode</button>
      <Outlet />
    </> 
  )
}

export default MainPage;