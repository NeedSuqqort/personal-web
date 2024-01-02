import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import "./App.css";

function MainPage() {
  const [stat, setStat] = useState("online");
  const [mode,setmode] = useState(window.matchMedia("(prefers-color-scheme: dark)").matches ? "Light" : "Dark");

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
            if(res === "default")
              return;
            if(res === "granted")
              alert("Notification access is granted.")
            else  
              alert("Failed to access notifications.")
            document.querySelector('.notiperm')?.setAttribute("hidden","true");
          })
        }}>
          Turn on notifications for the website</button>
        <button className="disabled cursor-not-allowed">No</button>
        <Link to={"/404"} className="button">
          <button className='404'>Go to 404 page</button>
        </Link>
        <Link to={"/data"} className="button">
          <button className='data'>Learn more about me</button>
        </Link>
      </div>
      <button className="toggle-lightdark" onClick={ToggleLightDark}>Change to {mode} mode</button>
      <Outlet />
    </> 
  )
}

export default MainPage;