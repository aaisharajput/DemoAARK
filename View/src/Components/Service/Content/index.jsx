import styles from "./style.module.css";

export default function Content({ para1, para2, para3, src }) {
  return (
    <div className="row align-items-center">
      <div className="col-12 col-md-6">
        <img src={src} width="100%" />
      </div>
      <div className="col-12 col-md-6 ">
        <p className={`${styles.organizations} pt-4`}>
          {para1}
          <br /> 
          <br /> 
          {para2}
        </p>
      </div>
      {para3==""?"":
      <div className="col-12 col-md-12 pt-5">
        <p className={styles.organizations}>{para3}</p>
      </div>}
    </div>
  );
}
