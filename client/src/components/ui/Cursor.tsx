import React, { useState, useRef, useEffect } from "react";
// import Diamond from "../icons/Diamond";
import Exclamation from "../icons/Exclamation";
import DefaultCursor from "../icons/DefaultCursor";

const cursorVarient = {
	move: <DefaultCursor size={20} />,
	click: <Exclamation size={20} />,
};

// https://webdesign.tutsplus.com/javascript-sparkle-cursor--cms-109158t

const trialColors = [
  "#FFD700",
  "#FFC300",
  "#FF8C00",
  "#FF5F1F",
  "#FF4500",
  "#FF2400",
  "#E23E00",
  "#B22222",
];

type CursorKey = keyof typeof cursorVarient;

// interface IPosition {
// 	x:number,
// 	y:number
// }

// interface ITrailPoint extends IPosition {
// 	id: number;
// }


// function Sparkle({ pos }: {pos: IPosition} ){
// 	const pointRef = useRef(null);

// 	const minSize = (1/100) * window.innerHeight;
// 	const maxSize = (2/100) * window.innerHeight;

// 	const [{ color, size, angle, distance }] = useState(() => ({
// 		color: trialColors[Math.floor(Math.random() * trialColors.length)],
// 		size: Math.random() * maxSize + minSize,
// 		angle: Math.random() * Math.PI * 2,
// 		distance: Math.random() * 50 + 10,
// 	}));


// 	return(
// 		<div
// 			ref={pointRef}
// 			style={{
// 				borderRadius: "50%",
// 				position: "fixed",
// 				top: 0,
// 				left: 0,
// 				width: `${size}px`,
// 				height: `${size}px`,
// 				backgroundColor: color,
// 				boxShadow: `0 0 10px ${color}`,
// 				"--x": `${pos.x}px`,
// 				"--y": `${pos.y}px`,
// 				"--dx": `${Math.cos(angle) * distance}px`,
// 				"--dy": `${Math.sin(angle) * distance}px`,
// 				animation: "trail 1s cubic-bezier(0.4, 0, 0.2, 1) forwards",
// 			} as React.CSSProperties}
// 		>
// 		</div>
// 	)
// }

export default function Cursor() {

	const cursorRef = useRef<HTMLDivElement | null>(null);
	const [cursorState, setCursorState] = useState<CursorKey>("move");
	const posRef = useRef({ x: 0, y: 0 });

	// const idRef = useRef(0);
	// const [trialParticles, setTrialParticles] = useState< ITrailPoint[] >([]);


	useEffect(() => {
		const handleMove = (e: MouseEvent) => {
			const currentRef = cursorRef.current;
			
			if (!currentRef) return;
			
			posRef.current = { x: e.clientX, y: e.clientY };

			currentRef.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) `;

			// handleCursorTrial(e);
		};

		// const handleCursorTrial = (e: MouseEvent) => {
		// 	const id = idRef.current++;
		// 	setTrialParticles(prev => [...prev, { id, x: e.clientX, y: e.clientY }]);

		// 	setTimeout(() => {
		// 		setTrialParticles(prev => prev.filter(p => p.id !== id));
		// 	}, 1000);
		// };

		const handleMouseDown = () => {
			setCursorState("click");

			if(!cursorRef.current || !posRef.current) return;

			cursorRef.current.style.transform = `translate3d(${posRef.x}px, ${posRef.y}px, 0) translate(-50%, -50%)`;
	}

		const handleMouseUp = () => setCursorState("move");

		window.addEventListener("mousemove", handleMove);
		window.addEventListener("mousedown", handleMouseDown);
		window.addEventListener("mouseup", handleMouseUp);

		return () => {
			window.removeEventListener("mousemove", handleMove);
			window.removeEventListener("mousedown", handleMouseDown);
			window.removeEventListener("mouseup", handleMouseUp);
		};
	}, []);


	return (
		<>
{/*			<div className="hidden lg:block fixed inset-0 z-[9999998] pointer-events-none">
				{trialParticles.map((p) => (
					<Sparkle key={p.id} pos={{ x: p.x, y: p.y }} />
				))}
			</div>*/}

			<div
				ref={cursorRef}
				className=" absolute h-fit w-fit top-0 left-0 z-[9999999] text-amber-500 pointer-events-none"
			>
				{cursorVarient[cursorState]}
			</div>
		</>
	);
}