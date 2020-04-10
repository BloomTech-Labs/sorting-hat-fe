import React from 'react';
import Particles from 'react-particles-js';

function ParticleTesting() {
	const particleOpt = {
		particles: {
			move: {
				speed: 0.8,
			},
			color: {
				value: '#44337a',
			},
			number: {
				value: 150,
				density: {
					enable: true,
					value_area: 800,
				},
			},
			size: {
				value: 5,
				random: true,
			},
		},
		interactivity: {
			detect_on: 'canvas',
			events: {
				onhover: {
					enable: false,
					mode: 'repulse',
				},
				onclick: {
					enable: true,
					mode: 'repulse',
				},
				resize: true,
			},
			line_linked: {
				enable: false,
				distance: 300,
				color: '#FFFF00',
				opacity: 1.0,
				width: 2,
			},
			modes: {
				grab: {
					distance: 400,
					line_linked: {
						opacity: 100,
					},
				},
				repulse: {
					distance: 200,
					duration: 0.4,
				},
				bubble: {
					distance: 100,
					size: 10,
				},
			},
		},
		retina_detect: true,
	};

	return (
		// <div className="fixed top-0 left-0 w-full h-full particle-wrapper">
		<Particles params={particleOpt} className="absolute w-full h-full" />
		// </div>
	);
}

export default ParticleTesting;
// line_linked: {
// 	enable: false,
// 	distance: 120,
// 	color: '#1129FF',
// 	opacity: 0,
// 	width: 1,
// },
//https://www.npmjs.com/package/react-particles-js
// const particleOpt = {
//   //   polygon: {
//   //     enable: true,
//   //     type: "inside",
//   //     move: {
//   //       radius: 10
//   //     },
//   //     url: "path/to/svg.svg"
//   //   }
//   particles: {
//     number: {
//       value: 150,
//       density: {
//         enable: true,
//         value_area: 800
//       }
//     }
//   }
// };

// export default ParticleTesting;
// export default connect(null, {})(Landing);
