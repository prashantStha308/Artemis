import useLoadingStore from "@/store/loading.store";
import { motion, type Variants } from "motion/react"
// import { useState, useEffect, useRef } from "react"


const width = window.innerWidth;
const height = window.innerHeight;

const decoVariants: Variants = {
    initial: {
        x: width / 2,
        y: height / 2,
        width: 0,
        height: 0,
    },

    leftAnimate: {
        x: -height / 2,
        y: height / 2 - height / 2,
        width: height,
        height: height,
        borderColor: ["#fcd34d", "#d8b4fe"],
    },

    rightAnimate: {
        x: width - height / 2,
        y: 0,
        width: height,
        height: height,
        borderColor: ["#fcd34d", "#d8b4fe"],
    },

    topAnimate: {
        x: 0,
        y: -width / 2,
        width: width,
        height: width,
        borderColor: ["#fcd34d", "#d8b4fe"],
    },

    bottomAnimate: {
        x: 0,
        y: height - width / 2,
        width: width,
        height: width,
        borderColor: ["#fcd34d", "#d8b4fe"],
    },
};

export default function CircularDeco(){


	const start = useLoadingStore(store => store.start);
	const delay = 0.5;

	return(
		<div className="absolute inset-0 -z-10 pointer-events-none">
		{/*left*/}
			<motion.div
				variants={decoVariants}
				initial="initial"
				animate={ start ? "leftAnimate" : "initial" }

				transition={{
					type: "spring",
					damping: 20,
					stiffness: 40,
					delay: delay
				}}

				className="absolute top-0 left-0 -z-10  aspect-square rounded-full border-8 border-purple-300 "
			/>

			<motion.div
				variants={decoVariants}
				initial="initial"
				animate={ start ? "topAnimate" : "initial" }

				transition={{
					type: "spring",
					damping: 20,
					stiffness: 40,
					// visualDuration: 5,
					delay: delay,
				}}

				className="absolute -z-10 top-0 left-0 aspect-square rounded-full border-8 border-purple-300 "
			/>

			<motion.div
				variants={decoVariants}
				initial="initial"
				animate={ start ? "bottomAnimate" : "initial" }

				transition={{
					type: "spring",
					damping: 20,
					stiffness: 40,
					// visualDuration: 5,
					delay: delay,
				}}

				className="absolute -z-10 top-0 left-0 aspect-square rounded-full border-8 border-purple-300 "
			/>


			{/*right*/}
			<motion.div
				variants={decoVariants}
				initial="initial"
				animate={ start ? "rightAnimate" : "initial" }

				transition={{
					type: "spring",
					damping: 20,
					stiffness: 40,
					// visualDuration: 5,
					delay: delay,
				}}

				className="absolute top-0 left-0 -z-10 aspect-square rounded-full border-8 border-purple-300 "
			/>
		</div>
	)
}