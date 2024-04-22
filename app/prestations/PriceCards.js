const PriceCards = () => {
	const prices = [
		{
			title: "Standard",
			price: "1000",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Nulla porta, neque ut suscipit rhoncus, sem lacus ultr",
		},
		{
			title: "Standard",
			price: "1000",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Nulla porta, neque ut suscipit rhoncus, sem lacus ultr",
		},
	];

	return (
		<section>
			<div className="container my-6">
				<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
					{prices.map((priceItem) => {
						let { title, price, description } = priceItem;
						return (
							<div className="price-card relative flex flex-col items-center gap-4  p-8 rounded-2xl border border-white/10 before:content-[''] before:absolute before:w-2/3 before:h-2/3 before:top-0  before:right-0  before:bg-gradient-to-tr before:from-transparent before:via-transparent before:to-primary before:mix-blend-multiply before:opacity-50 before:z-0 before:transition-all before:duration-500 before:ease-in-out before:rounded-2xl">
								<div className="text-4xl font-bold ">
									{price}
								</div>
								<div className="text-xl text-white">
									{title}
								</div>
								<div className="text-lg">{description}</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default PriceCards;
