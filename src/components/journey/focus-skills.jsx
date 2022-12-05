import { focussSkills } from '../../data/journey-data/skills';
import { FocusSkillsIcon, SkillsIcon } from '../icons/icons';

function FocusSkills() {
	return (
		<div className="flex flex-col items-center gap-y-2">
			<h1 className="text-secondary mt-5 mb-8 flex items-center justify-center gap-x-2 text-center text-3xl font-bold md:text-4xl">
				<FocusSkillsIcon /> Skills
			</h1>
			{focussSkills.map((skill, index) => (
				<span
					className="hover:text-primary grid grid-cols-2 gap-2 text-warning transition duration-75 ease-linear hover:font-bold"
					key={index}
				>
					➜ {skill.name}
					<progress className="progress progress-secondary w-40" value={skill.value} max={skill.max}></progress>
				</span>
			))}
		</div>
	);
}

export default FocusSkills;
