import { useState } from 'react'
import CartaoProduto from '../components/CartaoProduto'

const produtosIniciais = [
  {
    id: 1,
    nome: 'Caneta Montblanc Meisterstück LeGrand',
    preco: '7100,00',
    categoria: 'Papelaria',
    descricao: 'Caneta elegante para momentos especiais.',
    destaque: true,
    oferta: false,
    estoque: true,
    imagem: 'https://montblancbr.vtexassets.com/arquivos/ids/174466/caneta-tinteiro-meisterstuck-legrand-revestida-a-platina-f-132442_3.jpg?v=638574399382270000',
  },
  {
    id: 2,
    nome: 'Caneta Bic Preta',
    preco: '1,50',
    categoria: 'Papelaria',
    descricao: 'Praticidade para escrever todos os dias.',
    destaque: false,
    oferta: true,
    estoque: true,
    imagem: 'https://framepapelaria.cdn.magazord.com.br/img/2024/06/produto/23482/design-sem-nome-2024-06-15t115434-680.png?ims=fit-in/800x800/filters:fill(white)',
  },
  {
    id: 3,
    nome: 'Caneca Polimero Branca 325ml',
    preco: '6,00',
    categoria: 'Cozinha',
    descricao: 'Uma caneca leve para sua rotina.',
    destaque: false,
    oferta: false,
    estoque: true,
    imagem: 'https://cdn.awsli.com.br/800x800/866/866032/produto/34846525/caneca-de-polimero-9schkj519f.png',
  },
  {
    id: 4,
    nome: 'Caderno de Anotações',
    preco: '24,90',
    categoria: 'Papelaria',
    descricao: 'Páginas para organizar ideias e planos.',
    destaque: false,
    oferta: true,
    estoque: true,
    imagem: 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 5,
    nome: 'Garrafa de Vidro',
    preco: '39,90',
    categoria: 'Cozinha',
    descricao: 'Design simples para acompanhar seu dia.',
    destaque: false,
    oferta: false,
    estoque: false,
    imagem: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=900&q=80',
  },
]

function Inicio() {
  const [produtos, setProdutos] = useState(produtosIniciais)
  const [carrinho, setCarrinho] = useState([])
  const [favoritos, setFavoritos] = useState([])
  const [novoProduto, setNovoProduto] = useState({
    nome: '',
    preco: '',
    categoria: '',
  })
  const produtosDisponiveis = produtos.filter((produto) => produto.estoque)
  const valorCarrinho = carrinho.reduce(
    (total, produto) => total + Number(produto.preco.replace(',', '.')),
    0,
  )

  function cadastrarProduto(evento) {
    evento.preventDefault()

    if (!novoProduto.nome || !novoProduto.preco || !novoProduto.categoria) {
      return
    }

    setProdutos((itens) => [
      ...itens,
      {
        id: Date.now(),
        ...novoProduto,
        descricao: 'Produto cadastrado na loja.',
        destaque: false,
        oferta: false,
        estoque: true,
        imagem: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80',
      },
    ])
    setNovoProduto({ nome: '', preco: '', categoria: '' })
  }

  function atualizarCampo(evento) {
    const { name, value } = evento.target
    setNovoProduto((produto) => ({ ...produto, [name]: value }))
  }

  function adicionarAoCarrinho(produto) {
    setCarrinho((itens) => [...itens, produto])
  }

  function alternarFavorito(produto) {
    setFavoritos((itens) =>
      itens.includes(produto)
        ? itens.filter((item) => item !== produto)
        : [...itens, produto],
    )
  }

  function removerProduto(id) {
    setProdutos((itens) => itens.filter((produto) => produto.id !== id))
    setCarrinho((itens) => itens.filter((produto) => produto.id !== id))
    setFavoritos((itens) => itens.filter((produto) => produto.id !== id))
  }

  function alternarDestaque(id) {
    setProdutos((itens) =>
      itens.map((produto) =>
        produto.id === id
          ? { ...produto, destaque: !produto.destaque }
          : produto,
      ),
    )
  }

  return (
    <section>
      <div className="cabecalho-secao">
        <h2 id="titulo-produtos">Escolhas da semana</h2>
        <span>{produtos.length} produtos | {valorCarrinho.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} no carrinho</span>
      </div>
      <form className="formulario-produto" onSubmit={cadastrarProduto}>
        <h2>Cadastrar produto</h2>
        <div className="campos-formulario">
          <input
            name="nome"
            value={novoProduto.nome}
            onChange={atualizarCampo}
            placeholder="Nome do produto"
          />
          <input
            name="preco"
            value={novoProduto.preco}
            onChange={atualizarCampo}
            placeholder="Preço"
            type="number"
            step="0.01"
          />
          <input
            name="categoria"
            value={novoProduto.categoria}
            onChange={atualizarCampo}
            placeholder="Categoria"
          />
          <button type="submit">Cadastrar</button>
        </div>
      </form>
      {produtosDisponiveis.length === 0 && (
        <p className="mensagem-vazia">Não há produtos disponíveis no momento.</p>
      )}
      <div className="grade-produtos">
        {produtos.map((produto) => (
          <CartaoProduto
            key={produto.nome}
            {...produto}
            favorito={favoritos.includes(produto)}
            aoAdicionar={() => adicionarAoCarrinho(produto)}
            aoFavoritar={() => alternarFavorito(produto)}
            aoRemover={() => removerProduto(produto.id)}
            aoDestacar={() => alternarDestaque(produto.id)}
          />
        ))}
      </div>
    </section>
  )
}

export default Inicio
