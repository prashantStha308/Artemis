import soundManager from "@/lib/SoundManager";
import type { IMusicStore } from "@/types/music.types";
import {create} from "zustand";



const useMusicStore = create((set, get) : IMusicStore => ({

	isMuted: false,
	setIsMuted: (state) => set( {isMuted: state} ),

	isPlaying: true,
	setIsPlaying: (state)=> set({isPlaying: state}),

	currentTrack: {},
	setCurrentTrack: (song) => set({currentTrack: song}),

	trackProgress: 0,
	setTrackProgress: (value) => set({trackProgress: value}),

	musicVolume: 100,
	setMusicVolume: (value) => set({musicVolume: value}),

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

	toggleMuted: ()=>{
		const { isMuted, musicVolume } = get();

		if( !isMuted ){
			// will be muted
			soundManager.setGain(0);
		}else{
			// will not be muted
			// Gain should be normalized to 1
			soundManager.setGain( musicVolume/100 );
		}

		set( {isMuted: !isMuted} )
	},

}) )

export const togglePlayState = useMusicStore.getState().togglePlayState;
export const toggleMuted = useMusicStore.getState().toggleMuted;


export default useMusicStore;