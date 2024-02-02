import React from "react";
import Video from "../video/Video";
import GetRoute from "../../../Container/server";
import css from "./style.module.css";
import Roles from "../roles-requirements/Roles";
import Requirements from "../roles-requirements/Requirements";
import SweetAlertForm from "../../../Container/Apply/Apply";
import ApplyState from "../../../Context/applyForm/State";

const DotNetDeveloperRoles = [
  "Participate in requirements analysis with customers, team members.",
  "Coordinate with project managers, business analysts, developers and other stakeholders to understand platform requirements, legacy systems and data",
  "Write clean, scalable code using .NET programming languages.",
  "Drive large and complex application modernization programs with the developer teams",
  "Create the framework and development practices for developers for modern architectures",
  "Complete tasks and stories assigned in the backlog",
  "Test and deploy applications and systems",
  "Revise, update, refactor and debug code",
  "Develop documentation throughout the software development life cycle (SDLC)",
];

const DotNetDeveloperRequirements=[
"  Bachelors or Masters degree in Computer Science, information technology, engineering or a related field",
"8-12 years of overall experience on .Net stack",
"Expertise in .Net Core, API driven architecture, and Entity Framework",
"Familiarity with architecture styles/APIs (REST, RPC)",
"Experience in application modernization",
"Follow agile development practices and best coding practices and strong knowledge in version control using GIT",
"Knowledge of microservice based architecture",
"Good to have knowledge on ReactJS and Azure cloud",
"Demonstrate core behaviors like collaboration, communication, ownership, and pride of work",
"Excellent troubleshooting and communication skills",
"Attention to detail",
"Excellent written and verbal communication skills with proven fluency in English",
]

export default function DotNetDeveloper() {
  return (
    <>
      <Video videosrc={GetRoute("/about-us.mp4")} title=".net developer" />
      <div className={`m-5  ${css.content}`}>
        <h1 className=" mb-3">.Net Developer <ApplyState><SweetAlertForm/></ApplyState></h1>
        <Roles roleItems={DotNetDeveloperRoles} />
        <Requirements reqItems={DotNetDeveloperRequirements} />
        <ApplyState><SweetAlertForm/></ApplyState>
      </div>
    </>
  );
}
