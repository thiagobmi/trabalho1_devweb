import { Rating } from "react-simple-star-rating";
import { useParams } from "react-router-dom";
import HeaderPagina from "../components/HeaderPagina";

function ProdDetalhe({ produtos }) {
	const { id } = useParams();

	const produto = produtos.find((p) => p.id == id);

	if (!produto) {
		return (
			<>
			<HeaderPagina/>
			<div className="text-center">
				<h1>Erro 404 <br></br>Produto não encontrado</h1>
			</div>
			</>
		);
	}

	return (
		<>
			<HeaderPagina/>
			<div className="container">
				<div className="row">
					<div className="col">
						<img
							src={
								"https://placehold.co/500x500/black/white/png/?text=" +
								produto.nome
							}
							alt={produto.nome}
						/>
					</div>

					<div className="col">
						<div className="mt-3">
							<h1>{produto.nome}</h1>
							<br />
							<Rating
								initialValue={produto.avaliacao}
								readonly={true}
								size={30}
								fillColor="#ffc107"
							/>{" "}
							<span className="h5 ms-1 align-items-center ">
								{" "}
								{produto.numAvaliacoes}{" "}
							</span>
							<br />
							<h4 className="fw">R$ {produto.preco}</h4>
							<br />
							<h5>{produto.desc}</h5>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default ProdDetalhe;
