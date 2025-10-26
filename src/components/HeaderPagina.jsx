import { Link } from "react-router-dom";
function HeaderPagina() {
	return (
		<>
			<h1 className="text-center bg-primary text-white p-2 fw-light w-100">
				<Link to="/" className="text-white text-decoration-none">
					Minha Loja
				</Link>
			</h1>
		</>
	);
}

export default HeaderPagina;
