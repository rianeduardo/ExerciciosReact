function Cabecalho() {
	return (
		<header className="cabecalho">
			<a className="marca" href="#inicio">
				<span className="simbolo-marca">CN</span>
				<span>Casa Nativa</span>
			</a>
			<button className="botao-destaque" type="button">
				Ver novidades <span>-&gt;</span>
			</button>
		</header>
	)
}

export default Cabecalho
