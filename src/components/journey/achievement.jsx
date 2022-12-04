import { achievementData } from '../../data/journey-data/achievement';
import { AchievementIcon } from '../icons/icons';

function Achievement() {
	return (
		<div>
			<h1 className="text-secondary mt-5 mb-8 flex items-center justify-center gap-x-2 text-center text-3xl font-bold md:text-4xl">
				<AchievementIcon /> Achievement
			</h1>
			<ul className="steps steps-vertical">
				{achievementData.map((item, index) => (
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

export default Achievement;
