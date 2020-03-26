import React, {useState} from 'react';
import {connect} from 'react-redux';
import BarGraph from './BarGraph';
import {Link} from 'react-router-dom';
import data from './results/trackData';

//We need to have the endpoints from the backend

function Results({scores}) {
	const [selectedTrack, setSelectedTrack] = useState('fullstack');
	return (
		<>
			<div className="flex px-1 py-1 my-8 items-start">
				<Link
					to="/quiz"
					className="bg-blue-600 hover:bg-blue-700 text-white py-0.5 px-10 border border-red-700 rounded"
				>
					<i className="material-icons">arrow_left</i>
					Retake Quiz
				</Link>
			</div>
			{/*Header goes here*/}

			<section className="flex-column mx-10 border-black  bg-gray-100">
				<BarGraph />
				<div className="container mt-5">
					<ul className="flex">
						{Object.keys(scores).map(track => (
							<li onClick={() => setSelectedTrack(track)} className="p-4">
								{track}
							</li>
						))}
					</ul>
					<h2>{data[selectedTrack].name}</h2>
					<p>{data[selectedTrack].description}</p>
				</div>
				<div className="container mt-5">
					<h2>You Are</h2>
					<p>
						This paragraph is about Participants Strengths n Aute magna laborum
						officia exercitation magna aliqua cillum. Nulla Lorem cupidatat
						dolor ullamco sit aliquip excepteur in. Aliqua sit qui labore
						ullamco tempor cillum laborum exercitation sit consequat excepteur
						sint. Irure deserunt mollit sunt tempor consequat ad consequat et
						culpa incididunt. Pariatur duis excepteur adipisicing reprehenderit
						dolor mollit pariatur do qui pariatur ad exercitation est nisi.
					</p>
				</div>
				<div>
					<h2>Learn More</h2>
					<p>Your Video is here</p>
				</div>
				<div>
					<button className="px-4 py-2 mx-1 font-bold text-white bg-blue-500 rounded hover:bg-blue-400">
						View Courses
					</button>
				</div>
				<div>
					<h2>Discover Other Tracks</h2>
					{/*I need to axios all this info*/}
					<p>
						Full Stack<span>Create anything on the internet</span>
					</p>
				</div>
			</section>
			<div className="flex"></div>
		</>
	);
}
const mapStateToProps = state => {
	return {scores: state.scores};
};
export default connect(mapStateToProps, {})(Results);
