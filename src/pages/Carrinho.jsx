import ProdutoCarrinho from "../components/produtoCarrinho";
import HeaderPagina from "../components/HeaderPagina";
function Carrinho({ produtos, setProdutosCarrinho }) {
	const prods = produtos || [];
	let total = 0;
	prods.forEach((element) => {
		total += element.preco;
	});
	const limparCarrinho = () => {
		setProdutosCarrinho([]);
	};
	return (
		<>
			<HeaderPagina />
			<div className="container h1 text-decoration-none d-flex align-items-center gap-2 ">
				<i className="bi bi-cart"></i>
				<h1>Carrinho ({prods.length})</h1>
			</div>

			<div className="container bg-secondary-subtle mb-4 pt-3">
				<h3>Total: R$ {total}</h3>

				{prods.map((element, index) => (
					<ProdutoCarrinho
						key={index}
						nome={element.nome}
						preco={element.preco}
						setProdutosCarrinho={setProdutosCarrinho}
						index={index}
					/>
				))}
				<button
					className="btn btn-danger ms-1 my-2"
					onClick={limparCarrinho}
				>
					Limpar
				</button>
			</div>
		</>
	);
}
export default Carrinho;
