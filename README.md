# BibliotecaEstudos
Estou reunindo o conteúdo de programação desde a base, até para conceitos mais complexos meu objetivo é conseguir aprender e reforçar minha base para que consiga compreender assuntos mais complexos

## Resumo da pasta HTML

A pasta **HTML** contém exemplos e exercícios sobre a estruturação de páginas web utilizando a linguagem HTML. Os principais tópicos abordados incluem:

- Estrutura básica de um documento HTML
- Utilização de tags de texto
- Listas ordenadas e não ordenadas
- Inserção de imagens e links
- Estruturação de tabelas
- Formulários básicos
- Comentários e boas práticas

### Exemplos de código

**Estrutura básica:**
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Minha Página</title>
  </head>
  <body>
    <h1>Olá, mundo!</h1>
  </body>
</html>
```

**Listas:**
```html
<ol>
  <li>Primeiro item</li>
  <li>Segundo item</li>
</ol>
<ul>
  <li>Item A</li>
  <li>Item B</li>
</ul>
```

**Imagens e Links:**
```html
<img src="imagem.jpg" alt="Descrição da imagem">
<a href="https://www.exemplo.com">Visite o site</a>
```

**Tabelas:**
```html
<table>
  <tr>
    <th>Nome</th>
    <th>Idade</th>
  </tr>
  <tr>
    <td>Ana</td>
    <td>25</td>
  </tr>
</table>
```

**Formulários:**
```html
<form>
  <label for="nome">Nome:</label>
  <input type="text" id="nome" name="nome">
  <button type="submit">Enviar</button>
</form>
```

## Resumo da pasta CSS

A pasta **CSS** reúne exemplos e exercícios sobre a estilização de páginas web utilizando a linguagem CSS. Os principais temas estudados incluem:

- **Seletores básicos e combinadores:**  
  Seletores de tag, classe, id, descendente, filho, irmão adjacente e geral.
- **Propriedades de cor e fundo:**  
  `color`, `background-color`, `background-image`, `background-repeat`, `background-size`.
- **Fontes e texto:**  
  `font-family`, `font-size`, `font-weight`, `font-style`, `text-align`, `text-decoration`, `line-height`, `letter-spacing`.
- **Box Model:**  
  `width`, `height`, `padding`, `margin`, `border`, `box-sizing`.
- **Display e posicionamento:**  
  `display` (`block`, `inline`, `inline-block`, `none`), `position` (`static`, `relative`, `absolute`, `fixed`, `sticky`), `top`, `right`, `bottom`, `left`, `z-index`.
- **Flexbox:**  
  `display: flex`, `flex-direction`, `justify-content`, `align-items`, `flex-wrap`, `gap`.
- **Grid Layout:**  
  `display: grid`, `grid-template-columns`, `grid-template-rows`, `gap`, `grid-area`.
- **Pseudo-classes e pseudo-elementos:**  
  `:hover`, `:active`, `:focus`, `:nth-child()`, `::before`, `::after`.
- **Transições e animações:**  
  `transition`, `transition-duration`, `animation`, `@keyframes`.
- **Responsividade:**  
  Media queries (`@media`), unidades relativas (`em`, `rem`, `%`, `vw`, `vh`), layout fluido.
- **Importação e organização:**  
  `@import`, comentários, organização de arquivos CSS externos.

### Exemplos de código

**Seletores e cor de fundo:**
```css
body {
  background-color: #f0f0f0;
}
h1 {
  color: #333;
}
.titulo-destaque {
  color: blue;
  background: yellow;
}
```
