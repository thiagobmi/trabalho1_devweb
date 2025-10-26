import { useState } from "react";
import produtos from "../data/db.json";
import Carrinho from "./pages/Carrinho";
import ProdList from "./pages/ProdList";
import ProdDetalhe from "./pages/ProdDetalhe";
import { Routes, Route } from "react-router-dom";
import Page404 from "./pages/Page404";
import PaginaInicial from "./pages/PaginaInicial";

function App() {
	const [produtosCarrinho, setProdutosCarrinho] = useState([]);
	const prods = produtos.produtos;
	return (
		<>
			<Routes>
				<Route
					path="/"
					element={
						<PaginaInicial
							produtos={prods}
							setProdutosCarrinho={setProdutosCarrinho}
							produtosCarrinho={produtosCarrinho}
						/>
					}
				/>
				<Route
					path="/carrinho"
					element={
						<Carrinho
							produtos={produtosCarrinho}
							setProdutosCarrinho={setProdutosCarrinho}
						></Carrinho>
					}
				/>
				<Route
					path="/produto/:id"
					element={<ProdDetalhe produtos={prods} />}
				/>
				<Route path="*" element={<Page404 />} />
			</Routes>
		</>
	);
}

export default App;
