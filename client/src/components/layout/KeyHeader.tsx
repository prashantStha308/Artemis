import useUIStore from "@/store/UI/ui.store";
import DateAndTime from "./KeyHeader/DateAndTime";
import ProfilCard from "./KeyHeader/ProfileCard";
import { AnimatePresence } from "motion/react";
import DateAndTimeWidget from "../ui/widgets/DateAndTimeWidget";
import ProfileWidget from "../ui/widgets/ProfileWidget";
import soundManager from "@/lib/SoundManager";

import DefaultCursor from "../icons/DefaultCursor";

export default function KeyHeader(){

	const clockOpen = useUIStore(store => store.clockOpen);
	const profileCardOpen = useUIStore(store => store.profileCardOpen);

	const { setClockOpen } = useUIStore.getState();


	return(
		<header
			className="relative w-full h-14 flex justify-between items-start  "
		>
			<ProfilCard />

			<DateAndTime
				onClick={ () =>{
					setClockOpen(true)
					soundManager.makeSfxSound("click2")
				} }
			/>
			<AnimatePresence
				mode="popLayout"
			>
				 { clockOpen && <DateAndTimeWidget /> }
			</AnimatePresence>

			<AnimatePresence
				mode="popLayout"
			>
				 { profileCardOpen && <ProfileWidget /> }
			</AnimatePresence>

		</header>
	)
}