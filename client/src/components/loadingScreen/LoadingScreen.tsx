import { AnimatePresence, motion, type Transition } from "motion/react";
// Lib
import soundManager from "@/lib/SoundManager";
// stores
import useLoadingStore, { setStart } from "@/store/loading.store";
import useMusicStore, { toggleMuted } from "@/store/musicStore/music.store";
// components
import LoadingPageButton from "../buttons/LoadingPageButton";
import SparklingLoader from "./SparklingLoader";
import Switch from "../ui/widgets/Switch";
// addons (move to sections accordingly)


const transitions: Transition = {
	duration: 0.6, 
	ease: "easeInOut"
}

export default function LoadingScreen(){

	const loadingValue = useLoadingStore(store => store.loadingValue);
	const isMuted = useMusicStore(store => store.isMuted);

	const isLoading = useLoadingStore(store => store.isLoading); //will be used later to disable button


	return(

		<motion.div

			exit={{
				y: -window.innerHeight
			}}

			transition={{
				duration: 0.5,
				ease: "easeInOut",
			}}

			className="z-[1000] isolate absolute top-0 left-0 bottom-0 right-0 inset-0 bg-body overflow-hidden"
		>

			{/*Text section*/}
			<motion.section
				layout
				className="relative h-full w-full z-10 flex flex-col gap-6 justify-center items-center text-amber-100"
			>
				<motion.div layout className="relative flex flex-col gap-1 px-8 text-center w-full max-w-md mx-auto">
					{/* Icon */}
					<div
						className="flex w-full h-fit justify-center"
					>
						<img
							src="/images/white.png" alt="portrait.svg"
							className="text-white aspect-square object-contain w-26"

						/>
					</div>

					{/* h1 stack */}
					<motion.div
						layout
						transition={{ layout: { duration: 0.5, ease: "easeInOut" } }}
						className="relative w-full grid"
					>
						<AnimatePresence mode="popLayout">
							<motion.h1
								key={isLoading ? "loading-title" : "loaded-title"}

								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								
								transition={transitions}
								
								style={{ gridArea: "1 / 1" }}
								className="w-full text-lg md:text-xl text-center font-semibold text-amber-300"
							>
								{
									isLoading ? "Please stand by" : "The gnomes are waiting for you"
								}
							</motion.h1>
						
						</AnimatePresence>
					
					</motion.div>

					{/* subtitle stack */}
					<motion.div
						layout
						className="relative w-full grid"
					>
						<AnimatePresence mode="popLayout">
							
							<motion.span
								key={isLoading ? "loading-sub" : "loaded-sub"}

								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								
								transition={{ ...transitions, delay: 0.1 }}
								
								style={{ gridArea: "1 / 1" }}
								className="w-full text-sm md:text-base"
							>
								{ isLoading
									? "My gnomes are cooking up some special soup for you <33"
									: "My gnomes have cooked a beautiful blend of veggies with an alluring aroma, I hope it's enough for your serving <33"
								}

							</motion.span>

						</AnimatePresence>

					</motion.div>

				</motion.div>

				{/*Loader*/}
				<motion.div
					layout
					className="flex flex-col justify-center items-center gap-2"
				>
					<SparklingLoader loadingValue={loadingValue} />

					<span className="text-amber-300 text-xs"> {loadingValue}% </span>
				</motion.div>

				{/*button*/}
				<motion.div
					className="relative w-fit h-fit"
				>

					<LoadingPageButton
						width={"w-56"}
						disabled={isLoading}

						onClick={() => {
							setStart(true);
							soundManager.makeSfxSound("click2")
						}}

						onMouseEnter={()=>{
							soundManager.makeSfxSound("hover2")
						}}
					>
						Click to Enter
					</LoadingPageButton>
				</motion.div>


				{/* Preference section */}

				<motion.section
					className="isolate relative flex flex-col gap-1 isolate px-4 py-3 rounded-md bg-white/15 text-purple-50 text-xs"
				>

					<motion.div
						className="absolute z-50 w-full left-0 bg-body pointer-events-none"

						style={{
							height: "200%",
							top: "-50%"
						}}

						initial={{y:0}}
						animate={ !isLoading ? {y: "200%", display: "none"} : {y:0} }

						transition={{
							duration: 0.8,
							ease: "easeInOut",
						}}

					/>

					<Switch
						label="Mute Audio"
						onChange={()=>{
							toggleMuted();

							soundManager.makeSfxSound("click")
						}}
						checked={isMuted}
					/>
				</motion.section>

			</motion.section>

		</motion.div>
	)
}