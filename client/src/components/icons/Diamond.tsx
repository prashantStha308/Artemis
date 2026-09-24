import type { IIcon } from "@/types/decoration.types";

export default function Diamond({size = 24} : IIcon ){
	return(
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={size} height={size}
			fill="currentColor" viewBox="1.72 1.72 6.56 6.56"
			stroke="white" strokeWidth={0.5}
		>
			<path d="M2.822 4.667 4.667 1.9a.4.4 0 0 1 .666 0l1.845 2.768a.6.6 0 0 1 0 .666L5.333 8.1a.4.4 0 0 1-.666 0L2.822 5.333a.6.6 0 0 1 0-.666"/>
		</svg>
	)
}