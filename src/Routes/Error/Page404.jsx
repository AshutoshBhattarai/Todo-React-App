import styles from "./Page404.module.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
export default function Page404() {
  return (
    <div>
      <Helmet>
        <style>{"body { background-color: #95c2de; }"}</style>
      </Helmet>
      <div className={styles.mainbox}>
        <i
          class={`${styles.err1} fa-solid fa-triangle-exclamation fa-fade `}
        ></i>
        <div class={styles.err}>4</div>
        <i class={`${styles.far} fas fa-0 fa-spin`}></i>
        <div class={styles.err2}>4</div>
        <div class={styles.msg}>
          Maybe this page moved? Got deleted? Is hiding out in quarantine? Never
          existed in the first place?
          <p>
            Let's go to <Link to="/" replace>Home</Link> and try from there.
          </p>
        </div>
      </div>
    </div>
  );
}
