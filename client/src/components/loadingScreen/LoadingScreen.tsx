import { AnimatePresence, motion } from "motion/react";

import VerticallyStackingButton from "../buttons/VerticallyStackingButton";
import SparklingLoader from "./SparklingLoader";
import useLoadingStore, { setStart } from "@/store/loading.store";
import soundManager from "@/lib/SoundManager";

export default function LoadingScreen(){

	const loadingValue = useLoadingStore(store => store.loadingValue);
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

			className="z-[1000] isolate absolute top-0 left-0 bottom-0 right-0 inset-0 bg-purple-900 overflow-hidden"
		>
			<motion.section
				layout
				className="relative h-full w-full z-10 flex flex-col gap-6 justify-center items-center text-amber-100"
			>
				<motion.div layout className="relative flex flex-col gap-1 px-8 text-center w-full max-w-md mx-auto">
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
								transition={{ duration: 0.6, ease: "easeInOut" }}
								style={{ gridArea: "1 / 1" }}
								className="w-full text-lg md:text-xl text-center font-semibold text-amber-300"
							>
								{ isLoading ? "Please stand by" : "The gnomes are waiting for you" }
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
								transition={{ duration: 0.6, ease: "easeInOut", delay: 0.1 }}
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

				<motion.div
					layout
					className="flex flex-col justify-center items-center gap-1"
				>
					<SparklingLoader loadingValue={loadingValue} />
					<span className="text-xs" > Loading - <span className="text-amber-300"> {loadingValue}% </span> </span>
				</motion.div>

				<motion.div layout>
					<VerticallyStackingButton
						width={"w-56"}
						disabled={isLoading}
						onClick={() => {
							setStart(true);
							soundManager.makeSound("click2")
						}}

						onMouseEnter={()=>{
							soundManager.makeSound("hover2")
						}}
					>
						Click me to Enter
					</VerticallyStackingButton>
				</motion.div>

			</motion.section>

		</motion.div>
	)
}