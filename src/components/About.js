import React from 'react';
// import { Link } from 'react-router-dom';

const About = () => {
	return (
		<div>
			<section className="">
				<h2 className=" fira-sans">About</h2>
				<p className="protoGray noto-sans">
					Tech Sorting Hat was inspired and built by tech students. We aim to
					have a fun and informative quiz to help potential tech students make a
					decision about their future careers.
				</p>
			</section>

			<section className="">
				<h2 className=" fira-sans">Philosophy</h2>
				<p className="protoGray noto-sans">
					We wanted to showcase the different industries in the tech field for
					people who are seeking an informed decision on which subsection to
					choose. We threw away technical jargon in order to show empathy to
					those outside the industry, and to quiz them based on their
					personality, their technical capabilities. All people are capable of
					pursuing a career in the tech field, and it is our job to help find
					their niche based on their personality.
				</p>
			</section>

			<section className="">
				<h2 className="fira-sans font-bold text-xl p-3 border-b-2">How</h2>
				<p className="protoGray noto-sans py-3">
					We surveyed 70 current tech students, interviewed 13 tech students,
					and 2 tech instructors. We discovered that all tracks in the tech
					field are extremely similar, but subtle differences between each
					emerged from analyzing the data. We created questions that do not deal
					with tech, but relate to how people in different tech fields think.
					Keep in mind, anyone has the capability to succeed in any career, and
					this quiz should not hinder someones passion for a particular tech
					field.
				</p>
			</section>
		</div>
	);
};

export default About;
