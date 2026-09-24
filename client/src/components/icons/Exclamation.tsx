import type { IIcon } from "@/types/decoration.types";

export default function Exclamation({size = 24}: IIcon){
	return(
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={size} height={size} fill="currentColor"
			viewBox="1.75 1.75 6.50 6.50"
			stroke="white" strokeWidth={0.5}
		>
			<path d="M4.2 7.45a.8.8 0 1 1 1.6 0 .8.8 0 0 1-1.6 0M4 2.65c0-.442.358-.9 1-.9s1 .458 1 .9-.2 2.058-.3 2.5-.258.8-.7.8-.6-.358-.7-.8S4 3.092 4 2.65"/>
		</svg>
	)
}