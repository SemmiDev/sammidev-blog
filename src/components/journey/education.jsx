import { educationData } from '../../data/journey-data/education';
import { EducationIcon } from '../icons/icons';

function Education() {
	return (
		<div>
			<h1 className="text-secondary mt-5 mb-8 flex items-center justify-start gap-x-2 text-center text-3xl font-bold md:text-4xl">
				<EducationIcon /> Education
			</h1>
			<ul className="steps steps-vertical">
				{educationData.map((item, index) => (
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

export default Education;
