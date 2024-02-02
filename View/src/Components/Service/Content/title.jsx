import styles from "./style.module.css";

export default function Title({title}) {
  return (
    <div className="row text-center mt-4 ">
        <h1 className={`pt-5 ${styles.title}`}>{title}</h1>
      </div>
  )
}
