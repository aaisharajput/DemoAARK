import Title from "../Content/title"
import CarouselCard from "../Content/CarouselCard";

export default function CognitiveService() {
  const content = [
    {title: "Advisory Services",src: "/cognitive-img-1-scaled.jpg",icon:"/icon1.png"},
    { title: "Data Operations", src: "/cognitive-img-2-scaled.jpg",icon:"/icon2.png" },
    { title: "AI/ML Modeling", src: "/cognitive-img-3.jpg",icon:"/icon3.png" },
    { title: "Managed Services", src: "/cognitive-img-4.jpg",icon:"/icon1.png" },
  ];

  return (
    <>
    <Title title="SERVICES WE PROVIDE"/>
    <CarouselCard content={content}/>
    </>
  )
}
