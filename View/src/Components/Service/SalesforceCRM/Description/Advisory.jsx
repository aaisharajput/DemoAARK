import Video from "../../../Carrers/video/Video";
import GetRoute from "../../../../Container/server";
import Description from "./description";

export default function Advisory() {

  const list=["Business strategy review","Technology vision","Blue printing","Domain and package consulting"]

  return (
    <>
      <Video videosrc={GetRoute("/about-us.mp4")} title="Advisory Service" />

      <div className="container py-5">
        <Description current="Advisory Service" src="/saleforce-img-1.jpg" list={list} />
      </div>
    </>
  );
}
