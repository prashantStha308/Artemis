import type { IMusicStore } from "@/types/music.types";
import {create} from "zustand";



const useMusicStore = create((set, get) : IMusicStore => ({

	isPlaying: true,
	setIsPlaying: (state)=> set({isPlaying: state}),

	currentTrack: {},
	setCurrentTrack: (song) => set({currentTrack: song}),

	trackProgress: 0,
	setTrackProgress: (value) => set({trackProgress: value}),

	volume: 60,
	setVolume: (value) => set({volume: value}),

	audioRef: null,
	setAudioRef: (ref) => set({ audioRef: ref }),

	trackSeekerRef: null,
	setTrackSeekerRef: (ref) => set({ trackSeekerRef: ref }),

	volumeSeekerRef: null,
	setVolumeSeekerRef: (ref) => set({ volumeSeekerRef: ref }),


	// actions

	load: async(music)=>{
		// do something later
	},

	play: async() => {
		const {audioRef} = get();

		await audioRef?.play();
		set({ isPlaying: true });
	},

	pause: async() => {
		const {audioRef} = get();

		audioRef?.pause();
		set({ isPlaying: false });
	},

	togglePlayState: async ()=> {
		const {isPlaying, play, pause} = get();

		if(isPlaying){
			pause();
		}else{
			await play();
		}
	},

}) )

export const togglePlayState = useMusicStore.getState().togglePlayState;

export default useMusicStore;