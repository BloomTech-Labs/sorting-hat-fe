import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

function BarGraph({scores, tracks, top}) {
	return (
		<div className="w-4/5 h-full m-10 bargraph">
			<div className="flex h-56">
				<div className="flex justify-around w-full h-full">
					{Object.entries(scores).map((e, i) => (
						<div
							key={e[0]}
							className="flex flex-col-reverse items-center justify-start w-full h-full m-auto rounded-lg "
						>
							<div className="w-1/2 h-full ">
								<div
									className={`m-1 h-56 border-solid border-purple-900 rounded-lg duration-1000 w-full ease-in-out flex justify-center ${
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
								<section className="  flex justify-around w-full pl-8 m-auto x-axis text-center">
									<p className="questrial">{tracks[i].name}</p>
								</section>
							</div>
						</div>
					))}
				</div>
			</div>
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
