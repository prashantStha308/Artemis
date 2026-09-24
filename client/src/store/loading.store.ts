import { create } from "zustand";
import type ILoadingState from "@/types/loading.types";

const useLoadingStore = create<ILoadingState>((set)=>({

	start: false,
	setStart: (state:boolean) => set({ start: state }),

	isLoading: false,
	setIsLoading: (state:boolean) => set({ isLoading: state }),

	loadingValue: 0,
	setLoadingValue: (value: number) => set({ loadingValue: value })

}))

export const setLoadingValue = useLoadingStore.getState().setLoadingValue;
export const setIsLoading = useLoadingStore.getState().setIsLoading;
export const setStart = useLoadingStore.getState().setStart;


export default useLoadingStore;