// libraries
import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

// essentials
import AppRoutes from "./App.routes"

// Decos
import MainCornerDecorator from "@/components/decorations/MainCornerDecorator"
import CircularDeco from "@/components/decorations/CircularDeco"
import IdealWholeAnimation from "@/components/decorations/IdealWholeAnimation"

// lib
import soundManager from "@/lib/SoundManager";

// stores
import useLoadingStore from "@/store/loading.store";

// components
import KeyHeader from "@/components/layout/KeyHeader"
import LoadingScreen from "@/components/loadingScreen/LoadingScreen";



export default function AppContent(){

	const start = useLoadingStore(store => store.start)

	useEffect(()=>{
		async function init(){
			await soundManager.load();
		}
		init();
	},[])

	return(
		<main
			className="relative isolate h-screen max-w-screen px-3 py-2 md:px-6 md:py-5"
		>

			<AnimatePresence mode="wait" >
				{!start && <LoadingScreen />}
			</AnimatePresence>

			<motion.div
				className="absolute inset-0 z-50 bg-white mix-blend-color-dodge pointer-events-none overflow-hidden"

				style={{
					backgroundImage:"url('/images/inner-circles.png')",
					backgroundRepeat: "no-repeat",
					backgroundSize: "contain",
					backgroundPosition: "center"
				}}

				animate={ start ? {
					opacity: [1, 0, 1, 0]
				} : {
					opacity: 0
				}}

				transition={{
					delay: 0.15
				}}

			/>

			<section
				className="relative z-40 isolate h-full w-full border-2 border-amber-500 rounded-xl bg-purple-200 overflow-hidden"
			>

				{/*Deco - fixed to the frame, does not scroll*/}
				{/*<CircularDeco />*/}

				{/*scrolling content*/}
				<div
					className="relative h-full w-full flex flex-col justify-between gap-2 px-2 py-1 md:px-5 md:py-2 overflow-auto"
				>
					<KeyHeader />

					<AppRoutes />
				</div>

				<img
					src="/images/bg.png" alt="profile"
					className="-z-10 absolute top-0 h-full w-full object-cover"
				/>


			</section>

			{/*decorations*/}

			<div className="absolute inset-0 z-[999999] pointer-events-none" >
				<IdealWholeAnimation />
			</div>

			{/*corner deco*/}
			<MainCornerDecorator />

		</main>
	)
}