export interface ITrack{
  // define this later
}


export interface IMusicStore {

  isMuted: boolean,
  setIsMuted: (state:boolean) => void,

  isPlaying: boolean;
  setIsPlaying: (state: boolean) => void;

// define the shape of this object paxi
  currentTrack: object | null;
  setCurrentTrack: (song: object) => void;

  trackProgress: number;
  setTrackProgress: (value: number) => void;

  musicVolume: number;
  setMusicVolume: (value: number) => void;

  audioRef: HTMLAudioElement | null;
  setAudioRef: (ref: HTMLAudioElement | null) => void;

  trackSeekerRef: HTMLInputElement | null;
  setTrackSeekerRef: (ref: HTMLInputElement | null) => void;

  volumeSeekerRef: HTMLInputElement | null;
  setVolumeSeekerRef: (ref: HTMLInputElement | null) => void;

  load: (music:object) => void;
  play: () => void;
  pause: () => void;


  togglePlayState: () => void;
  toggleMuted: () => void;
}