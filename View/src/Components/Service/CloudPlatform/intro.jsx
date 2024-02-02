import Content from "../Content";
import GetRoute from "../../../Container/server";

export default function Intro() {
  const para1=`It is paramount that organizations build rich feature products that are highly available, 
  scalable and resilient. However, the challenges organizations face include the ability to reduce time to
   market, development cost, while still delivering superior serviceability. We, at AARK Global leverage the 
   Cloud ecosystem to offer our customers advantages such as economies of scale, industry proven best practices,
    readily usable platform components and a utility-based business model to address these challenges.`

  const para2=`We help our customers transform products and services by leveraging scale, agility and robust benefits
   of Cloud computing environment. AARK Global Cloud engineering practice offers reliable capabilities to re-factor, 
   re-architect and build new products and services using Cloud native services.`

  const para3=``

  return (
    <Content para1={para1} para2={para2} para3={para3} src={GetRoute('/services-img-1.jpg')}/>
  );
}
