import { setIsLoading, setLoadingValue } from "@/store/loading.store";

export type sfxEvents = "click" | "click2" | "hover" | "hover2" | "volumeUp" | "volumeDown";

class SoundManager{

	private ctx:AudioContext;
	private sfxGain:GainNode;

	private audioSources : Record<sfxEvents, string> = {
		click: "/music/click.wav",
		click2: "/music/click_2.wav",

		hover: "/music/hover.wav",
		hover2: "/music/hover_2.wav",

		volumeUp: "/music/volume_increase.wav",
		volumeDown: "/music/volume_decrease.wav",
	}

	private audioBuffers: Partial<Record<sfxEvents, AudioBuffer>>;

	constructor(){
		this.ctx = new AudioContext();
		this.sfxGain = this.ctx.createGain();
		this.sfxGain.gain.value = 1;

		this.audioBuffers = {}

		this.sfxGain.connect(this.ctx.destination);
	}

	async load() : Promise<void> {

		setIsLoading(true);

		const entries = Object.entries(this.audioSources) as [sfxEvents, string][] ;
		const total = entries.length;
		let loaded = 0;

		await Promise.all(
			entries.map(async ([key,value]) => {

				const audio = await fetch(value);
				const arrayBuffer: ArrayBuffer = await audio.arrayBuffer();
				const audioBuffer: AudioBuffer = await this.ctx.decodeAudioData(arrayBuffer);

				this.audioBuffers[key] = audioBuffer;

				loaded++;
				setLoadingValue( Math.round((loaded / total) * 100) );

				if( loaded === total ){
					setIsLoading(false)
				}
			})
		)
	}

	async makeSound( event:sfxEvents ){
	    if (this.ctx.state === "suspended") {
	        await this.ctx.resume();
	    }

	    if (!this.audioBuffers[event]) {
	        console.log("Audio hasn't loaded yet");
	        return;
	    }

		const audioSource = this.ctx.createBufferSource();
		audioSource.buffer = this.audioBuffers[event];

		audioSource.connect(this.sfxGain).connect(this.ctx.destination);
		audioSource.start();
	}

	setGain(gainValue:number){
		this.sfxGain.gain.value = gainValue;
	}

}


const soundManager = new SoundManager();
export default soundManager;