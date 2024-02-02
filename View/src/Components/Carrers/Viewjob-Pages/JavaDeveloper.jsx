import React from "react";
import Video from "../video/Video";
import GetRoute from "../../../Container/server";
import css from "./style.module.css";
import Roles from "../roles-requirements/Roles";
import Requirements from "../roles-requirements/Requirements";
import SweetAlertForm from "../../../Container/Apply/Apply";
import ApplyState from "../../../Context/applyForm/State";

const JavaDeveloperRoles = [
  "  Participate in requirements analysis with customers, team members in areas of overall look, design, functionality and UX of a website",
  " Coordinate with project managers, business analysts, developers and other stakeholders to understand platform requirements, legacy systems",
  " Provide system assessments, design, development, and implementation of user-side web applications to modernize the websites, interface of various components, and enhance user interfaces",
  "    Design and develop web-based applications with both backend services.",
  "  Work on security vulnerability remediation and fixes.",
  " Thoroughly understand software development methodology, architecture standards, and their integration with client’s business functions and technology needs",
  "    Employ modern software development techniques to ensure tests are implemented in a way that supports automation",
  " Participate in code inspections throughout life cycle to identify issues",
  " Work on security vulnerability remediation and fixes.",
  " Coordinate with QA teams and partner teams.",
];

const JavaDeveloperRequirements = [
  "Bachelor’s/Master’s degree in computer science, information technology, or engineering",
  " 5 – 8 years of experience working as a Full Stack developer",
  "  Experience in designing and developing E-Commerce web applications using Java and related technologies.",
  " Must be strong in Core Java, Java 8, Spring Boot, WebServices, Junit, and Microservices.",
  "Exposure to Docker, Kubernetes, and automation/configuration management using Chef, or Puppet would be a plus.",
  " Experience working with REST and SOAP client applications.",
  "Nice to have good knowledge of Kafka and Spring Batch.",
  "   Working with SOA and web services paradigms like REST/SOAP.",
  " Designing and developing Spring-based applications.",
  " Follow agile development practices and best coding practices and strong knowledge in version control using GIT",
  "    Hand-on experience with unit testing and working with continuous integration environment",
  "    Demonstrate core behaviors like collaboration, communication, ownership, and pride of work",
  "Excellent troubleshooting and communication skills",
  "  Attention to detail",
  " Excellent written and verbal communication skills with proven fluency in English",
  "Please highlight your experience in the following industries: Automotive, Communications, Consumer and Retail, FinTech, Healthcare, Hi-Tech, Industrial, Insurance, Manufacturing, Media, SaaS, Semiconductors, Technology.",
];

export default function JavaDeveloper() {
  return (
    <>
      <Video videosrc={GetRoute("/about-us.mp4")} title="Java Developer" />
      <div className={`m-5  ${css.content}`}>
        <h1 className=" mb-3">Java Developer <ApplyState><SweetAlertForm/></ApplyState></h1>
        <Roles roleItems={JavaDeveloperRoles} />
        <Requirements reqItems={JavaDeveloperRequirements} />
        <ApplyState><SweetAlertForm/></ApplyState>
      </div>
    </>
  );
}
