import { useHistory, useLocation } from "react-router-dom";
import s from "./GoBackBtn.module.css";
export default function GoBackBtn() {
  const history = useHistory();
  const location = useLocation();

  function onGoBack() {
    history.push(location?.state?.from ?? "/");
  }

  return (
    <>
      <button type="button" onClick={onGoBack} className={s.btn}>
        Back
      </button>
    </>
  );
}
