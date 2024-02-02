import Title from "../Content/title"
import CarouselCard from "../Content/CarouselCard";

export default function HardwareService() {
  const content = [
    {title: "Electronic & Mechanical Design",src: "/hardware-img-1-scaled.jpg",icon:"/icon1.png"},
    { title: "Firmware & Software Expertise", src: "/hardware-img-2.jpg",icon:"/icon2.png" },
    { title: "Engineering Change Management", src: "/hardware-img-3-scaled.jpg",icon:"/icon3.png" },
    { title: "Value Engineering", src: "/hardware-img-4-scaled.jpg",icon:"/icon1.png" },
    { title: "Obsolescence Management", src: "/hardware-img-5-scaled.jpg",icon:"/icon2.png" },
    { title: "Prototyping and Manufacturing", src: "/hardware-img-6-scaled.jpg",icon:"/icon3.png" }
  ];
  return (
    <>
    <Title title="SERVICES WE PROVIDE" />
    <CarouselCard content={content}/>
    </>
   
  );
}
