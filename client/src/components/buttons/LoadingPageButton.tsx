import {motion, type Variants} from "motion/react";


export default function LoadingPageButton({
	children,
	direction = "left",
	
	colorMap={
		0: "bg-amber-300 ",
		1: "bg-amber-200 ",
		2: "bg-amber-100 ",
	},
	endBoxColor = "bg-amber-400",
	textColor = "text-amber-900",

	width = "w-xs",
	className,
	
	disabled=false,

	...props
}: React.ComponentProps<typeof motion.button> & {
	direction?: "left" | "right",
	colorMap?: Record<number, string>,
	endBoxColor?: string,
	textColor?: string,
	width?: string
}){

	const parentVarient: Variants = {
		rest: {},
		hover: {},
		tap:{},
	}

	const textVarient: Variants = {
		rest: {
			rotate: 0,
			fontSize: "1rem"
		},
		hover: {
			rotate: direction === "left" ? -5 : 5,
			fontSize: "1.2rem",
			transition:{
				type: "spring",
				damping: 10,
				stiffness: 80
			}
		},
		tap:{
			rotate: -2 ,
			fontSize: "1.2rem",
			transition:{
				type: "spring",
				damping: 10,
				stiffness: 80
			}
		}
	}

	return(
		<motion.button
			className={`relative text-sans ${width} px-4 py-3 isolate shrink-0 h-12 ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
			variants={parentVarient}
			initial="rest"
			whileHover={!disabled ? "hover" : "rest" }
			animate="rest"
			whileTap={!disabled ? "tap" : "rest" }

			disabled={disabled}

			{...props}
		>

			<motion.div
				className="absolute w-full left-0 bg-body"

				style={{
					height: "200%",
					top: "-50%"
				}}

				initial={{y:0}}
				animate={ !disabled ? {y: "200%", display: "none"} : {y:0} }

				transition={{
					duration: 0.8,
					ease: "easeInOut",
				}}

			/>

			<motion.span
				className={`z-10 inline-block font-medium flex gap-1 ${textColor}`}
				variants={textVarient}
			>
				{children}
			</motion.span>

			{
				Array.from({length: 3}).map((_, index)=>(
					<motion.div
						key={index}
						className={`absolute top-0 bottom-0 left-0 right-0 -z-10 ${colorMap[index]} border border-amber-900/45 rounded-lg `}
						variants={{
							rest: {
								rotate: 0,
							},
							hover: {
								rotate: direction === "left" ? (10 + (index * 10)) : -(10 + (index * 10))  ,
							},
							tap: {
								rotate: direction === "left" ? (5 + (index * 5)) : -(5 + (index * 5)) ,
							}
						}}

						transition={{
							type: "spring",
							damping: 10,
							stiffness: 80
						}}
					/>

				))
			}

			<motion.div
				className={`absolute top-0 bottom-0 left-0 right-0 -z-20 ${endBoxColor} border border-amber-900/45 rounded-lg `}
				variants={textVarient}
			/>

		</motion.button>

	)
}