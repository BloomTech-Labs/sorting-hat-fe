import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import styled from "styled-components";

const courseData = {
  UX: {
    title: "UX Courses",
    description:
      "We aim to provide great courses for each track. some may require additionaresearch, but we have extracted key information to easily compare each.",
    bootcamps: [
      {
        name: "Ironhack",
        courseTitle: "UX/UI Design",
        link: "https://www.ironhack.com/en",
        price:
          "ISA -  no payment until you make 40k a year. Then 12% of income for 48 months.\n \n Includes other options.",
        content:
          "User-centered design, user research, prototyping, user testing, heuristic evaluation. Learn UI and IxD to prototype",
        support:
          "Career guidance with one on one mentorship. Job search preparation and ongoing support. hiring fairs and job opportunities.",
        length: "9 weeks",
        timeCommitment: "Full Time - 40 hours a week, 9 am - 6 pm",
        localeCommitment: "In Person",
      },
      {
        name: "Springboard",
        courseTitle: "UX/UI Design",
        link: "https://www.springboard.com/",
        price:
          "UX / UI:\n Upfront $8,200\n monthly $1,099\n defferred tuition $875/mo\n climb credit loan $57-115*/mo",
        content:
          "Design Thinking, user research, synthesis and presentation, ideation, sketching, wireframing, UI, prototyping, style guide, design elements.",
        support: "One on one mentor with job guarantee.",
        length: "9 months",
        timeCommitment:
          "On your own time - Most students devote 15-20 hours a week",
        localeCommitment: "Online",
      },
      {
        name: "General Assembly",
        courseTitle: "UX/UI Design",
        link: "https://generalassemb.ly/",
        price:
          "Full Tuition: $14,950\n Installments: $4,650\n  ISA: 0 upfront, 10% for 48 months on a salary over $40,000/ year\n Loans: $450",
        content:
          "UX Fundamentals, UX Foundations, UI Foundations, Design Iteration and development. Working on product team, and real world.",
        support: "Personalized Feedback",
        length: "3 months",
        timeCommitment: "Both",
        localeCommitment: "Both",
      },
    ],
    universities: [
      {
        name: "California College of the Arts",
        courseTitle: "BFA Interaction Design",
        link: "https://www.cca.edu/design/ixd/",
        price: "$49,138",
        content:
          "Systems, prototyping, behavior, visual interactive design, user interface, design research, digital products, and more",
        support:
          "Faculty and alumni support, along with career help and internships",
        length: "4 year",
        timeCommitment: "Full Time",
        localeCommitment: "In Person",
      },
      {
        name: "Full Sail University",
        courseTitle: "Web Design & Development",
        link: "https://www.fullsail.edu/",
        price: "$24,109",
        content:
          "Math, development, technical writng, interface programing and design, web standards, server language, deployment, web design, and more",
        support: "Provide tools to help during and after your education",
        length: "20 - 29 months",
        timeCommitment: "Full Time",
        localeCommitment: "Both",
      },
      {
        name: "Stony Brook University",
        courseTitle: "BS Human Computer Ineraction",
        link: "https://www.cs.stonybrook.edu/",
        price: "$27,480",
        content:
          "HCI, graphics, computer vision, user interface, multimedia systems, programming, artificial intelligence, virtual reality, robotics, and more",
        support: "Alumni support",
        length: "4 years",
        timeCommitment: "Full Time",
        localeCommitment: "In Person",
      },
    ],
  },
};

//These structure the table
const tableRow = "flex justify-center open-sans border-black";
const tableCol = "flex-col justtify-center open-sans border-black";
//These structure content styling
const colHeader = "flex-col";
const tableCont = "";
const rowHeader = "text-bold pr-6 secondaryText";
const row = "pr-6 secondaryText";
//24 px between each content
const Courses = () => {
  return (
    <div>
      <Header />
      <div className="flex items-center justify-center mt-40">
        <div className="flex flex-col m-4 max-w-5xl">
          <section className="mt-4 mb-4">
            <h2 className="mb-1 text-2xl lg:text-3xl font-bold text-black border-b-2 noto-sans">
              {courseData.UX.title}
            </h2>
            {/* There needs to be more text here below! */}
            <p className="flex-col items-center justify-center text-base mt-4 pb-24 leading-relaxed protoGray noto-sans">
              {courseData.UX.description}
            </p>
          </section>

          <section className="text-red">
            <h2 className="mb-1 text-2xl lg:text-3xl text-black border-b-2 fira-sans  ">
              Bootcamps
            </h2>
            {/* X dimension */}
            <div className={`${tableRow}`}>
              {/*Y dimension*/}
              <div className={tableCol}>
                <p className={rowHeader}>{"♥ :)"}</p>
                <p className={rowHeader}>Price</p>
                <p className={rowHeader}>Content</p>
                <p className={rowHeader}>Support</p>
                <p className={rowHeader}>Length</p>
                <p className={rowHeader}>Full time / Part time</p>
                <p className={rowHeader}>Online / In Person</p>
              </div>
              {courseData.UX.bootcamps.map((el) => {
                return (
                  <div className={tableCol}>
                    <div className={colHeader + " " + row}>
                      <p className="text-bold">{el.name}</p>
                      <p>{el.courseTitle}</p>
                      <p>{el.link}</p>
                    </div>
                    <p className={row}>{el.price}</p>
                    <p className={row}>{el.content}</p>
                    <p className={row}>{el.support}</p>
                    <p className={row}>{el.length}</p>
                    <p className={row}>{el.timeCommitment}</p>
                    <p className={row}>{el.localeCommitment}</p>
                  </div>
                );
              })}
            </div>
            <p className="flex-col items-center justify-center text-base mt-4 pb-24 leading-relaxed protoGray noto-sans">
              We wanted to showcase the different industries in the tech field
              for people who are seeking an informed decision on which
              subsection to choose. We threw away technical jargon in order to
              show empathy to those outside the industry, and to quiz them based
              on their personality, their technical capabilities. All people are
              capable of pursuing a career in the tech field, and it is our job
              to help find their niche based on their personality.
            </p>
          </section>

          <section className="container mt-5 ">
            <h2 className="mb-1 text-2xl lg:text-3xl text-black border-b-2 fira-sans  ">
              How
            </h2>
            <p className="flex-col items-center justify-center text-base lg:text-lg mt-4 leading-loose protoGray noto-sans">
              We surveyed 70 current tech students, interviewed 13 tech
              students, and 2 tech instructors. We discovered that all tracks in
              the tech field are extremely similar, but subtle differences
              between each emerged from analyzing the data. We created questions
              that do not deal with tech, but relate to how people in different
              tech fields think. Keep in mind, anyone has the capability to
              succeed in any career, and this quiz should not hinder someones
              passion for a particular tech field.
            </p>
          </section>

          <section className="flex flex-row justify-between pt- 16 lg:pt-32">
            <div className="flex justify-start py-1 pt-2 pr-1 my-8 mr-5">
              <h2 className="mb-1 text-2xl lg:text-3xl text-black border-b-2 fira-sans">
                Bootcamp vs University Courses
              </h2>
              <p className="flex-col items-center justify-center text-base lg:text-lg mt-4 leading-loose secondaryText noto-sans">
                A university is the more traditional form of schooling. Often
                seen as more credible, but will cost a pretty penny. Many
                universities have online courses, but more often than not, they
                requiere you to attend on campus which will be restricitng based
                on your geographical location.
              </p>
              <p className="flex-col items-center justify-center text-base lg:text-lg mt-4 leading-loose secondaryText noto-sans">
                A bootcamp is a new way of taking classes. Since they are newer,
                they are less credible than universities that have been around
                for a while. They are often online, and online schools have the
                advantage of updating and including the most up to date content
                more easily than a traditional university. But be careful, since
                it is easier to start an online course, many people opt in to do
                this in order to monetize people who may want to take shortcuts
                in getting an education.
              </p>
            </div>
            <div className="flex justify-end py-1 pt-2 pl-1 my-8 ml-5"></div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Courses;
