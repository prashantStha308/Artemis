import { useRef, useState } from "react"

export default function Slider( { label = "Volume" } ){

	const [ sliderValue, setSliderValue ] = useState(20);
	const sliderRef = useRef<HTMLInputElement>(null);

	return(
		<div
			className="flex gap-4 items-start isolate"
		>
			<div
				className="flex flex-col items-stretch"
			>
				<span
					className="text-[0.65rem]"
				>
					{label}
				</span>

				<span className="text-[0.7rem] font-bold" >
					{sliderValue}%
				</span>

			</div>

			<div
				className="relative flex items-center w-32 h-6 bg-purple-100 rounded-xs "
			>
				{/*filler*/}
				<div
					style={{
						width: `${sliderValue}%`
					}}
					className="h-full bg-fuchsia-500 rounded-xs"
				/>

				{/*thumb*/}
				<div
					style={{
						height: "110%",
						transform: `translate3d(-50%, -50%, 0)`,
						left: `${sliderValue}%`
					}}
					className="top-[50%] absolute w-2 h-full bg-fuchsia-300 rounded-xs"
				/>

				<input
					ref={sliderRef}
					min={0}
					max={100}
					value={sliderValue}
					onChange={(e) => setSliderValue(Number(e.target.value))}
					type="range"
					className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
				/>

			</div>

		</div>
	)
}