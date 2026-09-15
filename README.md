# Exercicios React

Projeto de estudos desenvolvido com React e Vite.

## 1. Tecnologias

- React
- Vite
- JavaScript

## 2. Pre-requisitos

- Node.js instalado
- npm instalado

## 3. Instalacao

Abra o terminal na pasta `exercicios` e execute:

```bash
npm install
```

Esse comando instala as dependências definidas no `package.json` e atualiza o `package-lock.json` quando necessário.

## 4. Execução

Ainda na pasta `exercicios`, execute:

```bash
npm run dev
```

Esse comando inicia o servidor de desenvolvimento do Vite. Depois, acesse a URL exibida no terminal, normalmente `http://localhost:5173`.

## 5. Criando os primeiros componentes

Na etapa 2, criamos 2 componentes e 1 page.

- ```Cabecalho.jsx```, ```CartaoProduto.jsx``` em ```src/components```.
- ```Inicio.jsx``` em ```src/pages```.

Além de termos configurado o App.jsx em ```src``` para conter informações da loja

## 6. Props, eventos e renderização

- A lista fixa com 5 produtos fica em `Inicio.jsx` e é exibida usando `map`.
- Os dados de cada produto são enviados para `CartaoProduto.jsx` por props.
- Cada card tem botões para adicionar ao carrinho e favoritar o produto.
- A mensagem de produtos indisponíveis aparece quando não há itens em estoque.
- As classes `destaque`, `oferta` e `sem-estoque` diferenciam os produtos em destaque, em oferta e fora de estoque.

## 7. Estado com React

- A lista de produtos agora usa `useState`.
- O formulário cadastra produtos com nome, preço e categoria.
- O botão `Remover` remove o produto criando um novo array com `filter`.
- O botão `Destacar` altera o destaque usando `map`, sem mutar o estado original.
- O cabeçalho mostra o total de produtos e o valor acumulado no carrinho.
