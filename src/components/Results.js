import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import VectorImage from '../img/Vector.svg';
import BarGraph from './BarGraph';
//We need to have the endpoints from the backend

function Results({scores, tracks}) {
	const [selectedTrack, setSelectedTrack] = useState({});

	useEffect(() => {
		let highest = {track: null, score: 0};
		for (let score in scores) {
			if (scores[score] > highest.score) {
				highest = {track: score, score: scores[score]};
			}
		}
		setSelectedTrack(tracks.find((track) => track.id == highest.track));
	}, []);

	if (!tracks.length) {
		return <Redirect to="/" />;
	}
	return (
		<>
			{/*Retake Quiz Button*/}
			<div className="noto-sans justify-center p-1 my-8 mx-5 pt-2 max-w-sm">
				<Link
					to="/quiz"
					className="text-lg text-black mr-5 py-0.5 px-10  flex align-baseline"
				>
					<img src={VectorImage} alt="Arrow left" className="m-1" />
					<p className="questrial p-1">Retake Quiz</p>
				</Link>
			</div>
			{/*Results Body*/}
			<div className="noto-sans flex justify-center items-center">
				<section className="noto-sans flex-column m-10 border-black max-w-5xl">
					<h2 className="font-bold text-5xl text-black border-b-2 ">Results</h2>
					<div className="text-lg questrial flex justify-center flex-column">
						<BarGraph top={selectedTrack} setTrack={setSelectedTrack} />
					</div>

					<div className="container mt-5">
						<h2 className="fira-sans font-bold text-5xl border-b-2">
							{'  '} {selectedTrack.name} Traits
						</h2>
						{/* This View Courses button needs to be inline with the H2 above ↑ */}
						{/* <div className="inline-flex px-1 py-1 my-8 mx-5 pt-2">
							<Link
								to="/courses"
								className="flex bg-purple-900 hover:bg-purple-100 text-white mr-5 py-0.5 px-10 border border-purple-900 rounded align-baseline"
							>
								<i className="material-icons">arrow_left</i>
								<span className="questrial">View Courses</span>
							</Link>
						</div> */}

						<p className=" protoGray noto-sans py-3">
							{selectedTrack.strengths}
						</p>
					</div>
					<div className="noto-sans flex-col justify-center items-center">
						<h2 className=" fira-sans font-bold text-5xl self-start ">
							Learn More
						</h2>
						<div className="flex justify-center py-2">
							<iframe
								width="560"
								height="315"
								src={selectedTrack.link}
								frameBorder="0"
								allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
							></iframe>
							{/* {selectedTrack. ? trackInfo.trackVideo : } */}
						</div>
					</div>
					<div>
						<h2 className="fira-sans font-bold text-5xl text-black border-b-2  mb-1">
							Discover Other Tracks
						</h2>
						{/*I need to axios all this info*/}
						{tracks.map((el) => {
							if (el.id != selectedTrack.id) {
								return (
									<div
										key={el.id}
										className=" resultsLinkColor font-bold py-1"
										onClick={() => setSelectedTrack(el)}
									>
										{el.name}
										<span className="resultsLinkColor font-normal">
											{' '}
											- {el.shortDesc}
										</span>
									</div>
								);
							}
						})}
					</div>
				</section>
			</div>
			{/*Bottom Nav Bar */}
			<div className="flex flex-row justify-between">
				{/*Retake Quiz Button */}
				<div className="noto-sans justify-center p-1 my-8 mx-5 pt-2 max-w-sm">
					<Link
						to="/quiz"
						className="text-lg hover:bg-purple-100 text-black mr-5 py-0.5 px-10  flex align-baseline"
					>
						<img src={VectorImage} alt="Arrow left" className="m-1" />
						<p className="questrial p-1">Retake Quiz</p>
					</Link>
				</div>
				{/*View Courses Button*/}
				<div className="flex justify-center px-1 py-1 my-8 mx-5 pt-2">
					<Link
						to="/courses"
						className="flex bg-purple-900 hover:bg-purple-100 text-white mr-5 py-1 px-10 border border-purple-900 rounded align-baseline"
					>
						<span className="questrial">View Courses</span>
						<i className="material-icons">arrow_right</i>
					</Link>
				</div>
			</div>
		</>
	);
}

//Redux Interface
const mapStateToProps = (state) => {
	return {
		scores: state.scores,
		tracks: state.tracks,
	};
};
export default connect(mapStateToProps, {})(Results);
