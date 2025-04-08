import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { FaSchoolCircleCheck } from "react-icons/fa6";
import { FaUserGraduate } from "react-icons/fa";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "High School",
    location: "New arts, commerce and science college - Ahmednagar",
    description:
      "I completed my high school in Ahmednagar, India. I studied science with computer science as an elective subject.",
    icon: React.createElement(FaSchoolCircleCheck),
    date: "2018-19",
  },
  {
    title: "Bachelor's Degree",
    location: "Government College of Engg. and research - Pune",
    description:
      "I maintained a strong CGPA above 8 during my B.E. in Electronics and Telecommunication while simultaneously mastering technologies like Java, Spring, Hibernate, J2EE, React, JavaScript and SQL, creating awesome projects along the way.",
    icon: React.createElement(FaUserGraduate),
    date: "2019 - 2023",
  },
  {
    title: "Full stack java intern - QSpiders Pune",
    location: "Deccan, Pune",
    description:
      "Gained experience as a full stack java developer intern at qspiders. Where i had learn technologies like Java, J2EE, Spring, Hibernate, SQL etc",
    icon: React.createElement(FaReact),
    date: "2023 - 2024",
  },
  {
    title: "Software Engineer",
    location: "Baner, Pune",
    description:
      "Working on technologies like react, JS, TS etc",
    icon: React.createElement(FaReact),
    date: "2024 - present",
  }
] as const;

export const projectsData = [
  {
    title: "Krishi Sampatti",
    description:
      " 'KrishiSampatti' is a farmer-centric platform that empowers farmers by providing them with a direct channel to reach out to potential buyers,eliminating the need for middlemen.",
    tags: ["Java", "J2EE", "JDBC", "JSP", "Servlets", "HTML", "MySQL"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Banking System",
    description:
      "Created a Java-based bank system with seamless integration of JDBC   API Implemented robust transaction handling mechanisms to ensure data consistency and reliability during account operations",
    tags: ["Java", "J2EE", "JDBC","MySQL"],
    imageUrl: rmtdevImg,
  },
  {
    title: "To-DO List",
    description:
      "Developed a user-friendly To-Do List application that enables users toeffectively manage their tasks.",
    tags: ["React","Node.js", "HTML", "CSS", "Express.js"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "Java",
  "Spring boot",
  "Core Java",
  "Hibernate",
  "J2EE",
  "JSP",
  "Servlets",
  "JDBC",
  "MySQL",
  "Rest Api",
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "Git",
  "MongoDB",
  "Express",
  "XML",
  "JSON",
] as const;
