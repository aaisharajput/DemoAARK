import Content from "../Content";
import GetRoute from "../../../Container/server";

export default function Intro() {
  const para1 = `With the advent of new technological themes, changing global technology landscape, 
  and the advancement of software development methodologies, the focus on customer centricity has increased 
  tremendously. To provide a superior user experience and introduce intelligent products to the market, organizations
   nowadays see software as a critical element in introducing innovation across products and services.`;

  const para2 = `Keeping this context in mind, the customers are remarkably underserved by the usual fragmented services
   providers. Instead, they need a strategic partner for software engineering services that can collaborate and carry out
   the long-term strategic goal for the product. We, at AARK Global share our customers’ vision for innovation and product strategy.`;

  const para3 = ` We provide high impact services by strategically investing in IPs and infrastructure, 
  fit-for-purpose product engineering services. Our software engineering services cover every stage of the
   life cycle of a software product; from pre-lifecycle to maturity to decline. Software product engineering 
   experiences a quicker time to market thanks to the rapid prototyping, re-engineering, and value engineering techniques.`;
  return (
    <Content
      para1={para1}
      para2={para2}
      para3={para3}
      src={GetRoute("/service-box-image-1.jpg")}
    />
  );
}
