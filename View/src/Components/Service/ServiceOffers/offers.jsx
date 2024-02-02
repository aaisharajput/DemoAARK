import ServiceCard from "./serviceCard"

export default function Offers({color}) {

  const content = [
    {title: "Software Product Engineering",src: "/service-box-image-1.jpg",icon:"/icon1.png",link:"/service/software-product-engineering"},
    { title: "Hardware Product Engineering", src: "/hardware.jpg",icon:"/icon2.png",link:"/service/hardware-product-engineering" },
    { title: "Cloud Platform Engineering", src: "/services-img-1.jpg",icon:"/icon3.png",link:"/service/cloud-platform-engineering" },
    { title: "Cognitive Solutions", src: "/service-box-image-2.jpg",icon:"/icon1.png",link:"/service/cognitive-solution" },
    { title: "Salesforce CRM", src: "/service-box-image-4.jpg",icon:"/icon2.png",link:"/service/salesforce-crm" }
  ];

  return (
      <ServiceCard content={content} color={color}/>
  )
}
