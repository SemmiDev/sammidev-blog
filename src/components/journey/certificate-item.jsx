function CertificateItem({ title, description, imgSrc }) {
	return (
		<div className="max-w-lg">
			<div className="w-fill card image-full h-full bg-base-100 shadow-lg shadow-info transition duration-300 ease-linear hover:scale-95">
				<figure>
					<img src={imgSrc} alt={title} className="rounded-md object-cover" />
				</figure>
				<div className="card-body">
					<h2 className="card-title">🌟🌟🌟</h2>
					<p>{description}</p>
					<div className="card-actions justify-end">
						<a href={imgSrc} target="_blank" rel="noreferrer noopener" className="btn-outline btn">
							Lihat
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CertificateItem;
