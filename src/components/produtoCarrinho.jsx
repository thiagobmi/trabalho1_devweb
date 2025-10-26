function ProdutoCarrinho({ index, nome, preco, setProdutosCarrinho }) {
	const excluir = () => {
		setProdutosCarrinho((prevProdutos) =>
			prevProdutos.filter((_, i) => i !== index)
		);
	};

	return (
		<div className="d-flex justify-content-between bg-white py-3 border border-2 bord">
			<div className="d-flex align-items-center">
				<div className="ms-2">
					<img
						src={
							"https://placehold.co/300x200/black/white/png/?text=" +
							nome
						}
						alt={nome}
						width={90}
					/>
				</div>
				<div className="ms-2">
					<h5 className="mb-0">{nome}</h5>
					<h6>R${preco}</h6>
				</div>
			</div>

			<div className="row align-items-center me-4">
				<div className="btn btn-warning" onClick={excluir}>
					{" "}
					Excluir{" "}
				</div>
			</div>
		</div>
	);
}

export default ProdutoCarrinho;
