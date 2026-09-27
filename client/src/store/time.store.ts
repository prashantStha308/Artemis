// store/time.store.ts
import { useEffect } from "react";
import { create } from "zustand";

type ITimeState = {
	now: Date;
};

const useTimeStore = create<ITimeState>(() => ({
	now: new Date(),
}));

let rafId: number | null = null;
let subscriberCount = 0;

function startLoop(){
	const tick = () => {
		useTimeStore.setState({ now: new Date() });
		rafId = requestAnimationFrame(tick);
	};
	rafId = requestAnimationFrame(tick);
}

function stopLoop(){
	if (rafId !== null) cancelAnimationFrame(rafId);
	rafId = null;
}

export function useTimeLoop(){
	useEffect(() => {
		subscriberCount++;
		if (subscriberCount === 1) startLoop();

		return () => {
			subscriberCount--;
			if (subscriberCount === 0) stopLoop();
		};
	}, []);
}

export default useTimeStore;