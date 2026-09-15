function ProductCard({
	nome,
	preco,
	categoria,
	descricao,
	imagem,
	destaque,
	oferta,
	estoque,
	favoritado,
	onAdicionar,
	onFavoritar,
}) {
	return (
		<article className={`product-card ${destaque ? 'is-featured' : ''} ${oferta ? 'is-sale' : ''} ${!estoque ? 'is-out-of-stock' : ''}`}>
			<img className="product-image" src={imagem} alt={nome} />
			<div className="product-info">
				<span className="product-category">{categoria}</span>
				<h2>{nome}</h2>
				<p className="product-description">{descricao}</p>
				<p className="product-price">R$ {preco}</p>
				{!estoque && <p className="stock-message">Fora de estoque</p>}
				<div className="product-actions">
					<button type="button" onClick={onAdicionar} disabled={!estoque}>
						{estoque ? 'Adicionar ao carrinho' : 'Indisponível'}
					</button>
					<button type="button" className="favorite-button" onClick={onFavoritar}>
						{favoritado ? 'Favoritado' : 'Favoritar'}
					</button>
				</div>
			</div>
		</article>
	)
}

export default ProductCard
