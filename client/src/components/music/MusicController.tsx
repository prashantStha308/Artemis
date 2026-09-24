import useMusicStore, { togglePlayState } from "@/store/musicStore/music.store";
import Next from "../icons/Next";
import Pause from "../icons/Pause";
import Play from "../icons/Play";
import Previous from "../icons/Previous";
import soundManager from "@/lib/SoundManager";


export default function MusicController(){

	const isPlaying: boolean = useMusicStore(store => store.isPlaying);

	return(
		<section
			className="w-full flex justify-center items-center gap-4 text-purple-900 "
		>
			<button
				className="hover:text-white stroke-1"
				onClick={()=>{
					soundManager.makeSound("click2")
				}}
				onPointerEnter={()=>{
					soundManager.makeSound("hover")
				}}
			>
				<Previous />
			</button>

			<div
				className="relative flex items-center justify-center aspect-square h-11 rounded-full hover:bg-purple-500 transition-colors duration-75 ease-in-out group"
				onClick={async () => {
					soundManager.makeSound("click")
					await togglePlayState();
				} }

				onPointerEnter={()=>{
					soundManager.makeSound("hover2")
				}}
			>

				<button
					className={`ml-1 ${isPlaying ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"} transition duration-150 ease-out group-hover:text-white`}
				>
					<Play />
				</button>

				<button
					className={`absolute ${isPlaying ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} transition duration-150 ease-out group-hover:text-white`}
				>
					<Pause />
				</button>


			</div>

			<button
				className="hover:text-white stroke-1"
				onClick={()=>{
					soundManager.makeSound("click2")
				}}
				onPointerEnter={()=>{
					soundManager.makeSound("hover")
				}}
			>
				<Next />
			</button>

		</section>
	)
}