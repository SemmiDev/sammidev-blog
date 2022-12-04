import { certificateData } from '../../data/journey-data/certificate';
import CertificateItem from './certificate-item';
import { CertificateIcon } from '../icons/icons';

function Certificate() {
	return (
		<div>
			<h1 className="text-secondary mx-12 mt-5 mb-8 flex items-center justify-center gap-x-2 text-center text-3xl font-bold md:text-4xl">
				<CertificateIcon /> Certificate
			</h1>
			<div className="mx-auto mb-5 flex flex-col items-center justify-center">
				<div className="indicator my-5 ">
					<span className="badge badge-primary indicator-item">15+</span>
					<a
						className="btn-secondary btn"
						href="https://drive.google.com/drive/folders/1YofO6A6a3o2bLTxSryQ9S5czpkTA1B-A"
						target="_blank"
						rel="noreferrer noopener"
					>
						Certificate Lainnya
					</a>
				</div>
			</div>
			<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
				{certificateData.map((item, index) => (
					<CertificateItem key={index} title={item.title} description={item.description} imgSrc={item.imgSrc} />
				))}
			</div>
		</div>
	);
}

export default Certificate;
