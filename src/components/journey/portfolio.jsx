import PortfolioItem from './portfolio-item';
import { portfolioData } from '../../data/journey-data/portfolio';
import { PortfolioIcon } from '../icons/icons';

function Portfolio() {
	return (
		<div>
			<h1 className="text-secondary mx-auto mt-5 mb-8 flex items-center justify-center gap-x-2 text-3xl font-bold md:text-4xl">
				<PortfolioIcon /> Portfolio
			</h1>

			<div className="mx-auto mb-5 flex flex-col items-center justify-center">
				<div className="indicator my-5 ">
					<span className="badge badge-secondary indicator-item">320+</span>
					<a
						className="btn-outline btn-secondary btn"
						href="https://github.com/SemmiDev"
						target="_blank"
						rel="noreferrer noopener"
					>
						Portfolio Lainnya
					</a>
				</div>
			</div>

			<div className="flex flex-col items-center justify-center md:flex-row">
				<div className="grid grid-cols-1 gap-4">
					{portfolioData.map((project, index) => (
						<PortfolioItem
							key={index}
							description={project.description}
							title={project.title}
							stack={project.stack}
							link={project.link}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export default Portfolio;
