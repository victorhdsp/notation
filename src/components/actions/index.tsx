import css from './actions.module.css';

import Remember from "./components/remember";
import Archives from "./components/archives";
import FileEdit from './components/file-edit';

export default function Actions () {

  return (<>{
    <div className={css["actions"]}>
      <Archives />
      <Remember />
      <FileEdit />
    </div>
  }</>)
}