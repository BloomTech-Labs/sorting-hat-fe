import React, { useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

const courseData = {
  UX: {
    title: "UX Courses",
    description:
      "We aim to provide great courses for each track. some may require additional research, but we have extracted key information to easily compare each.",
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
          "UX / UI:\n Upfront $8,200\n monthly $1,099\n deferred tuition $875/mo\n climb credit loan $57-115*/mo",
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
          "Math, development, technical writing, interface programing and design, web standards, server language, deployment, web design, and more",
        support: "Provide tools to help during and after your education",
        length: "20 - 29 months",
        timeCommitment: "Full Time",
        localeCommitment: "Both",
      },
      {
        name: "Stony Brook University",
        courseTitle: "BS Human Computer Interaction",
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
  iOS: {
    title: "UX Courses",
    description:
      "We aim to provide great courses for each track. some may require additional research, but we have extracted key information to easily compare each.",
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
          "UX / UI:\n Upfront $8,200\n monthly $1,099\n deferred tuition $875/mo\n climb credit loan $57-115*/mo",
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
          "Math, development, technical writing, interface programing and design, web standards, server language, deployment, web design, and more",
        support: "Provide tools to help during and after your education",
        length: "20 - 29 months",
        timeCommitment: "Full Time",
        localeCommitment: "Both",
      },
      {
        name: "Stony Brook University",
        courseTitle: "BS Human Computer Interaction",
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

// const maddness = () =>{
//   courseData[currentCourse].bootcamps.forEach((el) => {
//     names.push(el);

//   });
// }

//These structure the table
// const tableRow = "flex justify-between items-between open-sans border-2 border-solid border-red-500";
// const tableColumn = "flex-row w-full justify-between  open-sans border-2 border-black bg-blue-100";
// //These structure content styling
// const colHeader = "font-bold border-2 border-green-500";
// const tableContent = "";
// const rowHeader = "font-bold pr-6 border-2 border-blue-900 flex-grow";
// const row = "pr-6 border-2 border-gray-500";
// const mobile = false;
const tableRow =
  "flex justify-between items-between open-sans border-2 border-solid border-red-500";
const tableColumn =
  "flex-row w-full justify-between  open-sans border-2 border-black bg-blue-100";
//These structure content styling
const colHeader = "font-bold border-2 border-green-500";
const tableContent = "";
const rowHeader = "font-bold pr-6 border-2 border-blue-900 flex-grow";
const row = "pr-6 border-2 border-gray-500";
const mobile = false;
//24 px between each content
const Courses = () => {
  const [currentCourse, setCurrentCourse] = useState("UX");
  const keyLegend = [
    "name",
    "price",
    "content",
    "support",
    "length",
    "timeCommitment",
    "localeCommitment",
    // "courseTitle",
    // "link",
  ];

  return (
    <div>
      <Header />
      <div className="flex items-center justify-center mt-40">
        <div className="flex flex-col m-4 max-w-5xl">
          <section className="mt-4 mb-4">
            <h2 className="mb-1 text-2xl lg:text-3xl font-bold border-b-2 open-sans">
              {courseData[currentCourse].title}
            </h2>
            {/* There needs to be more text here below! */}
            <p className="flex-col items-center justify-center text-base mt-4 pb-24 leading-relaxed protoGray open-sans">
              {courseData[currentCourse].description}
            </p>
          </section>

          <section>
            <h2 className="mb-1 text-2xl lg:text-3xl text-black border-b-2 open-sans">
              Bootcamps
            </h2>

            {/* X dimension */}
            {mobile ? (
              <>
                <div class="flex mb-4">
                  <div class="w-1/4 bg-gray-500 h-12">
                    <p>{"♥ :)"}</p>
                  </div>
                  <div class="w-1/4 bg-gray-400 h-12">
                    Ironhack UX/UI Design https://www.ironhack.com/en
                  </div>
                  <div class="w-1/4 bg-gray-500 h-12">
                    Springboard UX/UI Design https://www.springboard.com/
                  </div>
                  <div class="w-1/4 bg-gray-400 h-12"></div>
                </div>
                <div className={`${tableRow}`}>
                  {/*Y dimension*/}
                  {/* <div className={tableColumn}> */}
                  <div className="flex-row w-full justify-between open-sans border-2 border-black bg-blue-100 flex-grow">
                    <p className={rowHeader}>Price</p>
                    <p className={rowHeader}>Content</p>
                    <p className={rowHeader}>Support</p>
                    <p className={rowHeader}>Length</p>
                    <p className={rowHeader}>Full time / Part time</p>
                    <p className={rowHeader}>Online / In Person</p>
                  </div>
                  {courseData[currentCourse].bootcamps.map((el) => {
                    return (
                      <div className={tableColumn}>
                        <div className={"flex-col" + " " + row}>
                          <p className="border-2 border-green-500 font-bold bg-gray-900">
                            {el.name}
                          </p>
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
              </>
            ) : (
              <div className="flex flex-row no-wrap">
                <div className="border-red-500 border-4 flex flex-col">
                  <h1>Bootcamps</h1>
                  {keyLegend.map((e) => (
                    <section className="flex border border-red-500 border-2 justify-between m-1 ">
                      <h2 className="border border-blue-500 border-1 w-1/6 text-center text-gray-900 italic text-lg">
                        {e}
                      </h2>
                      {courseData[currentCourse].bootcamps.map((el) => {
                        return e === "name" ? (
                          <div>
                            <p
                              className={`border w-1/4 text-center p-1 font-bold`}
                            >
                              {e[el]}
                            </p>
                            <a href={el[e]}>{el[e]}</a>
                          </div>
                        ) : (
                          <p
                            className={`border w-1/4 text-center p-1 ${
                              e === "name" ? "font-bold" : null
                            }`}
                          >
                            {el[e]}
                          </p>
                        );
                      })}
                    </section>
                  ))}
                </div>
              </div>
            )}
          </section>
          {/* //! BOTTOM OF TABLE HERE */}
          <section className="flex flex-row no-wrap">
            <h2 className="mb-1 text-2xl lg:text-3xl font-bold border-b-2 open-sans">
              Bootcamp vs University Courses
            </h2>
            <p className="text-gray-900">
              A university is the more traditional form of schooling. Often seen
              as more credible, but will cost a pretty penny. Many universities
              have online courses, but more often than not, they requiere you to
              attend on campus which will be restricitng based on your
              geographical location.
            </p>
            <p className="text-gray-900">
              A bootcamp is a new way of taking classes. Since they are newer,
              they are less credible than universities that have been around for
              a while. They are often online, and online schools have the
              advantage of updating and including the most up to date content
              more easily than a traditional university. But be careful, since
              it is easier to start an online course, many people opt in to do
              this in order to monetize people who may want to take shortcuts in
              getting an education.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Courses;
