import { motion } from "motion/react";
import soundManager from "@/lib/SoundManager";

export default function Switch( {
	label = "Mute",
	...props
} : React.ComponentProps<"input"> & { label?: string }
){
	
	return(
		<div
			className="relative flex items-center w-full gap-16 justify-between"
			onPointerEnter={()=>{
				soundManager.makeSound("hover2")
			}}
		>

			<label
				htmlFor="checkboxValue"
				className="font-bold"
			>
				{label}
			</label>

			<div
				className="w-12 h-fit flex justify-center"
			>
				<motion.div
					animate={{
						scaleX: props.checked ? 1.1 : 1,
						backgroundColor: props.checked ? "#F3E8FF" : "transparent",
					}}

					transition={{
						type: "spring",
						stiffness: 500,
						damping: 30
					}}

					style={{ transformOrigin: "center" }}
					
					className={`w-8 h-3 rounded-full border-2 border-purple-100 `}
				/>
			</div>

			<input
				className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
				type="checkbox" id="checkboxValue" 
				{...props}
			/>

		</div>
	)
}