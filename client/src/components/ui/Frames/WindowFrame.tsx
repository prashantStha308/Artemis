import { useRef, type ReactNode } from "react";
import { motion } from "motion/react";

import Draggable from 'react-draggable';
import { Resizable } from "re-resizable";

import soundManager from "@/lib/SoundManager";
import Cross from "@/components/icons/Cross";

interface IProps {
	children: ReactNode;
	className?: string;
	positionClass?: string;

	initialWidth?: number | string;
	initialHeight?: number | string;

	minWidth?: number,
	minHeight?: number,

	label?: string;
	onClose: () => void;
}


export default function WindowFrame( {
	children,
	className = "flex flex-col gap-1 w-fit rounded-sm rounded-t-lg",

	positionClass = "",

	initialWidth = "auto",
	initialHeight = "auto",
	minWidth = 200,
	minHeight = 100,

	label = "",
	onClose,
} : IProps
	){

	const nodeRef = useRef<HTMLDivElement>(null);

	return(
		<Draggable
			nodeRef={nodeRef}
			handle=".window-drag-handle"
		>
            <div
                ref={nodeRef}
                className={`absolute z-[99999] ${positionClass}`}
            >


		        <Resizable
				    defaultSize={{ width: initialWidth, height: initialHeight }}
				    minWidth={minWidth}
				    minHeight={minHeight}
		            enable={{
		                top: true,
		                right: true,
		                bottom: true,
		                left: true,
		                topRight: true,
		                bottomRight: true,
		                bottomLeft: true,
		                topLeft: true
		            }}
		        >
					<motion.section
						className={`${className}`}

						initial={{
							scaleY: 0
						}}

						animate= {{
							scaleY: 1
						}}

						exit={{
							scaleY: 0
						}}

						style={{
							transformOrigin: "center"
						}}

					>
						<header
							className="window-drag-handle w-full h-full flex justify-between items-center rounded-t-lg px-2 py-1 border-b border-purple-300 text-[0.7rem] "
						>
							<span
								className="font-mono"
							>
								{label}
							</span>

							<div
								className="p-1 group"
								onPointerDown={() => {
									onClose();
									soundManager.makeSfxSound("click")
								}}
							>
								<div
									className="flex justify-center items-center border border-purple-700 text-purple-700 group-hover:border-purple-500 group-hover:bg-purple-200 p-0.5 rounded-full"
								>
									<Cross size={16} />
								</div>
							</div>

						</header>

						{children}

					</motion.section>
				</Resizable>
			</div>
		</Draggable>
	)
}