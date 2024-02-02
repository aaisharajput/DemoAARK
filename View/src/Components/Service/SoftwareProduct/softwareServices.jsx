import Title from "../Content/title"
import SoftwareCard from "./softwareCard";

export default function SoftwareService() {

  const content = [
    {title: "New Product Development",src: "/software-img-1-scaled.jpg",icon:"/icon1.png",description:`With our capacity to create upgraded products, platforms, and services in a distinctive way, we assist clients in adapting to
    fast changing technology. We are aware of and prioritize our customers’ needs to quickly commercialize their products.`},
    { title: "Product Customization", src: "/software-img-2-scaled.jpg",icon:"/icon2.png" ,description:`AARK Global uses its in-depth understanding of market requirements to tailor its solutions to the market-critical needs. We apply next-generation
    technology to improve product personalization while taking into account time-to-market as well as the market needs.`},
    { title: "Product Quality Compliance", src: "/software-img-3-scaled.jpg",icon:"/icon3.png",description:`There is a substantial cost associated with maintaining the standard that is constantly being raised for product quality.
    By creating variety in test capacity, AARK Global assists clients in ensuring the quality of their products.` },
    { title: "Product Sustenance", src: "/cognitive-img-2-scaled.jpg",icon:"/icon1.png",description:`Our active product support services provide maintenance engineering services that invariably prolong the product lifecycle and 
    maintain product margin in addition to technical support at L1 through L4 levels.` },
    { title: "Re-Engineering/Modernization", src: "/slider-btn-img-4.png",icon:"/icon2.png",description:` It is critical to remain competitive in the market. AARK Global specializes in identifying out-of-date platforms and technology and re-engineering it to meet market demands.` }
  ];
  
  return (
    <>
      <Title title="SERVICES WE PROVIDE"/>
     <SoftwareCard content={content}/>
      </>
  );
}
