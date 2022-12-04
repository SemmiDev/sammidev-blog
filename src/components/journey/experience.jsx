import { experienceData } from '../../data/journey-data/experience';
import { ExperienceIcon } from '../icons/icons';

function Experience() {
	return (
		<div>
			<h1 className="text-secondary mt-5 mb-8 flex items-center justify-center gap-x-2 text-center text-3xl font-bold md:justify-start md:text-4xl">
				<ExperienceIcon /> Experience
			</h1>
			<ul className="steps steps-vertical">
				{experienceData.map((item, index) => (
					<li
						key={index}
						data-content={item.dataContent}
						className={`md:text-md step text-sm font-semibold lg:text-lg ${
							index % 2 == 0 ? 'step-accent' : 'step-info'
						}`}
					>
						<span className={`text-left ${index % 2 == 0 ? 'text-accent' : 'text-info'}`}>{item.name}</span>
					</li>
				))}
			</ul>
		</div>
	);
}

export default Experience;
