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
				className="absolute inset-0 z-50 bg-white mix-blend-color-dodge pointer-events-none "

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
				className="relative isolate h-full w-full border-2 border-amber-500 rounded-xl flex flex-col justify-between gap-2 bg-purple-200 px-2 py-1 md:px-5 md:py-2 overflow-hidden"
			>

				<KeyHeader />

				<main className="flex flex-col justify-center items-center flex-1 " >
					<AppRoutes />
				</main>

				{/*Deco*/}
				<CircularDeco />
				<div className="absolute inset-0 z-[999999] pointer-events-none" >
					<IdealWholeAnimation />
				</div>
			</section>

			{/*decorations*/}

			{/*corner deco*/}
			<MainCornerDecorator />

		</main>
	)
}