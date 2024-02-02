import Content from "../Content";
import GetRoute from "../../../Container/server";

export default function Intro() {
  const para1=`Enterprises must continually present unique offerings to the market to succeed in 
  the highly competitive high demand ecosystem. AARK Global is a dependable system engineering services 
  partner who can supply end-to-end product development solutions. We make a tremendous difference by reducing
   cost pressures and product delays for OEM & ODM businesses.
   We assist businesses that specialize in Product design by lowering time-to-market while increasing market share.`

  const para2=``

  const para3=` Our all-encompassing hardware & system engineering services can assist with the development of products all the way up to the point of launch. For businesses in the mechanical and manufacturing industries,the new normal requires disruptive breakthroughs in product creation to flourish and to 
  have a competitive advantage over their rivals, Industrial, Manufacturing, semiconductor, high-tech and medical 
  devices, are just a few of the sectors that AARK Global serves with end-to-end product engineering and design solutions.`

  return (
    <Content para1={para1} para2={para2} para3={para3} src={GetRoute('/hardware-img-7-scaled.jpg')}/>
  );
}
