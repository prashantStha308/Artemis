import { motion, type Variants } from "motion/react"

import Mars from "../../icons/Mars";
import soundManager from "@/lib/SoundManager";
import useUIStore from "@/store/UI/ui.store";

// const delay = 0.5;

const containerVariants: Variants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
			type: "spring",
			damping: 12,
			stiffness: 70
		},
	},
};

// 2. Define child variants
const itemVariants: Variants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition:{
			duration: 0.5
		}
	},
};

export default function ProfilCard(){
	
	const {setProfileCardOpen} = useUIStore.getState();

	return(
		<motion.section
			className="flex gap-2 px-2 py-1 rounded-sm border border-transparent hover:border-purple-400/45 hover:-translate-y-0.5 bg-white/45 hover:bg-white/45 active:bg-white/45 transition-all duration-300 ease-in-out"
			variants={containerVariants}
			initial="hidden"
			animate="visible"

			onPointerEnter={()=> soundManager.makeSfxSound("hover2")}
			onPointerDown={() =>{
				soundManager.makeSfxSound("click2");
				setProfileCardOpen(true)
			}}
		>
			<motion.div
				className="object-cover rounded-md"
				variants={itemVariants}
			>
				<img
					src="/images/profile.png" alt="profile-image"
					className="w-10 aspect-square rounded-lg object-cover bg-purple-400"
				/>
			</motion.div>

			<div className="flex flex-col gap-2" >
				<motion.span
					className="text-xs font-medium"
					variants={itemVariants}
				>
					Prashant Shrestha
				</motion.span>
				
				<div className="flex items-center gap-1" >
					<motion.div
						variants={itemVariants}
					>
						<Mars size={12} />
					</motion.div>

					{/*age filling container*/}
					<motion.div
						variants={itemVariants}
						className="relative bg-purple-200 w-full h-1 rounded-full"
					>
						<motion.div

							initial={{ width: 0 }}
							animate={{width: "50%"}}
							transition={{
								type: "spring",
								damping: 7,
								stiffness: 100,
								delay: 0.8
							}}

							className="h-full bg-amber-500 rounded-full"
						/>
					</motion.div>
				</div>
			</div>

		</motion.section>
	)
}
