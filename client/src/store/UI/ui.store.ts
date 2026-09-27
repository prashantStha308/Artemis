import { create } from "zustand";


type IUIStore = {

	clockOpen: boolean,
	setClockOpen: (state: boolean) => void,

	profileCardOpen: boolean,
	setProfileCardOpen: (state: boolean) => void,

};


const useUIStore = create <IUIStore> ((set)=>({

	clockOpen: false,
	setClockOpen: (state) => set( { clockOpen: state } ),

	profileCardOpen: false,
	setProfileCardOpen: (state) => set( { profileCardOpen: state } )

}))

export default useUIStore;