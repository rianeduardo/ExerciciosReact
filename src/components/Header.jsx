function Header() {
	return (
		<header className="site-header">
			<a className="brand" href="#inicio" aria-label="Casa Nativa - inicio">
				<span className="brand-mark">CN</span>
				<span>Casa Nativa</span>
			</a>
			<button className="highlight-button" type="button">
				Ver novidades <span aria-hidden="true">-&gt;</span>
			</button>
		</header>
	)
}

export default Header
