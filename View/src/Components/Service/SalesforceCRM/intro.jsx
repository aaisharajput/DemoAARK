import GetRoute from "../../../Container/server";
import styles from "./styles.module.css";

export default function Intro() {
  const para1=`AARK Global is a trusted provider of Salesforce services, including consulting, design, 
  implementation & support. Our customers partner with us to solve their key challenges, sharpen their 
  business models and drive transformational experiences. Our salesforce experts have a deep understanding 
  of emerging digital landscapes and ever-evolving customer needs. This coupled with extensive expertise in 
  traditional Salesforce Cloud products and newer additions ensures that our customers get the best ROI for 
  their spend in Salesforce platform. The focal point of the solutions we build is improving end customer 
  engagement and driving business growth. Our project teams have successfully delivered both quick single-cloud ‘Out 
  of the box functionality’ programs as well large scale/ highly complex multi-cloud ‘custom functionality’ digital
   transformation programs.`


  return (
    <div className="row align-items-center">
      <div className="col-12 col-md-6">
        <img src={GetRoute('/service-box-image-4.jpg')} width="100%" />
      </div>
      <div className="col-12 col-md-6 ">
        <p className={`${styles.organizations} pt-4`}>
          {para1}
        </p>
      </div>
      <div className="col-12 col-md-12 pt-3">
        <p className={styles.organizations}>
        <span className={styles.para2}><br/>Our offerings traverse across the entire Salesforce product eco-system including the following:</span>
        </p>
        <ul className={styles.ul}>
        <li>Sales Cloud, Marketing Cloud, Revenue Cloud and Commerce Cloud</li>
        <li>Service Cloud, Experience Cloud, Field Service and Slack</li>
        <li>MuleSoft</li>
        <li>Tableau</li>
        <li>Einstein</li>
        </ul>
      </div>
    </div>
  );
}
