import Video from "../../Video/Video";
import Intro from "./intro";
import GetRoute from "../../../Container/server";
import CognitiveService from "./cognitiveService";

export default function Cognitive() {
    return (
      <>
      <Video videoSource={GetRoute('/cognitive-solutions.mp4')} heading="Cognitive Solutions" />

    <div className="container py-5">
     <Intro/>
      <CognitiveService/>
    </div>
      </>
    )
  }
  