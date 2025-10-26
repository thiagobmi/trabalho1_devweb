import Produto from "../components/Produto";
import { Link } from "react-router-dom";
import HeaderPagina from "../components/HeaderPagina";

function ProdList({ produtos, setProdutosCarrinho, produtosCarrinho }) {
	return (
		<>
			<HeaderPagina />
			<div className="container">
				<Link
					to="/carrinho"
					className="h1 text-decoration-none d-flex align-items-center gap-2"
				>
					<i className="bi bi-cart"></i>
					<span>Carrinho ({produtosCarrinho.length})</span>
				</Link>
				<h1>Lista de Produtos</h1>
				<div className="ms-1 d-flex gap-2">
					{produtos.map((element, index) => (
						<Produto
							key={index}
							id={element.id}
							nome={element.nome}
							preco={element.preco}
							numAvaliacoes={element.numAvaliacoes}
							avaliacao={element.avaliacao}
							setProdutosCarrinho={setProdutosCarrinho}
						/>
					))}
				</div>
			</div>
		</>
	);
}

export default ProdList;
