import Content from "../Content";
import GetRoute from "../../../Container/server";

export default function Intro() {
  const para1=`As organizations tackle the challenges of rapid change, aggressive
  competition and increasing customer expectations brought on by
  advent of cutting-edge technologies, Digital solutions are at the
  forefront of prioritization. This transformation is inevitable,
  whether the goal is to upgrade outdated infrastructure or create
  brand-new Business channels.`

  const para2=`Industries across all sectors are
  reducing the time to market by utilizing the engineering and R&D
  ecosystem through partnerships with outside parties, acquisition of
  new skills, and focused investments in Centers of Excellence.`

  const para3=` AARK Global demonstrates its strong engineering foundation and
  expertise through its capacity to accelerate the development of
  digital products for its customers by utilizing cloud-enabled
  intelligent and autonomous capabilities, IoT, AI, ML, AR/VR and
  solution accelerators. We at AARK Global foster a strong culture of
  innovation that produces strategic and intellectual property
  advancements while utilizing partnerships, engaging start-ups, and
  important academic research for co-creation with customers.`
  return (
    <Content para1={para1} para2={para2} para3={para3} src={GetRoute('/services-off-scaled.jpg')}/>
  );
}
