import { motion } from "motion/react"


export default function SparklingLoader({ loadingValue = 0}: {loadingValue?: number}){

	return(
		<div
			className="relative bg-white w-xs md:w-xl h-2 rounded-md"
		>
			<div
				style={{
					width: `${loadingValue}%`
				}}

				className="absolute rounded-md h-full bg-amber-500 transition-all duration-150 ease-in-out "
			>
                {
                    // Render the moving divs
                        [1, 2, 3, 4].map((item) => {
                        // apply blur to even valued elements only
                        const blur = item % 2 == 0;
                        return (
                            <motion.div
                                key={item}
                                style={{
                                    width: `${loadingValue}%`,
                                    transformOrigin: 'left'
                                }}
                                className={`absolute bg-white rounded-full h-full pointer-events-none z-30 ${blur && "blur-sm"} `}
                                animate={ {
                                    opacity: [0, 0.8, 0],
                                    // scaleX: [ item <= 2 ? 0 : item <= 4 ? 0.1 : 0.2 , 0.9]
                                    scaleX: item <= 2 ? [0, 0.9] : [0.1, 0.9]
                                }}
                                transition={{
                                    duration: 1.5 ,
                                    repeat: Infinity,
                                    ease: "linear",
                                    repeatDelay: 0.15
                                }}
                            ></motion.div>
                        )
                        } )
                }
                </div>
		</div>	)
}