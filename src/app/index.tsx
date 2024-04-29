import css from './app.module.css'

import Header from "../components/header";
import Documents from "../components/documents";
import Actions from "../components/actions";
import useConfigStore from "../store/configStore";

import { useEffect } from "react";
import { appWindow } from "@tauri-apps/api/window"

function App() {
  const opacityBackground = useConfigStore((state) => state.opacityBackground)
  useEffect(() => { appWindow.setDecorations(true) }, [])

  return (
    <div 
      id={css["app"]}
      style={{ backgroundColor: `rgba(255, 255, 255, ${(opacityBackground+1) / 100})` }}
    >
      <Header />
      <Documents />
      <Actions />
    </div>
  );
}

export default App;
