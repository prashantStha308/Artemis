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
			className="w-full flex justify-center items-center gap-4 text-purple-200 "
		>
			<button
				className="stroke-1 hover:text-purple-400"
				onClick={()=>{
					soundManager.makeSfxSound("click2")
				}}
				onPointerEnter={()=>{
					soundManager.makeSfxSound("hover")
				}}
			>
				<Previous />
			</button>

			<div
				className="relative flex items-center justify-center aspect-square h-11 rounded-full hover:bg-purple-500 transition-colors duration-75 ease-in-out group"
				onClick={async () => {
					soundManager.makeSfxSound("click")
					await togglePlayState();
				} }

				onPointerEnter={()=>{
					soundManager.makeSfxSound("hover2")
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
				className="stroke-1 hover:text-purple-400"
				onClick={()=>{
					soundManager.makeSfxSound("click2")
				}}
				onPointerEnter={()=>{
					soundManager.makeSfxSound("hover")
				}}
			>
				<Next />
			</button>

		</section>
	)
}