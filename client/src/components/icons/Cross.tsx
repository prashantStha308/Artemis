import type { IIcon } from "@/types/decoration.types";

export default function Cross( { size = 24 }: IIcon ){

	return(
		<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x preview-icon">
			<path d="M18 6 6 18"/><path d="m6 6 12 12"/>
		</svg>
	)
}