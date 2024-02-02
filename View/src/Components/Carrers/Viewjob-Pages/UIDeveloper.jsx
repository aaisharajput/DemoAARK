import React from "react";
import Video from "../video/Video";
import GetRoute from "../../../Container/server";
import css from "./style.module.css";
import Roles from "../roles-requirements/Roles";
import Requirements from "../roles-requirements/Requirements";
import SweetAlertForm from "../../../Container/Apply/Apply";
import ApplyState from "../../../Context/applyForm/State";

const UIDeveloperRoles = [
  "    Participate in requirements gathering (stakeholder workshops, interviews) with customers, product managers, in areas of overall look, design, functionality and UX of a website",
  "    Active participation of converting the requirements into a fully functional user interface including;",
  "Convert wire frames and mockups into HTML/CSS/JavaScript/J Query using clean cod and create high quality prototype",
  "    Take ownership of the development of new highly responsive, web-based user interface components and modules, and be passionate about building scalable solutions.",
  " Work with product team to understand user interactions and iteratively build/enhance customer-facing features.",
  "Drive technical decision making with engineering team and architects that affect complex systems.",
  "Demonstrate a holistic and strategic mindset when developing and designing new modules and resources with a focus on the big technical picture.",
  "   Develop a flexible and well-structured front-end architecture, along with APIs to support it.",
  " Write and review PRs with a focus on ensuring best practices and improving our products.",
  "Implement, test, maintain and support software, based on technical design specifications.",
  "    Prepare technical design specifications based on functional requirements and analysis documents.",
  "    Review functional requirements and, analysis and design documents and provide feedback.",
  " Assist with triage and resolution of issues from customers and internal users.",
];

const UIDeveloperRequirements = [
  "    Bachelor’s/Master’s degree in web design, computer science, information technology, or engineering",
  "8-10 years of overall experience as a UI/UX developer",
  "Proficient in React UI build and web development-related concepts.",
  "Extensive experience in core JavaScript, JS-based framework, architectural setup, webpack, hooks, state management techniques, web security and performance optimizations.",
  "Good knowledge of API integration, unit testing, HTML and CSS.",
  "Ability to quickly analyze, organize, and abstract large amounts of information and to make decisions based on this analysis.",
  "Awareness of business issues as they impact overall project efforts.",
  "Ability to influence and negotiate when faced with opposing views or resistance.",
  "Ability to apply professional concepts, experience, and company objectives to perform an in-depth analysis of situations or data to resolve complex issues in creative ways.",
  "Experience monitoring and improving front-end performance.",
  "Experience with iterative, incremental software development processes.",
  "Competent with designing and writing automated tests for continuous integration.",
  "Experience in TDD and BDD approach.",
  "Experience with cloud deployments and enabling technologies is preferred.",
  "Expertise in Agile software development which includes Scrum & Kanban methodologies is a must. Jira expertise is also mandatory.",
  "Excellent written and verbal communication skills with proven fluency in English.",
  "Please highlight your experience in the following industries: Automotive, Communications, Consumer and Retail, FinTech, Healthcare, Hi-Tech, Industrial, Insurance, Manufacturing, Media, SaaS, Semiconductors, Technology.",
];
export default function UIDeveloper() {

  return (
    <>
      <Video videosrc={GetRoute("/about-us.mp4")} title="Sr. UI Developer" />
      <div className={`m-5 ${css.content}`}>
        <h1 className=" mb-3">Sr. UI Developer <ApplyState><SweetAlertForm/></ApplyState></h1> 
        <Roles roleItems={UIDeveloperRoles} />
        <Requirements reqItems={UIDeveloperRequirements} />
        <ApplyState><SweetAlertForm/></ApplyState>
      </div>
    </>
  );
}
