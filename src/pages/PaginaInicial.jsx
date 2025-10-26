import ProdList from "./ProdList";

function PaginaInicial({ produtos, produtosCarrinho, setProdutosCarrinho }) {
	return (
		<div>
			<ProdList
				produtos={produtos}
				setProdutosCarrinho={setProdutosCarrinho}
				produtosCarrinho={produtosCarrinho}
			/>
		</div>
	);
}

export default PaginaInicial;
