import React, {useRef} from 'react';

export default function ProgressBar({progress}) {
	const color = useRef('red-600');
	if (progress === 1) {
		color.current = 'green-400';
	}
	return (
		<div className="flex justify-around">
			<div className="relative h-4 w-11/12 border border-solid border-black rounded-lg m-auto flex">
				<div
					className={`bg-${color.current} h-full border-r border-solid border-black rounded-lg duration-700 ease-in-out `}
					style={{width: `${progress * 100}%`}}
				/>
			</div>
			<span className={`m-auto text-${color.current}`}>{`${progress *
				100}%`}</span>
		</div>
	);
}
