export default interface ILoadingState {
	start: boolean,
	setStart: (state:boolean) => void

	isLoading: boolean;
	setIsLoading: (state: boolean) => void;

	loadingValue: number;
	setLoadingValue: (value: number) => void;
}