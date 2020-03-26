import React, {useState} from 'react';
import {connect} from 'react-redux';
import BarGraph from './BarGraph';
import {Link, NavLink} from 'react-router-dom';
import data from './results/trackData';

//We need to have the endpoints from the backend
const trackInfo = {
	trackName: 'Fullstack',
	trackDescription: 'We live in the cloud. Like angles!',
	trackStrengths:
		'This Paragraph is about your strengths. We speak in Latin. This paragraph is about Participants Strengths n Aute magna laborum officia exercitation magna aliqua cillum. Nulla Lorem cupidatat dolor ullamco sit aliquip excepteur in. Aliqua sit qui labore ullamco tempor cillum laborum exercitation sit consequat excepteur sint. Irure deserunt mollit sunt tempor consequat ad consequat et culpa incididunt. Pariatur duis excepteur adipisicing reprehenderit dolor mollit pariatur do qui pariatur ad exercitation est nisi.',
	trackVideo: (
		<iframe
			width="560"
			height="315"
			src="https://www.youtube.com/embed/cc3Dofs_j0E"
			frameborder="0"
			allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
		></iframe>
	),
	otherTracks: [
		{id: '1', trackName: 'UX', trackDescription: 'Ours is the Fury'},
		{id: '2', trackName: 'iOS', trackDescription: 'We Do Not Sow'},
		{
			id: '3',
			trackName: 'Android Development',
			trackDescription: 'Unbowed, Unbent, Unbroken'
		},
		{id: '4', trackName: 'Data Science', trackDescription: 'Winter is Coming'}
	]
};

function Results({scores}) {
	const [selectedTrack, setSelectedTrack] = useState('fullstack');
	return (
		<>
			<div className="flex px-1 py-1 my-8 items-start mx-5 pt-2">
				<Link
					to="/quiz"
					className="bg-red-600 hover:bg-red-500 text-white mr-5 py-0.5 px-10 border border-red-700 rounded"
				>
					<i className="material-icons">arrow_left</i>
					Retake Quiz
				</Link>
			</div>
			<div className="flex justify-center items-center">
				<section className="flex-column m-10 border-black max-w-5xl">
					<h2 className="font-bold text-3xl text-black border-b pb-2">
						Results
					</h2>
					<div className="flex justify-center flex-column">
						<BarGraph />
					</div>
					<div className="container mt-5">
						<h2 className="font-bold text-xl">You Are</h2>
						<p>{trackInfo.trackStrengths}</p>
					</div>
					<div className="flex flex-col justify-center items-center">
						<h2 className="font-bold text-xl self-start border-b pb-2">
							Learn More
						</h2>
						{trackInfo.trackVideo}
					</div>
					<div>
						<h2 className="font-bold text-2xl text-black  pb-2">
							Discover Other Tracks
						</h2>
						{/*I need to axios all this info*/}
						{trackInfo.otherTracks.map(el => {
							return (
								<div className="font-bold">
									{el.trackName}
									<span className="text-gray-800 font-normal">
										{' '}
										- {el.trackDescription}
									</span>
								</div>
							);
						})}
					</div>
				</section>
			</div>
		</>
	);
}
const mapStateToProps = state => {
	return {scores: state.scores};
};
export default connect(mapStateToProps, {})(Results);
