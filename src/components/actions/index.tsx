import css from './actions.module.css';

import Remember from "./components/remember";
import Archives from "./components/archives";

export default function Actions () {

  return (<>{
    <div className={css["actions"]}>
      <Archives />
      <Remember />
    </div>
  }</>)
}