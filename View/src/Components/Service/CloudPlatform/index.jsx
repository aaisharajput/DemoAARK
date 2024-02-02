import Video from "../../Video/Video";
import Intro from "./intro";
import GetRoute from "../../../Container/server";
import CloudService from "./cloudService";

export default function CloudPlatform() {
  return (
    <>
    <Video videoSource={GetRoute('/cloud-platform-engineering.mp4')} heading="Cloud Platform Engineering" />

    <div className="container py-5">
     <Intro/>
      <CloudService/>
    </div>
    </>
  )
}
