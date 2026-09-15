function ProductCard({ nome, preco, categoria, imagem }) {
	return (
		<article className="product-card">
			<img className="product-image" src={imagem} alt={nome} />
			<div className="product-info">
				<span className="product-category">{categoria}</span>
				<h2>{nome}</h2>
				<p className="product-price">R$ {preco}</p>
			</div>
		</article>
	)
}

export default ProductCard
