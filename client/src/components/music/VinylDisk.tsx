import soundManager from "@/lib/SoundManager";
import useLoadingStore from "@/store/loading.store";
import useMusicStore, { togglePlayState } from "@/store/musicStore/music.store"
import { motion } from "motion/react"
import { useMemo } from "react"
import {useResizeObserver} from "use-resize-observer"

function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
	const rad = (angleDeg * Math.PI) / 180;
	return {
		x: cx + r * Math.cos(rad),
		y: cy - r * Math.sin(rad),
	};
}

// Switch to Web Audio API to have much granular controls
export default function VinylDisk() {

	const isPlaying: boolean = useMusicStore(store => store.isPlaying);
	const start: boolean = useLoadingStore(store => store.start);


	const delay = 0.15;
	const { ref: diskRef, width: diskWidth, height: diskHeight } = useResizeObserver<HTMLDivElement>();

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

	return (
		<section className="relative flex justify-center items-center">
			<motion.div

				initial={{ scale: 2 }}
				animate={start ? { scale: 1 } : { scale: 2 }}
				
				transition={{
					duration: 0.8,
					ease: "easeOut",
					delay
				}}
			>
				<section
					ref={diskRef}
                    onPointerDown={() => {
                        soundManager.makeSound("click2")
                        togglePlayState();
                    } }

					className="isolate h-72 md:h-80 rounded-full aspect-square bg-amber-500 object-cover object-center flex justify-center items-center outline-2 outline-purple-500 outline-offset-4 overflow-hidden"
					style={{
						backgroundImage: `url("/images/profile.png")`,
						backgroundSize: "100%",
						backgroundRepeat: "no-repeat",
						animation: "spin 10s linear infinite",
						animationPlayState: isPlaying ? "running" : "paused",
					}}
				>

					<motion.div
						initial={{ x: -500 }}
						animate={start && isPlaying ? { x: 500 } : { x: -500 }}
						transition={{ 
							duration: 2,
							delay: 3 + delay,
							repeat: start && isPlaying ? Infinity : 0,
							repeatDelay: start && isPlaying ? 5 : Infinity
						}}

						className="absolute z-20 inset-0 bg-amber-400 h-full w-1/6 pointer-events-none blur-2xl"
					/>

					<div className="z-50 aspect-square h-1/6 rounded-full bg-purple-900 border border-white outline-2 outline-white outline-offset-2" />
				</section>

			</motion.div>

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