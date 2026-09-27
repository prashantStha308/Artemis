import useUIStore from "@/store/UI/ui.store";

import Pin from "@/components/icons/Pin";
import GmailIcon from "@/components/icons/GmailIcon";
import GithubIcon from "@/components/icons/GithubLogo";
 import InstagramIcon from "@/components/icons/InstagramIcon";
 import LinkedInLogo from "@/components/icons/LinkedInLogo";

import WindowFrame from "../Frames/WindowFrame";
import Sparkle from "@/components/icons/Sparkle";


const toolKit = [
	"TS", "React", "NEXT" , "MERN", "Zustand", "TailwindCSS", "Postman"
]

export default function ProfileWidget(){

	const { setProfileCardOpen } = useUIStore.getState();


	return(
		<WindowFrame
			label="Profile Card"
			className="border-2 border-purple-300 bg-purple-100 rounded-lg overflow-auto min-h-fit"
	        positionClass = "absolute top-12 left-16"

	        initialWidth={500}

			onClose={() => setProfileCardOpen(false)}
		>
			<div
				className="flex gap-4 px-4 py-3"
			>
				
				<img
					src="/images/profile.png" alt="profile-image"
					className="w-44 aspect-square rounded-md object-cover bg-purple-400"
				/>

				<section
					className="flex flex-col gap-4"
				>

					<header
						className="flex flex-col gap-0 leading-tight"
					>
						<h1
							className="flex items-center gap-2 text-lg text-purple-700"
						>
							<Sparkle size={16} /> <span className="text-body hover:underline" > Prashant Shrestha </span>
						</h1>

						<h2
							className="text-xs"
						>
							Full-stacks developer | Design Enthusiastic
						</h2>
					</header>

					<section
						className="flex flex-col gap-1"
					>
						<h2 className="text-sm text-body font-bold" >
							About me 
						</h2>

						<p
							className="text-xs text-text-sub"
						>
							I build interactive web experiences and occasionally draw things that don't move.
						</p>

					</section>

					{/*toolkit*/}
					<section
						className="w-full flex flex-col gap-2"
					>
						<span
							className="text-xs text-body"
						>
							Tool Kit
						</span>

						<div className="w-full flex flex-wrap gap-2" >
							{ toolKit.map( (item, index) =>(

								<div
									key={index}

									className=" rounded-full text-[0.6rem] text-body bg-purple-200 px-2 py-0.5 border border-purple-300"
								>
									{item}
								</div>

							) ) }	
						</div>
					</section>

					{/*contacts*/}
					<section
						className="flex items-center justify-between text-xs"
					>
						<span className="text-xs">
							Contacts
						</span>

						<div
							className="flex justify-end gap-4 text-body items-center gap-1 text-text-sub"
						>
							<GmailIcon size={16} />
							<GithubIcon size={16} />
							<InstagramIcon size={16} />
							<LinkedInLogo size={16} />

						</div>
					</section>

				</section>

			</div>	
		</WindowFrame>
	)
}