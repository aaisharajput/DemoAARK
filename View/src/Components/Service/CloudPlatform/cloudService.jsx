import Title from "../Content/title"
import CarouselCard from "../Content/CarouselCard";

export default function CloudService() {
  const content = [
    {title: "Cloud Consulting & Innovation",src: "/cognitive-img-6-scaled.jpg",icon:"/icon1.png"},
    { title: "Modernization & Transformation", src: "/frugal-scaled-1.jpg",icon:"/icon2.png" },
    { title: "DevOps & Automation", src: "/cont.jpg",icon:"/icon3.png" },
    { title: "Data & Analytics", src: "/cloud-img-4.jpg",icon:"/icon1.png" },
  ];

  return (
    <>
    <Title title="SERVICES WE PROVIDE"/>
    <CarouselCard content={content}/>
    </>
  )
}
