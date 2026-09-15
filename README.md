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

- ```Header.jsx```, ```ProductCard.jsx``` em ```src/components```.
- ```Home.jsx``` em ```src/pages```.

Além de termos configurado o App.jsx em ```src``` para conter informações da loja

## 6. Props, eventos e renderização

- A lista fixa com 5 produtos fica em `Home.jsx` e é exibida usando `map`.
- Os dados de cada produto são enviados para `ProductCard.jsx` por props.
- Cada card tem botões para adicionar ao carrinho e favoritar o produto.
- A mensagem de produtos indisponíveis aparece quando não há itens em estoque.
- As classes `is-featured`, `is-sale` e `is-out-of-stock` diferenciam os produtos em destaque, em oferta e fora de estoque.
