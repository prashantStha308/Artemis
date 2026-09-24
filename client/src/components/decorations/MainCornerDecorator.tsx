import HitEffect from "@/components/icons/HitEffect"


// decoration constants
const hitEffectClasses = [
	" top-1 md:top-3 left-1 md:left-3",
	" top-1 md:top-3 right-1 md:right-3 -scale-x-100 ",

	" bottom-1 md:bottom-3 left-1 md:left-3 -scale-y-100 ",
	" bottom-1 md:bottom-3 right-1 md:right-3 -scale-x-100 -scale-y-100",

]


export default function MainCornerDecorator(){
	return(
		<>
			{
				hitEffectClasses.map( (val, index)=> (
					<div
						key={index}
						className={`absolute text-amber-500 rotate-90 ${val} `}
					>
						<HitEffect />
					</div>
				) )
			}
		</>
	)
}