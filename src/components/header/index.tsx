import css from "./header.module.css"

import Tabs from "./components/tabs";

export default function Header () {
  return (
    <header id={css["header"]}>
      <Tabs />
    </header>
  ) 
}