import Clock from "@/components/ui/widgets/Clock";
import soundManager from "@/lib/SoundManager";
import useTimeStore, { useTimeLoop } from "@/store/time.store";


export default function DateAndTime( {onClick} : {onClick: () => void} ){

	useTimeLoop();
	const now = useTimeStore(store => store.now);;

	const month = now.toLocaleDateString('en-US', { month: 'short' });
	const day = now.toLocaleDateString('en-US', { weekday: 'short' });
	const date = now.getDate();
	const time = now.toLocaleTimeString('en-US', {
		hour: '2-digit',
		minute: '2-digit',
		hour12: false
	});

	return (
		<section
			className="px-4 py-0.5 w-fit border border-transparent hover:border-purple-400/45 hover:-translate-y-0.5 bg-white/45 hover:bg-white/45 active:bg-white/45 transition-all duration-300 ease-in-out rounded-sm flex items-center gap-2 text-[10px] md:text-xs text-text-sub"
			onClick={onClick }
			onPointerEnter={() =>{
				soundManager.makeSound("hover2")
			}}
		>
			<Clock
				size={36} radius={10}
			/>

			<div className="flex flex-col items-end md:items-center md:flex-row gap-1">
				{/*Date*/}
				<div>
					{day} {month} {date},
				</div>

				{/*Time*/}
				<div>
					{time}
				</div>
			</div>
		</section>
	)
}