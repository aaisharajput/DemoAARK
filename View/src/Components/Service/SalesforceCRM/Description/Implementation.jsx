import Video from "../../../Carrers/video/Video";
import GetRoute from "../../../../Container/server";
import Description from "./description";

export default function Implementation() {

  const list=["Requirements validation","Design development and testing","Organization change management to go-live for greenfield implementations",
    "Detailed roadmaps process frameworks and global templates"]

  return (
    <>
      <Video videosrc={GetRoute("/about-us.mp4")} title="Implementation" />

      <div className="container py-5">
        <Description current="Implementation" src="/implementation.jpg" list={list} />
      </div>
    </>
  );
}
