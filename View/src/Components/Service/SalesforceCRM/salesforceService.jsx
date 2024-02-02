import Title from "../Content/title"
import ServiceCard from "../ServiceOffers/serviceCard";

export default function SalesforceService() {

    const content = [
      {title: "Advisory Service",src: "/saleforce-img-1.jpg",icon:"/icon1.png",link:"/service/advisory-service"},
      { title: "Solution Finalization", src: "/saleforce-img-2.jpg",icon:"/icon2.png",link:"/service/solution-finalization" },
      { title: "Implementation", src: "/implementation.jpg",icon:"/icon3.png",link:"/service/implementation" },
      { title: "Ongoing Support", src: "/s2.png",icon:"/icon1.png",link:"/service/ongoing-support" },
    ];

  return (
    <>
      <Title title="SERVICES WE PROVIDE"/>
      <ServiceCard content={content} color="#1f2357"/>
      </>
  );
  }