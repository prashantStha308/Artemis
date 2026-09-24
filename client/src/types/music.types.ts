export interface ITrack{
  // define this later
}


export interface IMusicStore {
  isPlaying: boolean;
  setIsPlaying: (state: boolean) => void;

// define the shape of this object paxi
  currentTrack: object | null;
  setCurrentTrack: (song: object) => void;

  trackProgress: number;
  setTrackProgress: (value: number) => void;

  volume: number;
  setVolume: (value: number) => void;

  audioRef: HTMLAudioElement | null;
  setAudioRef: (ref: HTMLAudioElement | null) => void;

  trackSeekerRef: HTMLInputElement | null;
  setTrackSeekerRef: (ref: HTMLInputElement | null) => void;

  volumeSeekerRef: HTMLInputElement | null;
  setVolumeSeekerRef: (ref: HTMLInputElement | null) => void;

  load: (music) => void;
  play: () => void;
  pause: () => void;
  togglePlayState: () => void;
}