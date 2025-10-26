import { Rating } from "react-simple-star-rating";
import { Link } from "react-router-dom";

function Produto({
	id,
	nome,
	preco,
	numAvaliacoes,
	avaliacao,
	setProdutosCarrinho,
}) {
	const adicionar = () => {
		const newProdutoCarrinho = { nome, preco };
		setProdutosCarrinho((prevProdutos) => [
			...prevProdutos,
			newProdutoCarrinho,
		]);
	};
	return (
		<div className="d-inline-block text-center border border-1">
			<div className="">
				<img
					src={
						"https://placehold.co/200x150/black/white/png/?text=" +
						nome
					}
					alt={nome}
				/>
			</div>

			<div className="text-center mt-3">
				<Link to={`/produto/${id}`} className="h4">
					{nome}
				</Link>
				<br />
				<Rating
					initialValue={avaliacao}
					readonly={true}
					size={20}
					fillColor="#ffc107"
				/>{" "}
				<span className="ms-1 align-items-center">
					{" "}
					{numAvaliacoes}{" "}
				</span>
				<br />
				<span className="fw">R$ {preco}</span>
				<br />
				<div
					className="btn btn-outline-success w-75 mb-3"
					onClick={adicionar}
				>
					{" "}
					Comprar
				</div>
			</div>
		</div>
	);
}

export default Produto;
