import React from 'react';
import { Link } from 'react-router-dom';
import ArrowPurpleL from '../img/ArrowPurpleL.svg';
import ArrowWhiteR from '../img/ArrowWhiteR.svg';

const About = () => {
	return (
		<div className="flex items-center justify-center">
			<div className="flex flex-col max-w-5xl">
				<section className="pb-2 mt-4 mb-4">
					<h2 className="mb-1 text-5xl font-bold text-black border-b-2 noto-sans">About</h2>
					<p className="flex-col items-center justify-center mt-4 mb-6 leading-relaxed protoGray noto-sans">
						Tech Sorting Hat was inspired and built by tech students. We aim to have a fun and informative
						quiz to help potential tech students make a decision about their future careers.
					</p>
				</section>

				<section>
					<h2 className="mb-1 text-5xl text-black border-b-2 fira-sans">Philosophy</h2>
					<p className="flex-col items-center justify-center mt-4 mb-6 leading-relaxed protoGray noto-sans">
						We wanted to showcase the different industries in the tech field for people who are seeking an
						informed decision on which subsection to choose. We threw away technical jargon in order to show
						empathy to those outside the industry, and to quiz them based on their personality, their
						technical capabilities. All people are capable of pursuing a career in the tech field, and it is
						our job to help find their niche based on their personality.
					</p>
				</section>

				<section className="container mt-5">
					<h2 className="mb-1 text-5xl text-black border-b-2 fira-sans">How</h2>
					<p className="flex-col items-center justify-center mt-4 mb-6 leading-loose protoGray noto-sans">
						We surveyed 70 current tech students, interviewed 13 tech students, and 2 tech instructors. We
						discovered that all tracks in the tech field are extremely similar, but subtle differences
						between each emerged from analyzing the data. We created questions that do not deal with tech,
						but relate to how people in different tech fields think. Keep in mind, anyone has the capability
						to succeed in any career, and this quiz should not hinder someones passion for a particular tech
						field.
					</p>
				</section>

				<section className="flex flex-row justify-between">
					<div className="flex justify-start py-1 pt-2 pr-1 my-8 mr-5 ">
						<Link
							to="/quiz"
							className={`border-2 border-purple-100 hover:border-purple-900  flex p-2 px-8 rounded-lg justify-center items-center btnRound`}
						>
							<img src={ArrowPurpleL} alt="leftArrow" size="1.3rem" className="pr-4 m-1" />{' '}
							<span className="text-purple-100 questrial">Take Quiz</span>
						</Link>
					</div>
					<div className="flex justify-end py-1 pt-2 pl-1 my-8 ml-5">
						<Link
							to="/courses"
							className="flex align-baseline justify-between bg-purple-900 hover:bg-purple-100 text-white py-0.5 px-4 border border-purple-900 rounded btnRound "
						>
							<span className="flex items-center justify-end questrial">View Courses</span>
							<img src={ArrowWhiteR} alt="rightArrow" size="1.3rem" className="pl-4 m-1" />{' '}
						</Link>
					</div>
				</section>
			</div>
		</div>
	);
};

export default About;
