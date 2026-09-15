function CartaoProduto({
	nome,
	preco,
	categoria,
	descricao,
	imagem,
	destaque,
	oferta,
	estoque,
	favorito,
	aoAdicionar,
	aoFavoritar,
	aoRemover,
	aoDestacar,
}) {
	return (
		<article className={`cartao-produto ${destaque ? 'destaque' : ''} ${oferta ? 'oferta' : ''} ${!estoque ? 'sem-estoque' : ''}`}>
			<img className="imagem-produto" src={imagem} alt={nome} />
			<div className="info-produto">
				<span className="categoria-produto">{categoria}</span>
				<h2>{nome}</h2>
				<p className="descricao-produto">{descricao}</p>
				<p className="preco-produto">R$ {preco}</p>
				{!estoque && <p className="mensagem-estoque">Fora de estoque</p>}
				<div className="acoes-produto">
					<button type="button" onClick={aoAdicionar} disabled={!estoque}>
						{estoque ? 'Adicionar ao carrinho' : 'Indisponível'}
					</button>
					<button type="button" className="botao-favorito" onClick={aoFavoritar}>
						{favorito ? 'Favoritado' : 'Favoritar'}
					</button>
					<button type="button" onClick={aoDestacar}>
						{destaque ? 'Remover destaque' : 'Destacar'}
					</button>
					<button type="button" className="botao-remover" onClick={aoRemover}>
						Remover
					</button>
				</div>
			</div>
		</article>
	)
}

export default CartaoProduto
