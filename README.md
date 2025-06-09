# 📚 Biblioteca de Estudos para Desenvolvimento Web

Bem-vindo à sua central de estudos de desenvolvimento web! Este repositório foi criado para organizar e consolidar o conhecimento em programação, desde os conceitos fundamentais até os tópicos mais avançados. O objetivo é servir como um guia de referência rápida e um registro do seu progresso.

## 🎯 Objetivo

Reforçar a base de conhecimento em tecnologias web (HTML, CSS, JavaScript) e ferramentas essenciais (Git) para construir uma fundação sólida, permitindo a compreensão de assuntos mais complexos no futuro, como frameworks e desenvolvimento backend.

## 🗂️ Estrutura do Repositório

- **/HTML**: Contém a estrutura e os elementos fundamentais da web.
- **/CSS**: Abrange a estilização e o design visual das páginas.
- **/JavaScript**: Focado na lógica, interatividade e dinamismo.
- **/Git**: Guia de comandos para versionamento de código.

---

## 🏛️ HTML (HyperText Markup Language)

A pasta **HTML** contém exemplos e exercícios sobre a estruturação de páginas web. É o esqueleto de qualquer site.

### Tópicos Principais

-   **Estrutura Básica**: A base de todo documento HTML (`<!DOCTYPE>`, `<html>`, `<head>`, `<body>`).
-   **Tags de Texto**: Hierarquia de títulos (`<h1>` a `<h6>`), parágrafos (`<p>`), negrito (`<strong>`), itálico (`<em>`).
-   **Listas**: Ordenadas (`<ol>`) e não ordenadas (`<ul>`).
-   **Mídia e Links**: Inserção de imagens (`<img>`) e criação de hyperlinks (`<a>`).
-   **Tabelas**: Estruturação de dados tabulares com `<table>`, `<tr>`, `<th>`, e `<td>`.
-   **Formulários**: Elementos de entrada de dados como `<form>`, `<input>`, `<textarea>`, `<button>`.
-   **HTML Semântico**: Uso de tags que descrevem seu significado, como `<header>`, `<main>`, `<footer>`, `<section>`, `<article>`, e `<nav>`, melhorando a acessibilidade e o SEO.
-   **Comentários**: Boas práticas para documentar o código (``).

### Exemplos de Código

**Estrutura Semântica:**
```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Minha Página Semântica</title>
  </head>
  <body>
    <header>
      <h1>Logo da Empresa</h1>
      <nav>
        <ul>
          <li><a href="#inicio">Início</a></li>
          <li><a href="#sobre">Sobre</a></li>
        </ul>
      </nav>
    </header>

    <main>
      <section id="sobre">
        <h2>Sobre Nós</h2>
        <p>Esta é uma seção sobre a nossa história.</p>
      </section>
    </main>

    <footer>
      <p>&copy; 2025 Minha Empresa. Todos os direitos reservados.</p>
    </footer>
  </body>
</html>
```

**Formulário Completo:**
```html
<form action="/enviar-dados" method="post">
  <label for="nome">Nome:</label>
  <input type="text" id="nome" name="nome_usuario" required>

  <label for="email">Email:</label>
  <input type="email" id="email" name="email_usuario" required>

  <button type="submit">Enviar</button>
</form>
```

---

## 🎨 CSS (Cascading Style Sheets)

A pasta **CSS** reúne exemplos sobre a estilização de páginas web. É responsável pela aparência e pelo design.

### Tópicos Principais

-   **Seletores e Combinadores**: Selecione elementos por tag, classe (`.`), ID (`#`), atributos e pseudo-classes (`:hover`).
-   **Cores e Fundos**: `color`, `background-color`, `background-image`, etc.
-   **Fontes e Textos**: `font-family`, `font-size`, `font-weight`, `text-align`.
-   **Box Model**: O conceito fundamental de caixas em CSS, incluindo `margin`, `border`, `padding`, e `width`/`height`. A propriedade `box-sizing: border-box;` é essencial.
-   **Display e Posicionamento**: Controle do fluxo da página com `display` (`block`, `inline`, `flex`, `grid`) e `position` (`static`, `relative`, `absolute`, `fixed`).
-   **Flexbox**: Alinhamento e distribuição de itens em um contêiner unidimensional.
-   **Grid Layout**: Criação de layouts complexos em duas dimensões (linhas e colunas).
-   **Responsividade**: Adaptação do layout para diferentes tamanhos de tela usando Media Queries (`@media`) e unidades relativas (`%`, `vw`, `rem`).

### Exemplos de Código

**Box Model e `box-sizing`:**
```css
.caixa {
  width: 300px;
  padding: 20px; /* 20px de preenchimento interno */
  border: 2px solid black; /* 2px de borda */
  margin: 15px; /* 15px de espaçamento externo */

  /* Com isso, o padding e a borda não aumentam a largura total da caixa */
  box-sizing: border-box;
}
```

**Layout com Flexbox:**
```css
.container-flex {
  display: flex;
  flex-direction: row; /* Itens em linha */
  justify-content: space-around; /* Espaçamento distribuído */
  align-items: center; /* Alinhamento vertical */
  gap: 10px; /* Espaçamento entre os itens */
}
```

**Layout com Grid:**
```css
.container-grid {
  display: grid;
  /* Cria 3 colunas de fração igual */
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px; /* Espaçamento entre as células */
}
```

**Media Query para Responsividade:**
```css
/* Para telas com largura máxima de 600px */
@media (max-width: 600px) {
  .container-flex {
    flex-direction: column; /* Altera a direção para coluna */
  }
}
```

---

## 📜 JavaScript

A pasta **JavaScript** contém a lógica e a interatividade do seu site, desde a manipulação de elementos da página até a comunicação com servidores.

### Tópicos Principais

-   **Sintaxe Básica**: Variáveis (`let`, `const`), tipos de dados (String, Number, Boolean, Object, Array), e operadores (`+`, `-`, `*`, `/`, `===`, `&&`, `||`).
-   **Estruturas de Controle**: Condicionais (`if`/`else`, `switch`) e laços de repetição (`for`, `while`).
-   **Funções**: Blocos de código reutilizáveis (`function`, arrow functions `=>`).
-   **Arrays e Objetos**: Manipulação de listas de dados e estruturas complexas. Métodos como `.map()`, `.filter()`, e `.reduce()` são essenciais.
-   **Manipulação do DOM (Document Object Model)**: Acessar e modificar o HTML e o CSS da página. `document.getElementById()`, `document.querySelector()`, `element.textContent`, `element.style`.
-   **Eventos**: Responder a ações do usuário, como cliques (`click`), pressionamento de teclas (`keydown`) e envio de formulários (`submit`). `element.addEventListener()`.
-   **Assincronismo**: Lidar com operações que levam tempo, como requisições a APIs, usando `Promises` e `async/await`.

### Exemplos de Código

**Manipulação do DOM e Eventos:**
```html
<h1 id="titulo">Olá, Mundo!</h1>
<button id="meuBotao">Mudar Texto</button>
```
```javascript
// no seu script.js
const titulo = document.getElementById('titulo');
const botao = document.getElementById('meuBotao');

// Adiciona um "ouvinte" de evento de clique no botão
botao.addEventListener('click', () => {
  titulo.textContent = 'O texto foi alterado!';
  titulo.style.color = 'blue';
});
```

**Manipulação de Arrays com `.map()`:**
```javascript
const numeros = [1, 2, 3, 4, 5];

// .map() cria um novo array com o resultado da função
const numerosDobrados = numeros.map(num => num * 2);

console.log(numerosDobrados); // Saída: [2, 4, 6, 8, 10]
```

**Requisição Assíncrona com `async/await`:**
```javascript
// Função que busca dados de uma API de exemplo
async function buscarDados() {
  try {
    const response = await fetch('[https://api.github.com/users/google](https://api.github.com/users/google)');
    const data = await response.json();
    console.log(`Nome da organização: ${data.name}`);
  } catch (error) {
    console.error('Falha ao buscar dados:', error);
  }
}

buscarDados();
```

---

## 🌿 Git e GitHub

Comandos essenciais para o versionamento de código e colaboração.

### Configuração Inicial
```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"
```

### Fluxo de Trabalho Básico
```bash
# Inicia um repositório local
git init

# Adiciona todos os arquivos modificados para a área de "stage"
git add .

# Salva as alterações com uma mensagem descritiva
git commit -m "feat: Adiciona estrutura inicial do projeto"

# Envia os commits para o repositório remoto (ex: GitHub)
git push origin main

# Puxa as atualizações do repositório remoto
git pull
```

### Trabalhando com Branches
```bash
# Cria uma nova branch e já muda para ela
git checkout -b minha-nova-feature

# Após commitar as alterações na branch, volte para a principal
git checkout main

# Mescla as alterações da sua feature na branch principal
git merge minha-nova-feature

# Deleta a branch após a mesclagem
git branch -d minha-nova-feature
```

### Comandos Úteis
```bash
# Verifica o status atual dos arquivos
git status

# Exibe o histórico de commits
git log --oneline

# Reverte as alterações de um arquivo para a versão do último commit
git restore <nome-do-arquivo>

# Salva alterações não commitadas temporariamente
git stash

# Aplica as últimas alterações salvas com o stash
git stash pop
```