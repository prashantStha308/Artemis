import useUIStore from "@/store/UI/ui.store";
import WindowFrame from "../Frames/WindowFrame";
import Clock from "./Clock";

export default function DateAndTimeWidget(){

	const { setClockOpen } = useUIStore.getState();

	return(
		<WindowFrame
			className=" border-2 border-purple-300 bg-purple-100 rounded-lg min-w-fit
        min-h-fit"
	        positionClass = "absolute top-12 right-0"

			label="Date and Time"
			onClose={() => setClockOpen(false)}
		>

			<section
				className="p-4"
			>
				<Clock
					size={150}
					radius={65}
					options = {{
						hourStokeWidth: 2,
						minuteStokeWidth: 1.5,
						secondStokeWidth: 1,
						circleStrokeWidth: 2 
					}}
				/>
			</section>

		</WindowFrame>
	)
}