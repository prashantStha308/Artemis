import useTimeStore, { useTimeLoop } from "@/store/time.store";

function getAngles(date: Date) {
	const ms = date.getMilliseconds();
	const seconds = date.getSeconds() + ms / 1000;
	const minutes = date.getMinutes() + seconds / 60;
	const hours = (date.getHours() % 12) + minutes / 60;

	return {
		hourAngle: hours * 30,
		minuteAngle: minutes * 6,
		secondAngle: seconds * 6,
	};
}

interface IClockOptions {
	hourStokeWidth?: number,
	minuteStokeWidth?: number,
	secondStokeWidth?: number,
	circleStrokeWidth?: number	
}

interface IClockProps {
	size?: number;
	radius?: number;
	onClick?: () => void;
	options?: IClockOptions
};


export default function Clock({
	size = 80, radius = 25,

	options = {
		hourStokeWidth: 4,
		minuteStokeWidth: 3,
		secondStokeWidth: 2,
		circleStrokeWidth: 4
	},

	onClick
}: IClockProps){

	useTimeLoop();
	const now = useTimeStore(store => store.now);
	const angles = getAngles(now);

	const center = size / 2;

	const hourLength = radius * 0.6;
	const minuteLength = radius * 0.8;
	const secondLength = radius * 0.95;
	const strokeScale = radius / 20;

	return(
		<svg
			width={size} height={size} xmlns="http://www.w3.org/2000/svg"
			onClick={onClick}
			
			className={onClick ? "cursor-pointer" : undefined}
		>
			<circle cx={center} cy={center} r={radius} fill="none" stroke="#F4A8FF" strokeWidth={options.circleStrokeWidth! * strokeScale}/>

			{/*hour*/}
			<line
				x1={center} y1={center}
				x2={center} y2={center - hourLength}

				strokeLinecap="round"
				stroke="#3C0366" strokeWidth={ options.hourStokeWidth! * strokeScale}
				
				style={{ transform: `rotate(${angles.hourAngle}deg)`, transformOrigin: `${center}px ${center}px` }}
			/>

				{/*minute*/}
			<line
				x1={center} y1={center}
				x2={center} y2={center - minuteLength}
				
				strokeLinecap="round"
				stroke="#F0B13B" strokeWidth={options.minuteStokeWidth! * strokeScale}
				
				style={{ transform: `rotate(${angles.minuteAngle}deg)`, transformOrigin: `${center}px ${center}px` }}
			/>

				{/*Second*/}
			<line x1={center} y1={center}
				x2={center} y2={center - secondLength}
			
				strokeLinecap="round"
				stroke="red" strokeWidth={options.secondStokeWidth! * strokeScale}
				
				style={{ transform: `rotate(${angles.secondAngle}deg)`, transformOrigin: `${center}px ${center}px` }}
			/>

			<circle cx={center} cy={center} r={3 * strokeScale} fill="black"/>
		</svg>
	)
}