import React, { useState } from "react";
import FlexDivCenter from "../../components/_StyledComponents/FlexDiv";
import Section from "../../components/_StyledComponents/Section";

const SettingsPage = () => {
	const [breakpoint, setBreakpoint] = useState<number>(1024);

	const applyBreakpoint = () => {
		console.log("Applying", breakpoint);
	};

	return (
		<Section title="Settings">
			<FlexDivCenter>
				Settings will be saved locally and persisted across user sessions
			</FlexDivCenter>
			<div>
				<label>
					Screen breakpoint
					<input
						type="text"
						value={breakpoint}
						onChange={(e) => {
							setBreakpoint(parseInt(e.target.value));
						}}
					></input>
					<button
						onClick={() => {
							applyBreakpoint();
						}}
					>
						Set
					</button>
				</label>
			</div>
			<div></div>
		</Section>
	);
};

export default SettingsPage;
