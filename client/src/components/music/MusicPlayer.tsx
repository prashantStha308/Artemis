import { useEffect, useRef } from "react";

import useMusicStore from "@/store/musicStore/music.store";
import MusicController from "./MusicController";
import VinylDisk from "./VinylDisk";
import useLoadingStore from "@/store/loading.store";

export default function MusicPlayer(){

	const audioRef = useRef<HTMLAudioElement | null>(null);
	const { setAudioRef } = useMusicStore.getState();

	const start = useLoadingStore(store => store.start);
	const isMuted = useMusicStore(store => store.isMuted);

    useEffect(() => {
        const audio = audioRef.current;

        if (!audio) return;

        setAudioRef(audio);

        if (start && !isMuted) {
            audio.play().catch((error) => {
                console.error("Failed to play music:", error);
            });
        }


    }, [start, setAudioRef]);

	return(
		<section
			className="flex flex-col items-center gap-4"
		>
			<VinylDisk />
			<MusicController />

			<audio ref={audioRef} src="/music/test.mp3" preload="" autoPlay={start} ></audio>

		</section>
	)
}