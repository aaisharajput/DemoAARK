import Content from "../Content";
import GetRoute from "../../../Container/server";

export default function Intro() {
  const para1=`We are all aware of the tremendous amounts of data organizations are gathering. Along with the
   data volume comes the need for real-time insights, and a scalable, economical, and cutting-edge hybrid data ecosystem. 
   AARK Global helps businesses by redesigning their data architecture and exploring new methods to use the innovation being 
   offered by public cloud providers. AARK Global can assist customers with their goals that include; automating huge data 
   operations with real-time intelligence; adaptive modelling, and high-quality data in order to promote confidence and gain
    actionable data-driven insights.`

  const para2=''

  const para3=`The full data modernization journey of an organization is made possible by our data engineering and AI
   services by designing a data strategy that is future-proof and enhancing the data management system. Through our ecosystem 
   services, we also offer assistance by supporting data operations together with insights and analytics. Enterprises have relied
    on our tested solutions and industry knowledge to help them concentrate on their core strengths and company expansion while 
    delegating to us the issues associated with managing data platforms that are highly complex and constantly expanding.`

  return (
    <Content para1={para1} para2={para2} para3={para3} src={GetRoute('/service-box-image-2.jpg')}/>
  );
}
