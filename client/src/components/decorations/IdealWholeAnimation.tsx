import useLoadingStore from "@/store/loading.store";
import { motion } from "motion/react"

export default function IdealWholeAnimation(){

	const start = useLoadingStore(store => store.start);

	const leftThreshold = window.innerWidth + 200;
	const rightThreshold = -(window.innerWidth + 200);

	const delay = 0.5;

	return(

		<div
			className="absolute w-screen h-full flex  top-0 rounded-xl overflow-hidden"
		>
			<motion.div

				initial={{
					x: leftThreshold
				}}

				animate={ start ? { x: rightThreshold } : { x: leftThreshold } }

				transition={{
					duration: 1.3,
					ease: "linear",
					delay: delay
				}}

				className="relative h-full"
			>
				<div
					className="absolute top-1/2 -translate-y-1/2 rotate-15 bg-purple-400 h-[150dvh] w-52"
				/>
			</motion.div>


			<motion.div

				initial={{
					x: leftThreshold
				}}

				animate={ start ? { x: rightThreshold } : { x: leftThreshold } }

				transition={{
					duration: 1.3,
					ease: "linear",
					delay: delay + 0.1
				}}

				className="relative h-full"
			>
				<div
					className="absolute top-1/2 -translate-y-1/2 rotate-15 bg-white h-[150dvh] w-36"
				/>
			</motion.div>


			<motion.div

				initial={{
					x: rightThreshold
				}}

				animate={ start ? { x: leftThreshold } : { x: rightThreshold } }

				transition={{
					duration: 0.9,
					ease: "linear",
					delay: delay + 0.15
				}}

				className="relative h-full"
			>
				<div
					className="absolute top-1/2 -translate-y-1/2 rotate-15 bg-purple-400 h-[150dvh] w-24"
				/>
			</motion.div>
		</div>

	)
}