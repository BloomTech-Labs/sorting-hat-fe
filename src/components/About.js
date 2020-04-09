import React from 'react';
import {Link} from 'react-router-dom';

const About = () => {
	return (
		<div className="flex justify-center items-center">
			<div className="flex flex-col max-w-5xl">
				<section className="mt-4 mb-4 pb-2 ">
					<h2 className="noto-sans font-bold text-5xl text-black border-b-2  mb-1">
						About
					</h2>
					<p className="protoGray noto-sans flex-col justify-center items-center leading-relaxed mt-4">
						Tech Sorting Hat was inspired and built by tech students. We aim to
						have a fun and informative quiz to help potential tech students make
						a decision about their future careers.
					</p>
				</section>

				<section className="">
					<h2 className="fira-sans text-5xl text-black border-b-2 mb-1">
						Philosophy
					</h2>
					<p className="protoGray noto-sans flex-col justify-center items-center leading-relaxed mt-4">
						We wanted to showcase the different industries in the tech field for
						people who are seeking an informed decision on which subsection to
						choose. We threw away technical jargon in order to show empathy to
						those outside the industry, and to quiz them based on their
						personality, their technical capabilities. All people are capable of
						pursuing a career in the tech field, and it is our job to help find
						their niche based on their personality.
					</p>
				</section>

				<section className="container mt-5">
					<h2 className="fira-sans text-5xl text-black border-b-2  mb-1">
						How
					</h2>
					<p className="protoGray noto-sans flex-col justify-center items-center leading-loose mt-4">
						We surveyed 70 current tech students, interviewed 13 tech students,
						and 2 tech instructors. We discovered that all tracks in the tech
						field are extremely similar, but subtle differences between each
						emerged from analyzing the data. We created questions that do not
						deal with tech, but relate to how people in different tech fields
						think. Keep in mind, anyone has the capability to succeed in any
						career, and this quiz should not hinder someones passion for a
						particular tech field.
					</p>
				</section>
				<div className="flex justify-center px-1 py-1 my-8 mx-5 pt-2">
					<Link
						to="/courses"
						className="flex bg-purple-900 hover:bg-purple-100 text-white mr-5 py-0.5 px-10 border border-purple-900 rounded align-baseline"
					>
						<i className="material-icons">arrow_left</i>
						<span className="questrial">View Courses</span>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default About;
