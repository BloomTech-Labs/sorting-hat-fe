import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

function BarGraph({scores, tracks, top}) {
	// console.log({ top });
	const data = [];
	tracks.map((track) => {
		data.push({track: track.name, score: scores[track.id]});
	});

	// console.log({ scores });
	return (
		<div className="w-4/5 h-full m-10 bargraph">
			<div className="flex h-56">
				<div className="flex justify-around w-full ">
					{Object.entries(scores).map((e) => (
						<div
							key={e[0]}
							className="flex flex-col-reverse justify-start w-full h-full m-auto rounded-lg "
						>
							<div
								className={`m-1 h-full border-solid border-purple-900 rounded-lg duration-1000 w-1/2 ease-in-out flex justify-center ${
									top.id == e[0]
										? 'bg-purple-900 text-purple-200'
										: 'bg-purple-100'
								} `}
								style={{
									height: `${e[1] * 3}%`,
								}}
							>
								{`${Math.round(e[1] * 3)}%`}
							</div>
						</div>
					))}
				</div>
			</div>
			<section className="flex justify-around w-full pl-8 m-auto x-axis">
				{tracks.map((track) => (
					<p key={track.id} className={`w-1/${tracks.length} text-center`}>
						{track.name}
					</p>
				))}
			</section>
		</div>
	);
}
const mapStateToProps = (state) => {
	return {
		scores: state.scores,
		tracks: state.tracks,
	};
};
export default withRouter(connect(mapStateToProps, {})(BarGraph));
