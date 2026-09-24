import soundManager from "@/lib/SoundManager";
import useLoadingStore from "@/store/loading.store";
import useMusicStore, { togglePlayState } from "@/store/musicStore/music.store"
import { motion } from "motion/react"


export default function VinylDisk(){

	const isPlaying:boolean = useMusicStore( store => store.isPlaying);
	const start:boolean = useLoadingStore( store => store.start);
	const delay = 0.15;


	return (
		<motion.div
			initial={{
				scale: 2
			}}
			animate={
				start ?
				{ scale: 1 }
					:
				{scale: 2}}
			transition={{
				duration: 0.8,
				ease: "easeOut",
				delay: delay,
			}}
		>
			<section
				onMouseDown={() => {
					soundManager.makeSound("click2")
					togglePlayState();
				} }
				onMouseUp={() => togglePlayState() }

				className=" isolate h-72 md:h-96 rounded-full aspect-square bg-amber-500 object-cover object-center flex justify-center items-center outline-2 outline-purple-500 outline-offset-4 overflow-hidden"
				style={{
				backgroundImage: `url("/images/profile.png")`,
				backgroundSize: "100%",
				backgroundRepeat: "no-repeat",
				animation: "spin 10s linear infinite",
				animationPlayState: isPlaying ? "running" : "paused",
				}}
			>

				<motion.div
					initial={{x:-500}}
					animate={ start? {x: 500} : {x: -500}}

					transition={{
						duration: 2,
						delay: 3 + delay,
						repeat: Infinity,
						repeatDelay: 3
					}}

					className="absolute z-20 inset-0 bg-amber-400 h-full w-1/6 pointer-events-none blur-2xl"
				/>

				<div className="z-50 aspect-square h-1/6 rounded-full bg-purple-900 border border-white outline-2 outline-white outline-offset-2" />
			</section>
		</motion.div>
	)
}