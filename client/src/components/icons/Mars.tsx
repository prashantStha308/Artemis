import type { IIcon } from "@/types/decoration.types";

export default function Mars({size = 24}: IIcon){
	return(
		<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mars preview-icon">
			<path d="M16 3h5v5"/><path d="m21 3-6.75 6.75"/>
			<circle cx="10" cy="14" r="6"/>
		</svg>
	)
}