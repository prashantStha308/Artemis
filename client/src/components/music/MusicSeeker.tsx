import { useMemo } from "react";

function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
	const rad = (angleDeg * Math.PI) / 180;
	return {
		x: cx + r * Math.cos(rad),
		y: cy - r * Math.sin(rad),
	};
}

export default function MusicSeeker( { diskWidth, diskHeight } : any){

	const arc = useMemo(() => {
		if (!diskWidth || !diskHeight) return null;

		const padding = 60;
		const svgWidth = diskWidth + padding * 2;
		const svgHeight = diskHeight + padding * 2;

		const cx = svgWidth / 2;
		const cy = svgHeight / 2;
		const r = diskWidth / 2 + 10;

		const startPt = polarToCartesian(cx, cy, r, 270); // bottom
		const endPt = polarToCartesian(cx, cy, r, 180);   // left


		const d = `M${startPt.x},${startPt.y} Q${cx - r},${cy + r} ${endPt.x},${endPt.y}`;

		return { svgWidth, svgHeight, startPt, d };
	}, [diskWidth, diskHeight]);

	return(
		<section>
			{arc && (
				<svg
					id="slider"
					width={arc.svgWidth}
					height={arc.svgHeight}
					style={{
						position: 'absolute',
						left: '50%',
						top: '50%',
						transform: 'translate(-50%, -50%)',
						pointerEvents: 'none',
					}}

					className="text-amber-500"
				>
					<circle id="thumb" cx={arc.startPt.x} cy={arc.startPt.y} stroke="#fff" fill="#fff" r="10" />
					<path id="curve" stroke="currentColor" strokeWidth="4" fill="none" d={arc.d} />
				</svg>
			)}
		</section>
	)
}